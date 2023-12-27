import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { RamModel } from '../3d/ram'

function Ram() {
  return (
    <>
    <OrbitControls/>
    <RamModel/>
    </>
  )
}

export default Ram