import { OrbitControls } from "@react-three/drei";
import { Case } from "../3d/case";


export const ModelCase = () => {
  return (
    <>
    <OrbitControls/>
      <Case/>
    </>
  );
};
