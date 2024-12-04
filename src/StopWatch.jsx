import React,{useState,useEffect,useRef} from "react";
function StopWatch()
{
    const[isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedtime]=useState(0);
    const intervalIdRef=useRef(null);
    const starTimeRef=useRef(null);

    useEffect(()=>{
        if(isRunning)
            {
              intervalIdRef.current=  setInterval(()=>{
                    setElapsedtime(Date.now()-starTimeRef.current);
                },10);
            }

            return ()=>
                {
                    clearInterval(intervalIdRef.current);
                }
    },[isRunning])

    function start()
    {
        setIsRunning(true);
        starTimeRef.current=Date.now()-elapsedTime;
    }

    function stop()
    {
        setIsRunning(false);
    }

    function reset()
    {
        setElapsedtime(0);
        setIsRunning(false);
    }

    function formatTime()
    {
        let hours=Math.floor(elapsedTime/(1000*60*60))
        let minutes=Math.floor(elapsedTime/(1000*60)%60)
        let seconds=Math.floor(elapsedTime/(1000)%60)
        let milliseconds=Math.floor((elapsedTime%1000)/10);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");

        return hours+":"+minutes+":"+seconds+":"+milliseconds;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop Button</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}
export default StopWatch