import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import {ScoreCard} from '../components/ScoreCard';


class GameEngine extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} style={{backgroundColor: '#e14081', height: '50px'}}>GE HEADER</Col>
                <Col xs={12} md={8} style={{backgroundColor: '#689f38', height: '400px'}}>GE QUIZ</Col>
                <Col xs={12} md={4} style={{height: '400px'}}>
                        <ScoreCard players={this.props.player.players}/>
                </Col>
            </Row>
        )
    }
}

export default connect(
    state => { 
        return {
            player: state.player
        }
    }, 
    (dispatch) => ({

    }
))(GameEngine);