import React from 'react';


const data_test = [
  {
    senderId: 'amit',
    text: 'Wassup?'
  },
  {
    senderId: 'Christina',
    text: 'How has everything been?'
  },
  {
    senderId: 'amit',
    text: 'Going out for some wine later?'
  }
]

class ChatList extends React.Component {
  render() {
    return (
      <div className="chat-list">
        {data_test.map((chat, index) => {
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
