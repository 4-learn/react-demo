import { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('clicked');
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

render(
  <Example />, document.getElementById('root')
);