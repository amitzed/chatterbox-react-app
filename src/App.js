import React from 'react';
import ChatList from './components/ChatList';
import SendChatForm from './components/SendChatForm';
import BoxList from './components/BoxList';
import NewBoxForm from './components/NewBoxForm';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BoxList />
        <ChatList />
        <SendChatForm />
        <NewBoxForm />
      </div>
    );
  }
}

export default App;
