import React from 'react'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  // this arrow function allows us to access 'this'
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;