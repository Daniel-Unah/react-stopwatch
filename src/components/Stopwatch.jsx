import React, {useState,useRef,useEffect} from "react";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [isStopped, setIsStopped] = useState(true);
    const [timePassed, setTimePassed] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, {isRunning});

    function start(){

    }
    function stop(){

    }
    function reset(){

    }

    function formatTime(){
        return '00:00:00';
    }

    return(<div className="stopwatch">
        <div className="display">
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