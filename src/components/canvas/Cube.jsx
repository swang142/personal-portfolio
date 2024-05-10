import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {PCFSoftShadowMap} from 'three';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Model = ({ src, isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(src);
  const { ref, actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions['Animation']) { // Using the exact name from your logged animations
      actions['Animation'].play();
    }

    return () => {
      // Stop the action on cleanup
      if (actions['Animation']) {
        actions['Animation'].stop();
      }
    };
  }
  , [actions]); 

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} ref={ref}
        scale={0.5} // Adjust scale as needed, 1 is normally a good starting point
        position={[0, -1.5, 0]} // Centered in view
        rotation={[-Math.PI / 4, Math.PI / 4, 0]} // Rotate to show the cube face front and slightly turned
        />
    </group>
  );
};

const Cube = ({ src, isMobile }) => {
  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]} // Position the light to the side, above, and in front of the cube
        intensity={0.8} // Strong enough to light the cube clearly without harsh shadows
      />      
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048} // Higher resolution for cleaner shadows
        shadow-mapSize-height={2048}
      />
      <Model src={src} isMobile={isMobile} />
    </group>
  );
};

const CubeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const modelSrc = './rubiks_cube/scene.gltf'; // Define the model source here for better management

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas frameloop="always" 
    shadows={{ enabled: true, type: PCFSoftShadowMap }} // Soft shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
     >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls   enableZoom={false}
          enablePan={false} // Keep panning disabled to maintain focus on the cube
          minPolarAngle={Math.PI / 2 - Math.PI / 6} // Allows tilting down slightly
          maxPolarAngle={Math.PI / 2 + Math.PI / 6} // Allows tilting up slightly
        />
        <Cube src={modelSrc} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CubeCanvas;