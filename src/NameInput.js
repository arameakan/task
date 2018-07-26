import React, { Component } from "react";

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddNames = this.handleAddNames.bind(this);
  }

  handleAddNames(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const error = this.props.handleAddNames(name);

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddNames}>
          <input type="text" name="name" />
          {/* <input type="text" name="lastName" /> */}
          <button>Add Name</button>
        </form>
      </div>
    );
  }
}

export default NameInput;
