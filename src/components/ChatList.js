import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';

class ChatList extends React.Component {


  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
      <div className="chat-list">
        <div className="join-chatbox">
          &#x2610;&#x263a; Pick a Chat Box to Start &dArr; &uArr; &rArr; &lArr; Chatting &#x263a;&#x2610;
        </div>
      </div>
    )}
    return (
      <div className="chat-list">
        {this.props.chats.map((chat, index) => {
          return (
            <Chat key={index}
              member={chat.senderId}
              text={chat.text} />
          )
        })}
      </div>
    )
  }
}

export default ChatList;
