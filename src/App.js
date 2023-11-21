import { createContext, useEffect, useState } from 'react';
import TreeView from './components/TreeView';
import './App.css';

export const AppContext = createContext({});

function App() {
  const [data, setData] = useState({})
  const [appState, setAppState] = useState({})

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [])
  return (
    <AppContext.Provider  value={{ appState, setAppState }}>
    <div className="App">
      <TreeView obj={data} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
