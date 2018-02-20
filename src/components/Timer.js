import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export class LinearProgressTimer extends Component{

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    const minVal = 25; //min-value of the progress
    this.timer = setTimeout(() => this.progress(minVal), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
      
      clearTimeout(this.timer);
      //Emit the event after 4 seconds
      console.log('Emit the event');    
      //this.progress(0);  
      //const minVal = 25; 
      //this.timer = setTimeout(() => this.progress(minVal), 1000);
    } else {
      this.setState({completed});
      const diff = completed + 25; //increment progress value with 25%
      this.timer = setTimeout(() => this.progress(diff), 1000);
    }
  }

  render() {
    return (
      <LinearProgress style={{ marginTop:'10px' }} mode="determinate" value={this.state.completed} />
    );
  }
}