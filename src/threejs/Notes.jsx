import React from 'react'
import * as Tone from "tone";
import { Single } from "./Single.jsx";
import { Triangle } from "./Triangle.jsx";
import { Triangle2 } from "./Triangle2.jsx";

export const Notes = () => {
    const groupMesh = React.useRef()

    const notesPlane =
        [
            ['G4',   'D4',  'A4',  'E4',  'B4',  'F#4', 'C#4'],   // Abb → G, etc.
            ['B4',   'F#4', 'C#4', 'Ab4', 'Eb4', 'Bb4', 'F4'],    // Cb → B
            ['Eb4',  'Bb4', 'F4',  'C4',  'G4',  'D4',  'A4'],
            ['G4',   'D4',  'A4',  'E4',  'B4',  'F#4', 'C#4'],
            ['B4',  'F#4', 'C#4',  'G#4',  'D#4',  'A#4', 'F4'],
            ['D#4',  'A#4', 'F4',  'C5',  'F#4', 'C#4', 'G#4'],   // E# → F, B# → C
        ]
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    const playNotes = (notes, _) => {
        console.log(notes);
        synth.triggerAttackRelease(notes, 0.2);
    }

    return (
        <group ref={groupMesh}>
            {notesPlane?.map((p, j) => {
                return p.map((n, i) =>  {
                    const f = 1.5
                    const x = (i + j / 2)  * f
                    const y =  - j * f
                    const z = 0
                    const singlePos = [ x, y, z]
                    const trianglePos = [ x + f / 2, y - f / 3, z]
                    const trianglePos2 = [ x + f / 2, y + f / 3.5, z]
                    return <>
                        <Single key={ "s-" + i } note={n} pos={singlePos} playNotesFn={playNotes}/>
                        { i < p.length -1 && j < notesPlane.length -1 && (<Triangle key={ "t-" + i } note={[notesPlane[j][i], notesPlane[j][i+1], notesPlane[j+1][i]]} pos={trianglePos} playNotesFn={playNotes}/>) }
                        { i < p.length -1 && j > 0 && j < notesPlane.length && (<Triangle2 key={ "t2-" + i } note={[notesPlane[j][i], notesPlane[j][i+1], notesPlane[j-1][i+1]]} pos={trianglePos2} playNotesFn={playNotes}/>) }
                    </>
                })
            })}
        </group>
    )
}