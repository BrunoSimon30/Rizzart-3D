import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
 
import * as THREE from "three";

export default function OurModel(props) {
  const { nodes, materials } = useGLTF("./img/game.glb");
  const [videoAspectRatio, setVideoAspectRatio] = useState(16/9);

  // Defensive check for required data
  if (!materials["Material.006"] || !nodes.Object_21) return null;

  


  
  // Create video texture
  const videoTexture = useVideoTexture("./img/rizzvid.webm", {
    unsuspend: "loadstart",
    crossOrigin: "Anonymous",
    muted: true,
    loop: true,
    start: true
  });

  

  // Your perfect scaling and positioning values
 const scaleX = 5.0;
  const scaleY = 5.0;
  const offsetX = 0.30;
  const offsetY = 0;
  const rotation = 0;

  // Clone the original material and apply video texture
 const screenMaterial = useMemo(() => materials["Material.006"].clone(), [materials]);
  
  // Calculate mesh UV bounds to understand the surface
  useEffect(() => {
    if (nodes.Object_21?.geometry) {
      const geometry = nodes.Object_21.geometry;
      const uvAttribute = geometry.attributes.uv;
      
      if (uvAttribute) {
        // Calculate UV bounds
        let minU = Infinity, maxU = -Infinity;
        let minV = Infinity, maxV = -Infinity;
        
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
        
        console.log(`Mesh UV bounds: ${uvWidth.toFixed(3)} x ${uvHeight.toFixed(3)}, aspect ratio: ${meshAspectRatio.toFixed(3)}`);
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
          console.log(`Video dimensions: ${video.videoWidth} x ${video.videoHeight}, aspect ratio: ${aspectRatio.toFixed(3)}`);
        }
      };

      if (video.readyState >= 1) {
        updateVideoInfo();
      } else {
        video.addEventListener('loadedmetadata', updateVideoInfo);
        return () => video.removeEventListener('loadedmetadata', updateVideoInfo);
      }
    }
  }, [videoTexture]);

  // Apply texture transformations with your perfect values
  useEffect(() => {
    if ( videoTexture) {
      // Apply the video texture
      screenMaterial.map = videoTexture;
      
      // Your perfect scaling values
      videoTexture.repeat.set(scaleX, scaleY);
      videoTexture.offset.set(offsetX, offsetY );
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
  }, [ videoTexture, materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -0.019]}>
        {/* All your existing meshes */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.SVGMat}
        />
        
        <mesh geometry={nodes.Object_5.geometry} material={materials["Material.004"]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials["Material.005"]} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Edge_Wear_Black} />
        <mesh geometry={nodes.Object_9.geometry} material={materials["Material.007"]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Procedural_Smooth_Metal} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_12.geometry} material={materials["Wood_Black.001"]} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Wood_Black} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Dirrty_white_plastic} />
        <mesh geometry={nodes.Object_15.geometry} material={materials["Material.002"]} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Old_Green_Plastic} />
        <mesh geometry={nodes.Object_17.geometry} material={materials["Wood_Black.002"]} />
        <mesh geometry={nodes.Object_18.geometry} material={materials["Material.001"]} />
        <mesh geometry={nodes.Object_19.geometry} material={materials["Old_Green_Plastic.001"]} />
        <mesh geometry={nodes.Object_20.geometry} material={materials["Material.003"]} />
        
        {/* Screen mesh with properly scaled video texture */}
        <mesh
          geometry={nodes.Object_21.geometry}
          material={screenMaterial}
          
        />
      </group>
    </group>
  );
}

useGLTF.preload("./img/game.glb");