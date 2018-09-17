import React from 'react';

class BoxList extends React.Component {
  render() {
    // console.log(this.props.rooms);
    return (
      <div className="box-list">
        <ul>
          <h3>Your Chat Boxes:</h3>
        {this.props.rooms.map(room => {
          return (
            <li key={room.id} className="box">
              <a onClick={() => this.props.subscribeToRoom(room.id)}
                href="#"># {room.name}
              </a>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default BoxList;
