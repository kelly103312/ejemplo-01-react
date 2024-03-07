import { Sphere } from "./Components/Sphere";
import ThreeScene from "./Components/ThreeScene";

import {OrbitControls, Stars} from "@react-three/drei";

function App() {
  return (
    <div style={{ height: '100vh', overflow:"hidden" }}>
      <ThreeScene>
        <color attach={"background"} args={['#a7c4f2']}/>
        <Sphere color={"green"} position={[-1,0,-3]}/>
        <Sphere color={"black"} position={[1,1,1]}/>
        <ambientLight />
        <OrbitControls autoRotate /> 
        <Stars />
      </ThreeScene>
    </div>
  );
}

export default App;
