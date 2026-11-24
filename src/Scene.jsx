import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./index.css";

export default function Scene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // SCENE
    const scene = new THREE.Scene();

    // LIGHTS
    const ambientLight = new THREE.AmbientLight("white", 0.5);

    const pointLight = new THREE.PointLight("white", 0.5);

    pointLight.position.set(2, 2, 2);
    scene.add(ambientLight, pointLight);

    // TEXTURES
    const textureLoader = new THREE.TextureLoader();

    const alphaSnow = textureLoader.load("/texture/alphaSnow.jpg");

    // PARTICLES
    const geometry4 = new THREE.BufferGeometry();

    const verticesAmount = 10000;

    const verticesPosition = new Float32Array(verticesAmount * 3);

    for (let i = 0; i < verticesPosition.length; i++) {
      verticesPosition[i] = (Math.random() - 0.5) * 4;
    }

    geometry4.setAttribute(
      "position",
      new THREE.BufferAttribute(verticesPosition, 3),
    );

    const material4 = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      alphaMap: alphaSnow,
      depthTest: false,
    });

    const points = new THREE.Points(geometry4, material4);

    scene.add(points);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      100,
    );

    camera.position.set(0, 0, 0);
    scene.add(camera);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    // CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.zoomSpeed = 2;
    controls.minDistance = 0.1;
    controls.maxDistance = 30;
    controls.enabled = false;
    


    // RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION
    const clock = new THREE.Clock();

    let animationId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      controls.update();

      points.rotation.y = elapsedTime * 0.05;
      points.rotation.x = elapsedTime * 0.05;

      renderer.render(scene, camera);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      controls.dispose();
      geometry4.dispose();
      material4.dispose();
      alphaSnow.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="drew" />;
}
