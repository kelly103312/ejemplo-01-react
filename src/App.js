import { Sphere } from "./Components/Sphere";
import { Object } from "./Components/Object";
import ThreeScene from "./Components/ThreeScene";
import  Camera  from "./Components/Camera";
import path from "./assets/Cat.obj";

import {OrbitControls, Stars} from "@react-three/drei";
import { Suspense } from "react";
function App() {
  return (
      <div style={{ height: '100vh', overflow:"hidden" }}>
        <ThreeScene>
          <Camera />
          <color attach={"background"} args={['#a7c4f2']}/>
          {/* <Sphere color={"green"} position={[-1,0,-3]}/>
          <Sphere color={"green"} position={[1,0,-3]}/>
          <Sphere color={"black"} position={[1,1,1]}/> */}
          <Suspense fallback={null}>
            <Object path={path} />
          </Suspense>
          <ambientLight />
          <OrbitControls autoRotate /> 
          <Stars />
        </ThreeScene>
      </div>
    
  );
}

export default App;
