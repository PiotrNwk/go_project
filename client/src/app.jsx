// Example in client/src/App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return <div>{message} - changed!</div>;
}

export default App;