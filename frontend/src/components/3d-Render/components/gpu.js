import { OrbitControls } from "@react-three/drei";
import { Gpu } from "../3d/gpu";


export const ModelGpu = () => {
  return (
    <>
    <OrbitControls/>
      <Gpu/>
    </>
  );
};
