import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import './Clock.css';


function Clock({ colour }) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() =>
            setTime(new Date(), 1000)
            , 1000);

        return () => clearInterval(timerId);

    }, []);

    return (
        <div className="clock-container" style={{ backgroundColor: colour }}>
            <h1 className="time-container">{time.toLocaleTimeString()}</h1>
        </div>
    )
}

Clock.propTypes = {
    colour: PropTypes.string.isRequired,
};

export default Clock;