import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [liste, setListe] = useState([
    {
      nom: "test1",
      image: ""
    },
    {
      nom: "test2",
      image: ""
    }
  ]);

  useEffect( () => {
    axios
      .get('https://127.0.0.1:8000/api/categories')

      .then(response => {
        console.log(response.data)
        setListe(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
      <div>
        <h1>Categories</h1>
        <ul>
          {
            liste.map((item, index) => (
              <li key={index}>{item.nom}</li>
            ))
          }
        </ul>
      </div>
  )


  

  
}



export default App
