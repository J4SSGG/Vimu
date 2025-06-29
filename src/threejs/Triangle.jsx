import React from 'react'
import * as Tone from "tone";
import { Text } from '@react-three/drei'

export const Triangle = (props) => {
    const ref = React.useRef(null);

    const {note, pos, playNotesFn} = props

    const handleClick = (event) => {
        event.stopPropagation();
        playNotesFn(note, event);
    }


    return (
        <group>
            <mesh position={pos} ref={ref} onClick={handleClick} renderOrder={2}>
                <circleGeometry args={[0.9, 3, -Math.PI / 2]} />
                <meshBasicMaterial color={"red"} depthTest={false}/>
            </mesh>
        </group>
    )
}