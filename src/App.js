import React, { Component } from "react";
import NameInput from "./NameInput";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
      // data: {
      //   name: "",
      //   surname: ""
      // }
    };
    this.handleDeleteNames = this.handleDeleteNames.bind(this);
    this.handleAddNames = this.handleAddNames.bind(this);
  }

  handleAddNames(name) {
    this.setState(prevState => {
      return {
        names: prevState.names.concat(name)
      };
    });
  }

  handleDeleteNames(name) {
    this.setState(prevState => {
      return {
        names: []
      };
    });
  }

  render() {
    return (
      <div className="App">
        <NameInput handleAddNames={this.handleAddNames} />
        <List
          names={this.state.names}
          handleDeleteNames={this.handleDeleteNames}
        />
      </div>
    );
  }
}

export default App;
