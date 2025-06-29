import React from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { Notes } from "./Notes.jsx";
import { OrbitControls } from '@react-three/drei'
import { OrthographicCamera } from '@react-three/drei'
import { useEffect } from 'react'

function TopLeftCamera() {
    const { camera, size } = useThree()

    useEffect(() => {
        const zoom = 15

        // Make the top-left corner (0, 0)
        const left = -size.width / zoom + zoom
        const right = size.width / zoom
        const top = size.height / zoom - zoom / 2
        const bottom = -size.height / zoom

        // Update camera properties
        Object.assign(camera, {
            left,
            right,
            top,
            bottom,
            near: -1000,
            far: 1000,
            zoom,
        })

        // Place the camera above the X/Y plane, looking down
        camera.position.set( 0, 0, 1) // directly above
        camera.up.set(0, 1, 0)       // make Y increase downward
        camera.lookAt(0, 0, 0)
        camera.updateProjectionMatrix()
        camera.zoom = zoom
    }, [camera, size])

    return null
}

export const Vimu = () => {
    return (
        <Canvas
            orthographic
            style={{width: '100dvw', height: '100dvh', display: 'block' }}
        >
            <TopLeftCamera />
            <Notes/>
            <OrbitControls enablePan={true} enableRotate={false} enableZoom={true} enableDamping={true} />
        </Canvas>
    )
}