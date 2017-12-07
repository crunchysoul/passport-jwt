import React, { Component } from "react";
import "./App.css";
import LogInForm from "./components/LogInForm.js";

class App extends Component {
  onLogIn = ({ email, password }) => {
    console.log("App received", { email, password });
  };

  render() {
    return (
      <div className="App">
        <h1 className="mb-2">Amazon Clone</h1>
        <p>using Node.js backend and React frontend</p>
        <LogInForm onLogIn={this.onLogIn} />
      </div>
    );
  }
}

export default App;
