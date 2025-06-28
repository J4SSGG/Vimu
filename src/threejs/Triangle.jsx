import React from 'react'
import * as Tone from "tone";
import { Text } from '@react-three/drei'

export const Triangle = (props) => {
    const ref = React.useRef(null);

    const {note, pos, playNotesFn} = props

    const handleClick = (e) => {
        playNotesFn(note, e);
    }


    return (
        <group>
            <mesh position={pos} ref={ref} onClick={handleClick}>
                <circleGeometry args={[1, 3, - Math.PI / 2]}/>
                <meshBasicMaterial color={"red"}/>
            </mesh>
        </group>
    )
}