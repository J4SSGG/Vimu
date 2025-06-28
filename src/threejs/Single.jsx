import React from 'react'
import * as Tone from "tone";
import { Text } from '@react-three/drei'

export const Single = (props) => {
    const ref = React.useRef(null);

    const {note, pos, playNotesFn} = props

    const handleClick = (e) => {
        playNotesFn([note], e);
    }

    return (
        <group>
            <mesh position={pos} ref={ref} onClick={handleClick} renderOrder={3}>
                <circleGeometry args={[0.4]}/>
                <meshNormalMaterial flatShading={true} depthTest={false}/>
            </mesh>
            <Text fontSize={0.2} color="white" position={pos}>
                {note}
            </Text>
        </group>
    )
}