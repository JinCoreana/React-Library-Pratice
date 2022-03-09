import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './grid.css'

export default function GridExample() {
    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col className="col-color" xs={12} md={8} >
                    xs=12 md=8
                </Col>
                <Col className="col-color" xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col className="col-color" xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col className="col-color" xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col className="col-color" xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>

            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
                <Col className="col-color" xs={6}>xs=6</Col>
                <Col className="col-color" xs={6}>xs=6</Col>
            </Row>
        </Container>
    )
}
