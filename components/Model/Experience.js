import React, { useRef, useEffect } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import OurModel from "./OurModel";

export default function Experience() {
  const cameraRef = useRef();
  const modelRef = useRef();
  const rotationStateRef = useRef({
    isRotating: false,
    baseRotation: { x: 0, y: -1.4, z: 0 }, // The target rotation for the section
    accumulatedRotation: 0, // Track additional rotation from continuous spinning
    lastTime: 0
  });
  const cameraTargetRef = useRef(new THREE.Vector3(0, -0.011, 0.8));

  // Section configurations
  const sections = [
    {
      trigger: ".section-one",
      camera: { x: 0, y: -0.011, z: 0.8 },
      model: {
        position: { x: 0, y: -3, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
      },
    },
    {
      trigger: ".sec-two",
      camera: { x: 0, y: 0, z: 2.5 },
      model: {
        position: { x: 0, y: -3, z: 0 },
        rotation: { x: 0, y: 0.3, z: 0 },
      },
    },
    {
      trigger: ".sec-three",
      camera: { x: 0, y: 0, z: 2.5 },
      model: {
        position: { x: -2.5, y: -2, z: -2 },
        rotation: { x: 0.02, y: 0.9, z: 0 },
      },
    },
    {
      trigger: ".about-sec",
      camera: { x: 0, y: 0, z: 2.5 },
      model: {
        position: { x: 4, y: -3, z: -2 },
        rotation: { x: 0, y: -1.4, z: 0 },
      },
    },
    {
      trigger: ".ourblog-sec",
      camera: { x: 0, y: 0, z: 2.5 },
      model: {
        position: { x: -1.1, y: -2, z: -4 },
        rotation: { x:  0, y: -1.4, z: 0 }, // Base rotation
      },
    },
  ];

  useFrame((state, delta) => {
    // Camera animation
    if (cameraRef.current && cameraTargetRef.current) {
      cameraRef.current.position.lerp(cameraTargetRef.current, 0.05);
      cameraRef.current.lookAt(0, 0, 0);
    }

    // Model rotation animation
    if (modelRef.current && rotationStateRef.current.isRotating) {
      rotationStateRef.current.accumulatedRotation += 0.5 * delta;
      
      // Apply base rotation + accumulated rotation
      modelRef.current.rotation.x = rotationStateRef.current.baseRotation.x;
      modelRef.current.rotation.y = rotationStateRef.current.baseRotation.y + rotationStateRef.current.accumulatedRotation;
      modelRef.current.rotation.z = rotationStateRef.current.baseRotation.z;
    }
  });

  // Helper function to smoothly transition to a target rotation
  const transitionToRotation = (targetRotation, duration = 1) => {
    if (!modelRef.current) return;

    // Stop continuous rotation during transition
    rotationStateRef.current.isRotating = false;

    // Find the shortest path to target rotation (accounting for 2π wrapping)
    const currentY = modelRef.current.rotation.y;
    const targetY = targetRotation.y;
    
    // Calculate shortest angular distance
    let diff = targetY - currentY;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    
    const optimizedTargetY = currentY + diff;

    return gsap.to(modelRef.current.rotation, {
      x: targetRotation.x,
      y: optimizedTargetY,
      z: targetRotation.z,
      duration,
      ease: "power2.inOut",
      onComplete: () => {
        // Normalize the rotation to prevent floating point errors
        if (modelRef.current) {
          modelRef.current.rotation.y = targetRotation.y;
        }
      }
    });
  };

  // Helper function to start continuous rotation from current position
  const startContinuousRotation = (baseRotation) => {
    if (!modelRef.current) return;

    // Calculate how much extra rotation has been applied
    const currentY = modelRef.current.rotation.y;
    const baseY = baseRotation.y;
    
    // Normalize the difference
    let extraRotation = currentY - baseY;
    while (extraRotation > Math.PI) extraRotation -= 2 * Math.PI;
    while (extraRotation < -Math.PI) extraRotation += 2 * Math.PI;

    rotationStateRef.current.baseRotation = { ...baseRotation };
    rotationStateRef.current.accumulatedRotation = extraRotation;
    rotationStateRef.current.isRotating = true;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create scroll triggers for each section
      sections.forEach((section, index) => {
        // Camera animation
        ScrollTrigger.create({
          trigger: section.trigger,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: () => {
            cameraTargetRef.current.set(
              section.camera.x,
              section.camera.y,
              section.camera.z
            );
          },
        });

        // Model position animation
        gsap.timeline({
          scrollTrigger: {
            trigger: section.trigger,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }).to(modelRef.current.position, {
          x: section.model.position.x,
          y: section.model.position.y,
          z: section.model.position.z,
          duration: 1,
          ease: "power2.inOut",
        });

        // Model rotation - handle blog section specially
        if (section.trigger !== ".ourblog-sec") {
          gsap.timeline({
            scrollTrigger: {
              trigger: section.trigger,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }).to(modelRef.current.rotation, {
            x: section.model.rotation.x,
            y: section.model.rotation.y,
            z: section.model.rotation.z,
            duration: 1,
            ease: "power2.inOut",
            onUpdate: () => {
              // Ensure continuous rotation is stopped for non-blog sections
              rotationStateRef.current.isRotating = false;
            }
          });
        }
      });

      // Special handling for blog section
      ScrollTrigger.create({
        trigger: ".ourblog-sec",
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          const blogSection = sections.find(s => s.trigger === ".ourblog-sec");
          // First transition to the base rotation, then start continuous rotation
          transitionToRotation(blogSection.model.rotation, 0.5).then(() => {
            startContinuousRotation(blogSection.model.rotation);
          });
        },
        onLeave: () => {
          // Keep rotating when leaving downward
          rotationStateRef.current.isRotating = true;
        },
        onEnterBack: () => {
          const blogSection = sections.find(s => s.trigger === ".ourblog-sec");
          startContinuousRotation(blogSection.model.rotation);
        },
        onLeaveBack: () => {
          // Smoothly transition back to about section rotation
          const aboutSection = sections.find(s => s.trigger === ".about-sec");
          transitionToRotation(aboutSection.model.rotation, 1);
        },
      });

      ScrollTrigger.create({
        trigger: ".marquee-sec", // This should match your Marquee component's wrapper class
        start: "top center", // When marquee section reaches center
        onEnter: () => {
          // Hide the canvas section permanently from this point
          const canvasSection = document.querySelector(".can-sec");
          if (canvasSection) {
            gsap.to(canvasSection, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
              onComplete: () => {
                canvasSection.style.visibility = "hidden";
                canvasSection.style.pointerEvents = "none";
              }
            });
          }
        },
        onLeaveBack: () => {
          // Show canvas again when scrolling back up from marquee
          const canvasSection = document.querySelector(".can-sec");
          if (canvasSection) {
            canvasSection.style.visibility = "visible";
            canvasSection.style.pointerEvents = "auto";
            gsap.to(canvasSection, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut"
            });
          }
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={75}
        near={0.1}
        far={1000}
        position={[0, -0.011, 0.8]}
      />
      <Environment preset="city" />
      <OurModel scale={2.5} ref={modelRef} position={[0, -3, 0]} />
    </>
  );
}