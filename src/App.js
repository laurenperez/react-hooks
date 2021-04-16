import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('Hey Im in the constructor!')
    this.state={
      astros: []
    }
    // if we had child components we could bind this here and pass those functions to the child components saying {this.nameOfFunctionHere}
    // this.nameOfFunctionHere = this.nameOfFunctionHere.bind(this)
  }
  componentWillMount(){
    console.log('Hello from C W M this happens before render!')
  }
  componentDidMount(){
    console.log('Hello from C D M this happens after render!')
    fetch('http://api.open-notify.org/astros.json')
    .then(result => result.json())
    .then((result) => this.setState({astros: result.people})
    )
  }
  componentWillReceiveProps(){
    console.log('Hello from C W R P this happens after render!')
    //this will only fire if it rerenders itself
  }
  componentWillUnmount(){
    console.log('Hello from C W U this happens after render!')
    //this only renders
  }

  render() {

    return (
      <ul className="App">
       {this.state.astros.map((item, index) => (<li key={index}>{item.name}</li>))}
      </ul>
    );
  }
}

export default App;
