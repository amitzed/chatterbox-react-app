import React from 'react';

class NewBoxForm extends React.Component {
  render() {
    return (
      <div className="new-box-form">
        <form>
          <input type="text" placeholder="Create a New Chat Box" required />
          <button id="btn-create-box" type="submit">+</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;
