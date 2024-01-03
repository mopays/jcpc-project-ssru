import { OrbitControls } from "@react-three/drei";
import { MainBoard } from "../3d/mainboard";


export const ModelMainBoard = () => {
  return (
    <>
    <OrbitControls/>
      <MainBoard/>
    </>
  );
};
