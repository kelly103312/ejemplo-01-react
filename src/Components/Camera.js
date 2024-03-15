import React from 'react'
import { PerspectiveCamera } from '@react-three/drei';

const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position = {[10, 10, 10]}        
    />
  )
}
export default Camera;