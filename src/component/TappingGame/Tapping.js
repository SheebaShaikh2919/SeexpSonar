import React, { useState, useEffect } from 'react';

function Tapping() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
  
      setTimeout(() => {
        clearInterval(interval);
        setTimer(0);
        setButtonDisabled(true);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    const handleButtonClick = () => {
      setCount(count => count + 1);
    };

    const handleRefreshClick = () => {
        setCount(0);
        window.location.reload();
      };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <h2>Timer: {timer}s</h2>
        <button onClick={handleButtonClick} disabled={buttonDisabled}>
          Increment Counter
        </button>
        <button onClick={handleRefreshClick}>Refresh</button>
      </div>
    );  
}

export default Tapping;