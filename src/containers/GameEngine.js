import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LinearProgressTimer } from '../components/Timer';

import Question from '../components/Question';

class GameEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Question 1',
            options: ['Option A', 'Option B', 'Option C', 'Option D']
        }
    }

    onAnswer = (option, value) => {
        // should submit answer to server
        console.log(option, value);
    }

    render() {
        return (
            <Row>
                <Col xs={12} style={{ height: '30px'}}>
                        <LinearProgressTimer />
                </Col>
                <Col xs={12} md={8} style={{height: '400px'}}>
                    <Question data={this.state} onAnswer={this.onAnswer} />
                </Col>
                <Col xs={12} md={4} style={{backgroundColor: '#303f9f', height: '400px'}}>GE SCORELIST</Col>
            </Row>
        )
    }
}

export default GameEngine;