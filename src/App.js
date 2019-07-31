import React, {useState} from 'react';
import './App.css';

import PhotoCard from './Components/PhotoCard.component';

import axios from 'axios';

function App() {
  const [title, setTitle] = useState('') 
  const [url, setUrl] = useState('')
  const [explanation, setExplanation] = useState('')
  

    console.log('first render')
    axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
      .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setExplanation(res.data.explanation)
        setUrl(res.data.url)
      })
      console.log('last')


  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
      <PhotoCard
        title={title}
        url={url}
        explanation={explanation}
      />
    </div>
  );
}

export default App;
