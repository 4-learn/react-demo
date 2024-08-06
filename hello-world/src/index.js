import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LifecycleDemo from './LifecycleDemo';
import reportWebVitals from './reportWebVitals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true
    };
  }

  toggleChild = () => {
    this.setState((prevState) => ({
      showChild: !prevState.showChild
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? 'Hide' : 'Show'} Child Component
        </button>
        {this.state.showChild && <LifecycleDemo />}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();