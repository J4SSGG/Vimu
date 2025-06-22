import React from 'react'
import { Canvas } from "@react-three/fiber";
import { NotesStructure } from "./NotesStructure.jsx";
import { OrbitControls } from '@react-three/drei'

export const Vimu = () => {
    return (
        <Canvas
            camera={{fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000}}
            style={{width: '100vw', height: '100vh', display: 'block'}}
        >
            <ambientLight intensity={0.5}/>
            <directionalLight position={[5, 10, 7]}/>
            <NotesStructure/>
            <OrbitControls enablePan={false} enableRotate={true} enableZoom={true} enableDamping={false} />
        </Canvas>
    )
}