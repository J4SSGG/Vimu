import React from 'react'
import { Canvas } from "@react-three/fiber";
import { NotesPlane } from "./NotesPlane.jsx";
import { OrbitControls } from '@react-three/drei'

export const Vimu = () => {
    return (
        <Canvas
            camera={{fov: 90, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000}}
            style={{width: '100dvw', height: '100dvh', display: 'block' }}
        >
            {/*<NotesSphere/>*/}
            <NotesPlane/>
            <OrbitControls enablePan={true} enableRotate={false} enableZoom={true} enableDamping={false} />
        </Canvas>
    )
}