import "./App.css";
import Validation from "./User/validation";
// import Person from "./person/person";
// import Input from "../src/User/input";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    userInput: "",
  };

  inputchangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  // state = {
  //   persons: [
  //     {
  //       name: "ravi",
  //       age: 22,
  //     },
  //     {
  //       name: "abhi",
  //       age: 21,
  //     },
  //     {
  //       name: "sairam",
  //       age: 24,
  //     },
  //   ],
  //   showpersons: false,
  // };

  // togglePersonHandler = () => {
  //   const person = this.state.showpersons;
  //   this.setState({ showpersons: !person });
  // };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 21,
  //       },
  //       {
  //         name: "abhilash",
  //         age: 20,
  //       },
  //       {
  //         name: "sairam",
  //         age: 24,
  //       },
  //     ],
  //   });
  // };

  // changeNameHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {
  //         name: "ravi",
  //         age: 21,
  //       },
  //       {
  //         name: event.target.value,
  //         age: 20,
  //       },
  //       {
  //         name: "sairam",
  //         age: 24,
  //       },
  //     ],
  //   });
  // };
  // deletepersonHandler = (personIndex) => {
  //   const person = this.state.persons.slice();
  //   person.splice(personIndex, 1);
  //   this.setState({ persons: person });
  // };
  render() {
    // let person = null;
    // if (this.state.showpersons) {
    //   person = (
    //     <div>
    //       {this.state.persons.map((person, index) => {
    //         return (
    //           <Person
    //             click={() => this.deletepersonHandler(index)}
    //             name={person.name}
    //             age={person.age}
    //           />
    //         );
    //       })}
    //     </div>
    //   );

    /* <h1>My name is Ravi reddy </h1>
    <button onClick={this.togglePersonHandler}>Toggle persons</button>
    {person} */

    // }
    return (
      <div>
        <input type="text" onChange={this.inputchangeHandler}></input>
        <p>{this.state.userInput}</p>
        <Validation length={this.state.userInput.length} />
      </div>
    );
  }
}
