import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListOptionsBtn from './components/ListOptionsBtn';
import api from './services/api';

export const ListRequest = createContext();

export default function App() {

  const [list, setList] = useState([]);
  const [requestType, setRequestType] = useState([]);
  const [catImage, setCatImage] = useState([]);


  useEffect(() => {
    api.get("v1/images/search")
      .then((response) => setCatImage(response.data[0]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function renderBreedsList() {
    if (list.length > 0) return list.map(breed => <ListOptionsBtn key={breed.id} data={breed} />)
  }

  return (
    <div className="App">
      <ListRequest.Provider value={{ setList, setCatImage, setRequestType, requestType }} >
        <Header />
        <div className={list.length > 0 ? 'breedsListContainer active' : 'breedsListContainer'}>
          {renderBreedsList()}
        </div>
      </ListRequest.Provider>
      <div className='catImageContainer'>
        <p>ID da imagem: {catImage?.id}</p><br />
        <p className='image-size'>Tamanho original da imagem: <br /> Altura: {catImage?.height}px - Largura: {catImage?.width}px</p>
        <img src={catImage?.url} alt="cat" className='cat-image' />
      </div>
    </div>
  );
}
