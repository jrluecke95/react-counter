import React from 'react'
import Display from './Display';
import Increment from './Increment';
import Decrement from './Decrement';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: typeof props.initialCount !== "number" ? 42 : props.initialCount
    }
  }
  // this arrow function allows us to access 'this'
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <Decrement handleClick={this.decrement} />
        <Display count={this.state.count}/>
        <Increment handleClick={this.increment}/>
      </div>
    );
  }
}

export default Counter;