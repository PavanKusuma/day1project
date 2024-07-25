import React, { useState, useEffect } from 'react';

function Six() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render (componentDidMount and componentDidUpdate)
    console.log('useEffect: Component has been rendered or updated');
    setCount(count + 1);
    // Return a cleanup function to run before the component unmounts
    return () => {
      console.log('Cleanup: Component is about to be unmounted');
    };
  }, []); // The effect runs only when `count` changes

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Function Component with Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Six;