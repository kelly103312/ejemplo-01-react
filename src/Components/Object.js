import { useLoader } from '@react-three/fiber'
import { OBJLoader  } from 'three/examples/jsm/loaders/OBJLoader';
import React from 'react'

export const Object = ({path}) => {
  const object = useLoader(OBJLoader , path);
  return (
    <group rotation={[-Math.PI/2, 0, 0]}>
        <primitive  object={object}/>
    </group>
  );
  
}
