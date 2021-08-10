import React, { Component } from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component{
  constructor() {
    super() 
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ robots: user }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const {robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (!robots.length ?
      <h1>Loading...</h1>:
      (
        <div className='tc'>
          <h1 className='f1'>Robots - Not Transformers</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardArray robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    );
  }
}

export default App;
