import { OrbitControls } from "@react-three/drei";
import { Ram } from "../3d/ram";


export const ModelRam = () => {
  return (
    <>
    <OrbitControls/>
      <Ram/>
    </>
  );
};
