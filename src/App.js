import "./App.css";
// import Person from "./person/person";
import UserInput from "./User/userInput";
import UserOutput from "./User/userOutput";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    persons: [
      {
        name: "ravi",
        age: 22,
      },
      {
        name: "abhi",
        age: 21,
      },
      {
        name: "sairam",
        age: 24,
      },
    ],
    Showpersons: false,
  };

  togglePersonHandler = () => {
    const person = this.Showpersons;
    this.setState({ Showpersons: !person });
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 21,
        },
        {
          name: "abhilash",
          age: 20,
        },
        {
          name: "sairam",
          age: 24,
        },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "ravi",
          age: 21,
        },
        {
          name: event.target.value,
          age: 20,
        },
        {
          name: "sairam",
          age: 24,
        },
      ],
    });
  };
  render() {
    return (
      <div>
        <h1>My name is Ravi reddy </h1>
        <button onClick={() => this.togglePersonHandler()}>
          Toggle persons
        </button>
        {this.Showpersons ? (
          <div>
            <UserInput />
            <UserOutput name="Ravi reddy" job="web developer" />
            <UserOutput name="Hagane" job="Youtuber" />
            <UserOutput name="Kaala bhairav" job="Yogi" />
          </div>
        ) : null}
      </div>
    );
  }
}
