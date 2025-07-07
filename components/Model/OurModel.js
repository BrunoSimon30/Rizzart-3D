import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";

import * as THREE from "three";

export default function OurModel(props) {
  const { nodes, materials } = useGLTF("./img/game-optimized.glb");
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9);

  // Defensive check for required data
  if (!materials["Material.006"] || !nodes.Object_21) return null;

  // Create video texture
  const videoTexture = useVideoTexture("./img/rizzvid.webm", {
    unsuspend: "loadstart",
    crossOrigin: "Anonymous",
    muted: true,
    loop: true,
    start: true,
  });

  // Your perfect scaling and positioning values
  const scaleX = 5.0;
  const scaleY = 5.0;
  const offsetX = 0.3;
  const offsetY = 0;
  const rotation = 0;

  // Clone the original material and apply video texture
  const screenMaterial = useMemo(
    () => materials["Material.006"].clone(),
    [materials]
  );

  // Calculate mesh UV bounds to understand the surface
  useEffect(() => {
    if (nodes.Object_21?.geometry) {
      const geometry = nodes.Object_21.geometry;
      const uvAttribute = geometry.attributes.uv;

      if (uvAttribute) {
        // Calculate UV bounds
        let minU = Infinity,
          maxU = -Infinity;
        let minV = Infinity,
          maxV = -Infinity;

        for (let i = 0; i < uvAttribute.count; i++) {
          const u = uvAttribute.getX(i);
          const v = uvAttribute.getY(i);
          minU = Math.min(minU, u);
          maxU = Math.max(maxU, u);
          minV = Math.min(minV, v);
          maxV = Math.max(maxV, v);
        }

        const uvWidth = maxU - minU;
        const uvHeight = maxV - minV;
        const meshAspectRatio = uvWidth / uvHeight;

        console.log(
          `Mesh UV bounds: ${uvWidth.toFixed(3)} x ${uvHeight.toFixed(
            3
          )}, aspect ratio: ${meshAspectRatio.toFixed(3)}`
        );
      }
    }
  }, [nodes]);

  // Get video dimensions and calculate aspect ratio
  useEffect(() => {
    if (videoTexture?.image) {
      const video = videoTexture.image;

      const updateVideoInfo = () => {
        if (video.videoWidth && video.videoHeight) {
          const aspectRatio = video.videoWidth / video.videoHeight;
          setVideoAspectRatio(aspectRatio);
          console.log(
            `Video dimensions: ${video.videoWidth} x ${
              video.videoHeight
            }, aspect ratio: ${aspectRatio.toFixed(3)}`
          );
        }
      };

      if (video.readyState >= 1) {
        updateVideoInfo();
      } else {
        video.addEventListener("loadedmetadata", updateVideoInfo);
        return () =>
          video.removeEventListener("loadedmetadata", updateVideoInfo);
      }
    }
  }, [videoTexture]);

  // Apply texture transformations with your perfect values
  useEffect(() => {
    if (videoTexture) {
      // Apply the video texture
      screenMaterial.map = videoTexture;

      // Your perfect scaling values
      videoTexture.repeat.set(scaleX, scaleY);
      videoTexture.offset.set(offsetX, offsetY);
      videoTexture.rotation = rotation;

      // Set texture center for rotation
      videoTexture.center.set(0.5, 0.5);

      // Texture wrapping mode
      videoTexture.wrapS = THREE.ClampToEdgeWrap;
      videoTexture.wrapT = THREE.ClampToEdgeWrap;

      // Update material
      screenMaterial.needsUpdate = true;
    } else {
      // Restore original texture
      screenMaterial.map = materials["Material.006"].map;
      screenMaterial.needsUpdate = true;
    }
  }, [videoTexture, materials]);

  return (
    <group {...props} dispose={null}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 1.55, 0.177]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.249}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 1.556, 0.177]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.243}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.084, 1.221, 0.223]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.351}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.PaletteMaterial004}
        position={[0.093, 0.916, 0.175]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Edge_Wear_Black}
        position={[-0.003, 0.876, 0.15]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['Material.007']}
        position={[-0.003, 0.825, -0.006]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial005}
        position={[-0.006, 0.825, -0.006]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.824}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.PaletteMaterial006}
        position={[-0.003, 1.078, 0.147]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Wood_Black.001']}
        position={[-0.006, 0.825, -0.006]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Wood_Black}
        position={[-0.006, 0.825, -0.005]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.Dirrty_white_plastic}
        position={[-0.002, 0.871, 0.219]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.Old_Green_Plastic}
        position={[-0.067, 0.92, 0.261]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials['Wood_Black.002']}
        position={[-0.003, 0.359, 0.122]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.328}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.001']}
        position={[-0.004, 0.927, 0.097]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial007}
        position={[0.005, 0.473, 0.131]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={0.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={screenMaterial}
        position={[-0.005, 1.183, 0.03]}
        rotation={[Math.PI / 2, 0, -0.019]}
        scale={[0.22, 0.2, 0.2]}
      />
    </group>
  );
}

useGLTF.preload("./img/game-optimized.glb");
