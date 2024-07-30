import React from 'react';
import useInput from './useInput';

function MyComponent() {
  const nameInput = useInput('');
  const emailInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...nameInput} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...emailInput} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyComponent;