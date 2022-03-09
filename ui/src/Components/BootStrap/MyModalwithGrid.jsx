import React, { useState } from 'react'
import { Modal, Container, Button, Row, Col } from 'react-bootstrap'

export default function MyModalwithGrid() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch modal with grid
            </Button>
            <Modal show={modalShow} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton onHide={() => setModalShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Using Grid in Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                .col-xs-12 .col-md-8
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
