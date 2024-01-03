import { OrbitControls } from "@react-three/drei";
import { Power } from "../3d/powerSupply";



export const ModelPowerSupply = () => {
  return (
    <>
    <OrbitControls/>
      <Power/>
    </>
  );
};
