import { useState, useEffect } from "react";

function useStopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(intervalId as NodeJS.Timeout);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return { time, isRunning, start, pause, reset };
}

export default useStopwatch;
