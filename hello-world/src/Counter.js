import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
    this.state = {
      count: 0
    };
  }

  // 增加 count 的方法
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;