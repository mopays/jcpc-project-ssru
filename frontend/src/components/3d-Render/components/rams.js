import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Rams } from '../3d/ram';

export const rams = () =>{
  return (
    <>
      <Rams/>
    <OrbitControls/>
    </>
  )
}

