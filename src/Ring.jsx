import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export default function Ring(props) {
  const meshref = useRef(null);
  const r = 30;

  useEffect(() => {
    meshref.current.position.x = r * Math.sin((Math.PI * props.angl) / 180);
    meshref.current.position.y = 0;
    meshref.current.position.z = r * Math.cos((Math.PI * props.angl) / 180);
    meshref.current.lookAt(new Vector3(0, 0, 0));
    console.log(props);
  }, []);

  useFrame(() => {
    const vertices = meshref.current.geometry.attributes.position;

    for (let i = 0; i < vertices.count; i++) {
      const x = vertices.getX(i);
      const z = -Math.sqrt(Math.max(0, r * r - x * x));
      vertices.setZ(i, z);
    }
    vertices.needsUpdate = true;
    meshref.current.geometry.computeBoundingBox();
    meshref.current.geometry.center();
  });

  return (
    <mesh ref={meshref}>
      <planeGeometry args={[r * 0.795, r * 0.795, r]} />
      <meshStandardMaterial /* color={"red"} */ map={props.txtr} side={2} />
    </mesh>
  );
}
