import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 This is not the page you are looking for</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;