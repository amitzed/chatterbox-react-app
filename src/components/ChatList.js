import React from 'react';


class ChatList extends React.Component {
  render() {
    return (
      <div className="chat-list">
        {this.props.chats.map((chat, index) => {
          return (
            <div key={index} className="chat">
              <div className="chat-member">{chat.senderId}</div>
              <div className="chat-text">{chat.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ChatList;
