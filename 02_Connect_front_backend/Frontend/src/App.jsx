import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
//this will give error : CORS policy
  useEffect(() =>{
    // axios.get('http://localhost:3000/api/jokes')
    axios.get('/api/jokes')//we do like this in the production server || error occurs there is no such site named with this to overcome this error we use proxy
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
    <h1>Chai and fullstack</h1>
    <p>Jokes : {jokes.length}</p>

    {
      jokes.map((joke, index) =>{
        return (
        <div key ={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
        )
      })
      //this will give jokes : 0 as we have not given a request till now and to give a request we gonna use axios as it is famous and in used in production [alternatives : "react querries" , "fetch"]
    }
    </>
  )
}

export default App
