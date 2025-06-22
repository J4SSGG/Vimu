import React from 'react'

export const Note = (props) => {
    const ref = React.useRef(null);
    const {index, pos} = props

    const handleClick = (e) => {
        // e.object is the mesh that was clicked
        const mesh = e.object
        const geometry = mesh.geometry
        alert(`clicked: ${index} at pos: ${pos.x.toFixed(5)}`)
        console.log('Mesh:', mesh)
        console.log('Geometry:', geometry)
    }

    return (
        <mesh position={pos} ref={ref} onClick={handleClick}>
            <boxGeometry args={[0.3, 0.3, 0.3]}/>
            <meshNormalMaterial flatShading={true}/>
        </mesh>
    )
}