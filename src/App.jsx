import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rings from "./Rings";

export default function App() {
  return (
    <section className="h-screen">
      <Canvas
        camera={{
          position: [0, 9, 15],
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: 0xAAA }}
      >
        <Rings />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        {/* <axesHelper args={[10]}/> */}
        <ambientLight position={[0, 0, 0]} />
      </Canvas>
    </section>
  );
}
