import React, { Component } from 'react';
import Prompt from './Prompt';
import TextArea from './TextArea';
import Message from './Message';

const boxStyle = {
  border: '2px solid black',
  backgroundColor: 'grey',
  width: '98%',
  margin: '0 auto 0 auto'
}

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [{user: 'watson', message: 'Welcome to fake watson message!'},
                 {user: 'human', message: 'test message'},
                 {user: 'human', message: 'test message2'}]
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

  renderMessages = () => {
    const messages = this.state.messages.slice();
    return messages.map((message, i) => <Message key={i} user={message.user} text={message.message} />)
  }

  render() {

    return (
      <div style={boxStyle}>
        <TextArea>
          {this.renderMessages()}
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
