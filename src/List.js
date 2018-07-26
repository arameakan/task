import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteNames}>Delete Names</button>
        {this.props.names.map(name => <Name key={name} nameText={name} />)}
      </div>
    );
  }
}

class Name extends Component {
  render() {
    return <div>{this.props.nameText}</div>;
  }
}

export default List;
