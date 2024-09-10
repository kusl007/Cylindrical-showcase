import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./Scene";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
    <Canvas  flat camera={{ fov: 35 }}>
      {/* <OrbitControls /> */}
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={12.0} // The bloom intensity.
        luminanceThreshold={0.36} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
        />
        {/* <ToneMapping adaptive /> */}
      </EffectComposer>
    </Canvas>
    <div className="w-full bg-zinc-900 py-32 text-white">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non debitis aut dignissimos facilis! Vel, culpa maxime temporibus doloribus eos minus, nulla exercitationem mollitia molestias amet reiciendis sapiente, quas consectetur voluptatibus quasi odio. Aperiam ad obcaecati praesentium, earum porro inventore?</h1>
    </div>
        </>
  );
};

export default App;
