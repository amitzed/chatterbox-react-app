import React from 'react';
import Chat from './Chat';

class ChatList extends React.Component {
  render() {
    return (
      <div className="chat-list">
        {this.props.chats.map((chat, index) => {
          return (
            
            <Chat key={index} member={chat.senderId} text={chat.text} />

          )
        })}
      </div>
    )
  }
}

export default ChatList;
