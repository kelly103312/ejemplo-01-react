import React from 'react'


export const Sphere = ({ color, position }) => {
  return (
        <mesh position={position} >
            <sphereGeometry />
            <meshStandardMaterial color={color} wireframe/>
        </mesh>
  )
}
