import React from 'react';

class SendChatForm extends React.Component {
  constructor() {
    super()
    this.state = {
      chat: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      chat: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log(this.state.chat)
    this.props.sendMessage(this.state.chat)
    this.setState({
      chat: ''
    })
  }

  render() {
    // console.log(this.state.chat)
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-chat-form">
        <input
          onChange={this.handleChange}
          value={this.state.chat}
          placeholder="Type and <ENTER> to Send Chat"
          type="text" />
      </form>
    )
  }
}

export default SendChatForm;
