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
      chats: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
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
      this.currentUser = currentUser

      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))

      this.currentUser.subscribeToRoom({
        roomId: 16430247,
        hooks: {
          onNewMessage: chat => {
            this.setState({
              chats: [...this.state.chats, chat]
            })
          }
        }
      })
    })
      .catch(err => console.log('error connecting: ', err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 16430247
    })
  }

  render() {
    return (
      <div className="app">
        <BoxList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <ChatList chats={this.state.chats} />
        <SendChatForm sendMessage={this.sendMessage} />
        <NewBoxForm />
      </div>
    );
  }
}

export default App;
