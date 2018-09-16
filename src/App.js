import React from 'react';
import Chatkit from '@pusher/chatkit'
import ChatList from './components/ChatList';
import SendChatForm from './components/SendChatForm';
import BoxList from './components/BoxList';
import NewBoxForm from './components/NewBoxForm';

import { tokenUrl, instanceLocator } from './config';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      chats: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'amit',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 16349835,
        hooks: {
          onNewMessage: chat => {
            this.setState({
              chats: [...this.state.chats, chat]
            })
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <BoxList />
        <ChatList chats={this.state.chats} />
        <SendChatForm />
        <NewBoxForm />
      </div>
    );
  }
}

export default App;
