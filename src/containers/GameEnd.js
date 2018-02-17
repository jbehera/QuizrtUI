import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import {ScoreCard} from '../components/ScoreCard';

class GameEnd extends Component {
    render() {
        return (
            <Row>
                <Col xs={12} style={{backgroundColor: '#e14081', height: '50px'}}>GAME END</Col>
                <Col xs={12} md={12} style={{height: '400px'}}>
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
))(GameEnd);