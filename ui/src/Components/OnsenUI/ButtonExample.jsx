import React from 'react'
import { Button } from 'react-onsenui'

export default function ButtonExample() {
    return (
        <>
            <Button modifier="large--cta">
                Tap Me
            </Button>

            <br />
            <Button disabled='true'>
                Tap Me
            </Button>

            <br />
            <Button modifier="outline">
                Tap Me
            </Button>
        </>
    )
}