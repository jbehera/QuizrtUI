import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

var score = {
    backgroundColor:'rgb(239, 235, 235)',
    lineHeight: '24px',
    fontWeight: '800',
    padding: '4px',
    border: '1px solid #8e8a8a',
    marginTop: '7px'
};

export class ScoreCard extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const players = this.props.players;
        
        return (
            <List>
                <Subheader style={{fontWeight:'900',textAlign:'left'}}>Score cards</Subheader>
                {players.map((player, i) => <ListItem
                                    key={i}
                                    primaryText={<div style={{textAlign:'left'}}>{player.name}</div>}
                                    leftAvatar={<Avatar src="shereej-dp.jpg"/>}
                                    rightIcon={<div style={score}>{player.score}</div>}
                                 />)}
            </List>
        );
    }
}