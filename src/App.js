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
      roomId: null,
      chats: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
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
      this.getRooms()
    })
      .catch(err => console.log('error connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom(roomId) {
    this.setState({ chats: [] })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: chat => {
          this.setState({
            chats: [...this.state.chats, chat]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error subscribing to room: ', err))
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  render() {
    return (
      <div className="app">
        <BoxList subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <ChatList chats={this.state.chats} />
        <SendChatForm sendMessage={this.sendMessage} />
        <NewBoxForm />
      </div>
    );
  }
}

export default App;
