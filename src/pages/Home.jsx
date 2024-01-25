import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Imac from '../models/Imac';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setisRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustImacForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.1, 10, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.03, 0.03, 0.03];
      screenPosition = [2, -1, -2.5];
    } else {
      screenScale = [0.06, 0.06, 0.06];
      screenPosition = [4, -2, -5];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [ImacScale, ImacPosition, Imacrotation] = adjustImacForScreenSize();

  const adjustTextSizeForScreenSize = () => {
    if (window.innerWidth < 768) {
      return 'text-sm'; // Adjust the size as needed for small screens
    } else {
      return 'text-lg'; // Adjust the size as needed for larger screens
    }
  };

  const textSizeClass = adjustTextSizeForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className={`absolute top-60 left-10 right-30 z-10 flex items-center justify-center ${textSizeClass}`}>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[-1, 2, 4]} intensity={4} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

          <Imac
            position={ImacPosition}
            scale={ImacScale}
            rotation={Imacrotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
