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
          <h5>&#x2610;</h5>&#x263a; <h4>Pick a Chatterbox</h4> <h6>&reg;</h6> <h4>to Start Chatting</h4> &#x263a;<h5>&#x2610;</h5>
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
