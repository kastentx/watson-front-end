import React, { Component } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message={'Welcome to Watson.'} />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
