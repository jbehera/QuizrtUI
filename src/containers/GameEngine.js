import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LinearProgressTimer } from '../components/Timer';

class GameEngine extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} style={{ height: '30px'}}>
                        <LinearProgressTimer />
                </Col>
                <Col xs={12} md={8} style={{backgroundColor: '#689f38', height: '400px'}}>GE QUIZ</Col>
                <Col xs={12} md={4} style={{backgroundColor: '#303f9f', height: '400px'}}>GE SCORELIST</Col>
            </Row>
        )
    }
}

export default GameEngine;