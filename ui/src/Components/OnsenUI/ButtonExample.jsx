import React from 'react'
import { ButtonGroup, Button } from 'react-onsenui'

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

            <>
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup size="sm">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </>
        </>
    )
}