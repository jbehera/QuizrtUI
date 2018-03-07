import React, { Component } from 'react';
//import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { value: null, index: null }
    }

    onOptionSelect = e => {
        const value = e.currentTarget.value;
        const index = parseInt(e.currentTarget.dataset.index);

        this.setState({ value, index});
    }

    submitAnswer = () => {
        const { value, index } = this.state;
        this.props.onAnswer(value, index);
    }

    renderOptions = (options) => {
        return (
            <ol type="a" style={styles.options}>
                {(options || []).map((option, index) => (
                    <li key={index} style={styles.answer}>
                        <label style={{display: 'block', cursor: 'pointer'}}>
                            <input 
                                style={{height: '16px', width: '16px', verticalAlign: 'baseline', margin: '0 3px'}}
                                type="radio" 
                                data-index={index} 
                                value={option} 
                                name="answer" onClick={this.onOptionSelect} />
                            {option}
                        </label>
                    </li>
                ))}
            </ol>
        )
    }

    render() {
        const { data : { question, options } } = this.props;
        return (
            <div>
                <ul style={styles.question}>
                    <li>{question}</li>
                    {this.renderOptions(options)}
                </ul>
                <div style={{textAlign: 'right', marginTop: '30px'}}>
                    <RaisedButton label="Submit" primary onClick={this.submitAnswer} />
                </div>
            </div>
        )
    }
}

const styles = {
    question: {
        listStyleType: 'none',
        margin: '20px',
        padding: 0
    },
    options: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    answer: {
        width: '50%',
        margin: '20px 0px'
    }
};