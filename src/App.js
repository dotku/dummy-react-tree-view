import { useEffect, useState } from 'react';
import TreeView from './components/TreeView';
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error(error);
        setError(error);
      });
  }, [])

  if (error) {
    return <div style={{color: 'red', padding: 20}}>{error.message}</div>;
  }

  return (

    <div className="App">
      <TreeView obj={data} />
    </div>
  );
}

export default App;
