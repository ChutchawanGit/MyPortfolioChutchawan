import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SnowBackgroundProps {
  count?: number;
  depth?: number;
  color?: string;
}

const SnowBackground: React.FC<SnowBackgroundProps> = ({ 
  count = 1000, 
  depth = 50, 
  color = '#ffffff' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 20;

    // Create snow particles
    const particles = new THREE.BufferGeometry();
    const positions: number[] = [];
    const velocities: number[] = [];
    
    for (let i = 0; i < count; i++) {
      // Random position within a box
      const x = Math.random() * window.innerWidth - window.innerWidth / 2;
      const y = Math.random() * window.innerHeight - window.innerHeight / 2;
      const z = Math.random() * depth - depth / 2;
      
      positions.push(x, y, z);

      // Random velocity
      const vx = Math.random() * 0.05 - 0.025;
      const vy = Math.random() * -0.1 - 0.05; // Falling down
      const vz = Math.random() * 0.05 - 0.025;
      
      velocities.push(vx, vy, vz);
    }
    
    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    // Create material
    const material = new THREE.PointsMaterial({
      color: color,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Create points system
    const snow = new THREE.Points(particles, material);
    scene.add(snow);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      const positions = particles.getAttribute('position').array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Update position based on velocity
        positions[i] += velocities[i]; // x
        positions[i + 1] += velocities[i + 1]; // y
        positions[i + 2] += velocities[i + 2]; // z

        // Reset particles that go out of view
        if (positions[i + 1] < -window.innerHeight / 2) {
          positions[i] = Math.random() * window.innerWidth - window.innerWidth / 2;
          positions[i + 1] = window.innerHeight / 2;
          positions[i + 2] = Math.random() * depth - depth / 2;
        }

        // Add some swirl
        positions[i] += Math.sin(positions[i + 1] * 0.01) * 0.1;
      }

      particles.getAttribute('position').needsUpdate = true;
      
      snow.rotation.y += 0.001;
      
      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      particles.dispose();
      material.dispose();
    };
  }, [count, depth, color]);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default SnowBackground;