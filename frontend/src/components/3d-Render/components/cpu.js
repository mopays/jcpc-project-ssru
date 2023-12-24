import { OrbitControls } from "@react-three/drei";
import { Cpu } from "../3d/cpu";


export const ModelCpu = () => {
  return (
    <>
    <OrbitControls/>
      <Cpu/>
    </>
  );
};
