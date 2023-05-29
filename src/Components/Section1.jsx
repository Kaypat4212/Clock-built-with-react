import React, { useState, useEffect } from 'react';
import '../Styles/style1.css';

const Section1 = () => {
  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);
  const [timeInWords, setTimeInWords] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      setHourRotation(hour);
      setMinuteRotation(minute);
      setSecondRotation(second);

      const time = getTimeInWords(hours, minutes, seconds);
      setTimeInWords(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeInWords = (hours, minutes, seconds) => {
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const hourText = hours % 12 || 12;
    const minuteText = minutes < 10 ? `0${minutes}` : minutes;
    const secondText = seconds < 10 ? `0${seconds}` : seconds;

    return `${hourText}:${minuteText}:${secondText} ${meridiem}`;
  };

  return (
    <div>
      <div>
        <h3 className='bounce-in-fwd'>Simple Clock <br /> Built by Kaypat.dev</h3>
      </div>
      <div className='roll-in-blurred-left'>
        <h4>This was built with Reactjs</h4>
      </div>
      <small className='small'>Time is being shown respectively to your device local time</small>
      <div className="clock">
        <div className="hands roll-in-blurred-left">
          <div className="hour" style={{ transform: `rotate(${hourRotation}deg)` }}></div>
          <div className="minute" style={{ transform: `rotate(${minuteRotation}deg)` }}></div>
          <div className="second" style={{ transform: `rotate(${secondRotation}deg)` }}></div> <br />
          <p className='time'>Current Time: {timeInWords}</p>
        </div>
        <p>Looking to develop stunning websites? I'm your go-to web developer! </p>
        <p>Visit my portfolio at <a href="https://www.kaypat.dev" target="_blank" rel="noopener noreferrer">www.kaypat.dev</a> to see my work.</p>
        <div className='formm'>
          <form name='reviews' netlify action="POST">
            <div>
              <h4>Your reviews are appreciated</h4>
            </div>
            <textarea name="" id="text" cols="30" rows="10"></textarea>
            <button type='submit' className='btn bounce-top'>Submit a review</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section1;
