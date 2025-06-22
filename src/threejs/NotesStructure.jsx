import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Note } from "./Note.jsx";
import * as THREE from 'three'

export const NotesStructure = () => {
    const structureMesh = React.useRef()
    const groupMesh = React.useRef()

    const [notePositions, setNotePositions] = React.useState([])
    //
    // useFrame(({ clock }) => {
    //     if (!groupMesh?.current) return
    //
    //     // rotate
    //     groupMesh.current.rotation.x += 0.0001
    //     groupMesh.current.rotation.y += 0.0001
    // })

    React.useEffect(() => {
        if (!structureMesh.current) return

        const geometry = structureMesh.current.geometry

        geometry.computeVertexNormals()

        const position = geometry.attributes.position
        const spheresPositions = []

        const posAttr = geometry.attributes.position
        const seen = new Set()
        const temp = new THREE.Vector3()

        // Loop through each face (3 vertices per face)
        for (let i = 0; i < position.count; i += 1) {
            temp.fromBufferAttribute(posAttr, i)

            // Round to avoid floating-point duplicates
            const key = `${temp.x.toFixed(5)}_${temp.y.toFixed(5)}_${temp.z.toFixed(5)}`
            if (!seen.has(key)) {
                seen.add(key)
                spheresPositions.push(temp.clone()) // store a copy
            }
        }
        setNotePositions(spheresPositions)

    }, [structureMesh])

    return (
        <group ref={groupMesh}>
            <mesh ref={structureMesh}>
                <icosahedronGeometry args={[2, 2]}/>
                {/*<meshStandardMaterial transparent={true} opacity={0} color="white"/>*/}
                <meshNormalMaterial flatShading={true}/>

            </mesh>
            {notePositions?.map((p, i) => (<Note key={i} index={i} pos={p}/>))}
        </group>
    )
}