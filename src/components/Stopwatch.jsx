import React, {useState,useRef,useEffect} from "react";

function Stopwatch(){
    const [isGoing, setIsGoing] = useState(false);
    const [timePassed, setTimePassed] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isGoing){
            intervalIdRef.current = setInterval(() =>{
                setTimePassed(Date.now() - startTimeRef.current);
            }, 10);
        }
        return() => {
            clearInterval(intervalIdRef.current);
        }
    }, [isGoing]);

    function start(){
        setIsGoing(true);
        startTimeRef.current = Date.now() - timePassed;
    }
    function stop(){
        setIsGoing(false);
    }
    function reset(){
        setIsGoing(false);
        setTimePassed(0);
    }

    function formatTime(){
        let hours = Math.floor(timePassed / (1000 * 60 * 60));
        let minutes = Math.floor(timePassed / (1000 * 60) %60);
        let seconds = Math.floor(timePassed / (1000)%60);
        let milliseconds = Math.floor((timePassed % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return(
    <div className="stopwatch">
        <div className="timer">
            {
                formatTime()
            }
        </div>
        <div className="controls">
            <button onClick={start} className="watch-start">Start</button>
            <button onClick={stop} className="watch-stop">Stop</button>
            <button onClick={reset} className="watch-reset">Reset</button>
        </div>
    </div>);
}

export default Stopwatch;