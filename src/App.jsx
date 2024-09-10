import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
  import Scene from './Scene'



const App = () => {
  
  return (
          <Canvas camera={{fov:35}}>
            <OrbitControls/>
            <ambientLight/> 
            <Scene/>
           
      
      
    </Canvas>
  )
}

export default App
