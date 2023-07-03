import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactPlayer from 'react-player'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ReactPlayer  playing={true} url='https://www.youtube.com/watch?v=X7WXHhokylc' width='650px' height='360px' progressInterval={1000} controls={true} light={<img src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&w=650&q=80' alt='Thumbnail' />}  />

  </div>
  )
}

export default App
