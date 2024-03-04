import React, { useEffect, useRef, useState } from 'react'

const Wheel = ({ play = false, setWon }) => {
    const optionTexts = [
        '2x', 'Free Spin',
        '4x', 'Free Spin',
        '6x', 'Free Spin',
        '8x', 'Free Spin',
        '10x', 'Free Spin',
        '12x', 'Free Spin',
    ];

    const [rotation, setRotation] = useState(0); // State to track rotation angle after spin


    const options = [
        { label: 'Option 1', rotation: 0, skew: -60 },
        { label: 'Option 2', rotation: 30, skew: -60 },
        { label: 'Option 3', rotation: 60, skew: -60 },
        { label: 'Option 4', rotation: 90, skew: -60 },
        { label: 'Option 5', rotation: 120, skew: -60 },
        { label: 'Option 6', rotation: 150, skew: -60 },
        { label: 'Option 7', rotation: 180, skew: -60 },
        { label: 'Option 8', rotation: 210, skew: -60 },
        { label: 'Option 9', rotation: 240, skew: -60 },
        { label: 'Option 10', rotation: 270, skew: -60 },
        { label: 'Option 11', rotation: 300, skew: -60 },
        { label: 'Option 12', rotation: 330, skew: -60 },
    ];


    // Function to handle spin button click
    const handleSpin = () => {
        // Simulating a random rotation angle for the spin
        const randomRotation = Math.floor(Math.random() * 360);
        setRotation(randomRotation);
    };

    // Function to find the selected option based on rotation and skew
    const findSelectedOption = () => {
        const optionAngle = 360 / options.length;
        const actualRotation = rotation % 360;
        const optionIndex = Math.floor(actualRotation / optionAngle);
        return options[optionIndex];
    };

    // Get the selected option after the spin
    const selectedOption = findSelectedOption();

    return (

        <div className='relative'>

            <div className="arrow">

            </div>
            <ul className={`circle ${play ? "circle start-rotation" : "circle start-rotation stop-rotation"}`}>


                {/* <div style={{ transform: `rotate(${rotation}deg)` }}> */}
                {options.map((option, index) => {

                    return (
                        <li key={index} >
                            {console.log(option.rotation)}
                            <div className='text'>{option.label}</div>
                        </li>
                    )
                })}
                {/* </div> */}



            </ul>

            <button onClick={handleSpin}>Spin</button>
            {selectedOption && <p>Selected Option: {selectedOption.label}</p>}
        </div>
    )
}

export default Wheel