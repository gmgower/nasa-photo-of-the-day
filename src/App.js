import React, {useState, useEffect} from 'react';
import './App.scss';

import PhotoCard from './Components/PhotoCard/PhotoCard.component';
import './Components/PhotoCard/PhotoCard.styles.scss'

import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  // const [title, setTitle] = useState('') 
  // const [url, setUrl] = useState('')
  // const [explanation, setExplanation] = useState('')
  
  useEffect(() => {
    console.log('first render')
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7o9y0elrQx0qja0uhzWmiNG7yVYVrL9k3Ac0yJ0J")
      .then(res => {
        console.log(res.data);
        // setTitle(res.data.title)
        // setExplanation(res.data.explanation)
        // setUrl(res.data.url)
        setData(res.data)
      })
      .catch(err => {
        console.log('Site not available.')
      })
  }, [])
      console.log('last render')


  return (
    <div className='App'>
      <PhotoCard
        title={data.title}
        url={data.url}
        explanation={data.explanation}
        date={data.date}
      />
    </div>
  );
}

export default App;
