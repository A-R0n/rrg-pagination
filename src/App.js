import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [routes, setRoutes] = useState([null]);

  useEffect(() => {
    axios.get("/api/routes").then(res=>setRoutes(res.data))

  }, [routes]);

  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
