import React, { Component } from 'react';
import Prompt from './Prompt';
import TextArea from './TextArea';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e)  => {
    e.preventDefault();
  }

  render () {
    const boxStyle = {
      border: '2px solid black',
      backgroundColor: 'grey'
    }

    return (
      <div style={boxStyle}>
        <TextArea>
          test text
        </TextArea>
        <Prompt
          value={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ChatWindow;
