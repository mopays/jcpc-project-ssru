import { OrbitControls } from "@react-three/drei";
import { Mainboard } from "../3d/mainboard";


export const ModelMainBoard = () => {
  return (
    <>
    <OrbitControls/>
      <Mainboard/>
    </>
  );
};
