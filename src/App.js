import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';

export default function App() {

  const [cat, setCat] = useState();

  useEffect(() => {
    api
      .get("v1/images/search")
      .then((response) => setCat(response.data[0]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

console.log(cat)

  return (
    <div className="App">
      <p>Cat id: {cat?.id}</p>
      <p>Image height: {cat?.height} and image width: {cat?.width}</p>
      <img src={cat?.url} alt="Cat" />
    </div>
  );
}
