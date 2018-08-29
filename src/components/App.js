import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/').then(res => console.log(res));
  }

  render() {
    return <div>Hello World!</div>;
  }
}

export default App;
