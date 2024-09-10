import React, { useRef } from 'react'
import {  useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'



const Scene = () => {
    let tex=useTexture("./images.png")
    // tex.needsUpdate=true
    let scene=useRef(null);
    useFrame((state,delta)=>{
      scene.current.rotation.y+=delta  
    })

  console.log(tex)
  return (
    <group rotation={[0,1.4,.5 ]}>

    <mesh ref={scene} >
            {/* <cylinderGeometry /> */}
            <cylinderGeometry args={[1,1,1,30,30,true]}/>
            
            <meshStandardMaterial  map={tex}  transparent side={THREE.DoubleSide}/>
            </mesh>
    </group>
  )
}

export default Scene
