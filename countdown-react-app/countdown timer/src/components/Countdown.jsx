import { useState } from "react";
import "./countdown.css"

function Countdown ()  {
    const [target, setTarget] = useState(null);
    return (
        <div className="countdown-wrapper">
            <h1 >Countdown Timer</h1>
            <input 
            type="datetime-local" 
            name="time" 
            id="time" 
            onChange={(e) => console.log(e.target.value)}
            />
            <button id="btn">
                Start
            </button>
        </div>
    )
}

export default Countdown;