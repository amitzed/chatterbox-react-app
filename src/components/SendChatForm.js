import React from 'react';

class SendChatForm extends React.Component {
  render() {
    return (
      <form className="send-chat-form">
        <input placeholder="Send Chat" type="text" />
      </form>
    )
  }
}

export default SendChatForm;
