// src/components/Timer.jsx
// Starts an interval on mount and clears it on unmount (cleanup).
// -----------------------------



import { useEffect, useState } from "react";

export default function Timer() {
    // Required: seconds state starting at 0.
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer Started");

        // Required: setInterval increments seconds every second.
        const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        // Required cleanup: clearInterval + console log.
        return () => {
            clearInterval(id);
            console.log("Timer Stopped");
        };
    }, []);

    return (
        <div className="timer">
            <p className="timer_label">Seconds:</p>
            <p className="timer_value">{seconds}</p>
        </div>
    );
}