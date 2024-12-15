import {useContext} from "react"
import {scoreContext} from "../contexts/scoreContext"
import "../styles/Scoreboard.css"
export const Scoreboard=()=>{    
    const {count, setCount}=useContext(scoreContext)

    return(
        <div className="container">
            <h1>Score Board</h1>
            <h2>Your Current Score is {count}</h2>
            <button onClick={()=>setCount(count+10)}>+</button>
            <button onClick={()=>setCount(count+10)}>-</button>
            <h3>
        
                    {count>100 ? "Good Job!":"Lets make it over 100!"}
            </h3>
        </div>
    )
}