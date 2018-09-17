 import React from 'react'

function Chat(props) {
    return (
      <div className="chat">
        <div className="chat-member">{props.member}</div>
        <div className="chat-text">{props.text}</div>
      </div>
    )
}

export default Chat;
