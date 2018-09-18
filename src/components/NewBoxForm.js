import React from 'react';

class NewBoxForm extends React.Component {
  constructor() {
    super()
    this.state = {
      chatBoxName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      chatBoxName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createRoom(this.state.chatBoxName)
    this.setState({chatBoxName: ''})
  }

  render() {
    return (
      <div className="new-box-form">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.chatBoxName}
            onChange={this.handleChange}
            type="text"
            placeholder="Make a New Chatterbox"
            required />
          <button
            id="btn-create-box"
            type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;
