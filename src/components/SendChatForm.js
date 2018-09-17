import React from 'react';

class SendChatForm extends React.Component {

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <form className="send-chat-form">
        <input onChange={this.handleChange} placeholder="Type and <ENTER> to Send Chat" type="text" />
      </form>
    )
  }
}

export default SendChatForm;
