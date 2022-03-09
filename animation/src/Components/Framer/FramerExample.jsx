import React from 'react'
import KeyFrames from './KeyFrames'
import Scale from './Scale'
export default function FramerExample() {
    return (
        <>
            <div style={{ position: "absolute", top: 300, left: 300 }}>
                <Scale />
            </div>
            <div style={{ position: "absolute", top: 100, left: 100 }}>
                <KeyFrames />
            </div>
        </ >
    )
}
