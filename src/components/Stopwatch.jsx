import React, {useState,useRef,useEffect} from "react";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(False);
    const [isStopped, setIsStopped] = useState(True);
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
    </div>);
}

export default Stopwatch;