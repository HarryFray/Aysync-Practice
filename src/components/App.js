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
    axios
      .get('https://api.github.com/rate_limit')
      .then(res => console.log(res));
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:>1+language:${'python'}&sort=stars&order=desc&type=Repositories`
      )
      .then(res => {
        this.setState({
          repos: res.data.items
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.repos.map(repo => {
          return <li key={repo.name}>{repo.name}</li>;
        })}
      </ul>
    );
  }
}

export default App;
