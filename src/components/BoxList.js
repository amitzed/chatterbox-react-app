import React from 'react';

class BoxList extends React.Component {
  render() {
    // console.log(this.props.rooms);
    const orderedBoxes = [...this.props.rooms].sort((a, b) => a.id - b.id)
    return (
      <div className="boxes-list">
        <ul>
          <h2>Chatterboxes:</h2>
        {orderedBoxes.map(room => {
          const active = this.props.roomId === room.id ? "active" : "";
          return (
            <li
              key={room.id}
              className={"box " + active}>
              <a
                onClick={() => this.props.subscribeToRoom(room.id)}
                href="#">&rArr; {room.name}
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
