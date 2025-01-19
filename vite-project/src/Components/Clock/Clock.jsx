import { useState, useContext } from "react";
import { useEffect } from "react";
import './Clock.css';
import { ThemeContext } from '../../context/context'


function Clock() {

    const [time, setTime] = useState(new Date());
    const theme = useContext(ThemeContext);
    const themeColour = theme[0]

    useEffect(() => {
        const timerId = setInterval(() =>
            setTime(new Date(), 1000)
            , 1000);

        return () => clearInterval(timerId);

    }, []);

    return (
        <div className="clock-container" style={{ backgroundColor: themeColour }}>
            <h1 className="time-container">{time.toLocaleTimeString()}</h1>
        </div>
    )
}



export default Clock;