"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 2400;

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let renderer: import("three").WebGLRenderer | undefined;
    let geometry: import("three").BufferGeometry | undefined;
    let material: import("three").PointsMaterial | undefined;
    let texture: import("three").CanvasTexture | undefined;
    let starField: import("three").Points | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let animationFrame = 0;

    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const initialize = async () => {
      const THREE = await import("three");
      if (disposed) return;

      const textureCanvas = document.createElement("canvas");
      textureCanvas.width = 32;
      textureCanvas.height = 32;
      const textureContext = textureCanvas.getContext("2d");
      if (!textureContext) {
        console.error("Unable to create the starfield texture.");
        return;
      }

      const gradient = textureContext.createRadialGradient(16, 16, 0, 16, 16, 14);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      textureContext.beginPath();
      textureContext.arc(16, 16, 14, 0, Math.PI * 2);
      textureContext.fillStyle = gradient;
      textureContext.fill();

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      camera.position.z = 20;

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(STAR_COUNT * 3);
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 70;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 45;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      texture = new THREE.CanvasTexture(textureCanvas);
      material = new THREE.PointsMaterial({
        size: 0.24,
        map: texture,
        color: 0xb9d7ff,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        depthWrite: false,
      });

      starField = new THREE.Points(geometry, material);
      scene.add(starField);

      const updateSize = () => {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const updatePointer = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.1;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.1;
      };

      resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(document.documentElement);
      window.addEventListener("resize", updateSize);
      window.addEventListener("pointermove", updatePointer, { passive: true });

      const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
      const render = () => {
        if (!renderer || !starField) return;
        if (!motionPreference.matches) {
          targetRotation.x += (pointer.y - targetRotation.x) * 0.02;
          targetRotation.y += (pointer.x - targetRotation.y) * 0.02;
          starField.rotation.x += 0.00006 + targetRotation.x * 0.01;
          starField.rotation.y += 0.000125 + targetRotation.y * 0.01;
        }
        renderer.render(scene, camera);
        animationFrame = window.requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener("resize", updateSize);
        window.removeEventListener("pointermove", updatePointer);
        resizeObserver?.disconnect();
      };
    };

    let cleanupListeners: (() => void) | undefined;
    void initialize().then((cleanup) => {
      cleanupListeners = cleanup;
      if (disposed) cleanupListeners?.();
    });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      cleanupListeners?.();
      resizeObserver?.disconnect();
      geometry?.dispose();
      material?.dispose();
      texture?.dispose();
      renderer?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-background" aria-hidden="true" />;
}
