import React, { Component } from 'react';

export default class Topics extends Component {

    renderTopic = (topic) => {
        return (
            <div key={topic.id}>
                {topic.id} - {topic.title}
            </div>
        );
    }

    render() {
        const { topics } = this.props;

        return (
            <div>
                <h3>Below Topics data is from redux store: </h3>
                {(topics || []).map((topic) => this.renderTopic(topic))}
            </div>
        )
    }
}