import React, { Component } from 'react';

// 定義一個簡單的類別元件
class Greeting extends Component {
  render() {
    // 通過 this.props 訪問傳遞給組件的 props
    const { name } = this.props;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Welcome to my React app.</p>
      </div>
    );
  }
}

export default Greeting;
