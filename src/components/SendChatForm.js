import React from 'react';

class SendChatForm extends React.Component {
  constructor() {
    super()
    this.state = {
      chat: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      chat: e.target.value
    })
  }

  render() {
    console.log(this.state.chat)
    return (
      <form className="send-chat-form">
        <input onChange={this.handleChange} value={this.state.chat} placeholder="Type and <ENTER> to Send Chat" type="text" />
      </form>
    )
  }
}

export default SendChatForm;
