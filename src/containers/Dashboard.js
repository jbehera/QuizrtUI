import React, { Component } from 'react';
import { connect } from 'react-redux';

import Topics from '../components/Topics';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>                
                http://localhost:3000 -> Dashboard<br/> 
                http://localhost:3000/waitingroom -> WaitingRoom<br/>
                http://localhost:3000/ge -> GameEngine<br/>  
                http://localhost:3000/gameend -> GameEnd <br/>
                http://localhost:3000/social -> Social  <br/>
                
                <Topics topics={this.props.topic.topics} />
            </div>
        )
    }
}

export default connect(
    state => { 
        return {
            topic: state.topic
        }
    }, 
    (dispatch) => ({
        loadTopics: () => {

        }
    }
))(Dashboard);