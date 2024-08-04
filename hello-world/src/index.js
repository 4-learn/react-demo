import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleChange = () => {
    console.log('Current input value: ' + this.inputRef.current.value);
  };

  handleSubmit = (event) => {
    alert('Submitted value: ' + this.inputRef.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UncontrolledForm />);