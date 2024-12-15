import { useState } from 'react'
import {scoreContext} from "./contexts/scoreContext"
import {Scoreboard} from "./components/Scoreboard"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <scoreContext.Provider value={{count, setCount}}>
     <Scoreboard/>
    </scoreContext.Provider>
  )
}

export default App
