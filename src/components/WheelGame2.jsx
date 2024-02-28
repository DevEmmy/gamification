import React, { useState } from 'react';
import '../App.css';

const Wheel = ({ options, play, setWon }) => {
  const [rotation, setRotation] = useState(0);

  const startRotation = () => {
    setRotation(0);

    setTimeout(() => {
      const randomRotation = Math.floor(Math.random() * 360) + 1440;
      setRotation(rotation + randomRotation);

      const selectedOption = options[Math.floor((randomRotation % 360) / (360 / options.length))];
      setWon(selectedOption);
    }, 100);
  };

  return (
    <div className='wheel-container'>
      <div className='arrow'></div>
      <ul className={`wheel ${play ? "start-rotation" : "stop-rotation"}`} style={{ transform: `rotate(${rotation}deg)` }}>
        {options.map((option, index) => (
          <li key={index} style={{ transform: `rotate(${index * (360 / options.length)}deg)` }}>
            {option}
          </li>
        ))}
      </ul>
      <button className='spin-button' onClick={startRotation} disabled={play}>Spin</button>
    </div>
  );
};

const Wheel2 = () => {
  const [play, setPlay] = useState(false);
  const [won, setWon] = useState(null);
  const options = ['2x', 'Free Spin', '4x', 'Free Spin', '6x', 'Free Spin', '8x', 'Free Spin', '10x', 'Free Spin', '12x', 'Free Spin'];

  return (
    <div className='app'>
      <h1>Wheel Game</h1>
      <Wheel options={options} play={play} setWon={setWon} />
      <p>{won ? `You won ${won}!` : 'Spin the wheel to win!'}</p>
      <button className='reset-button' onClick={() => { setWon(null); setPlay(false); }}>Reset</button>
    </div>
  );
};

export default Wheel2;