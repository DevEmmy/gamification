import React, { useState } from 'react'
import Return from './Return'
import Wheel from './Wheel'
import { SpinWheel } from 'spin-wheel-game';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Overlay from './Overlay';

const WheelGame = () => {

    const [selectedOdd, setSelectedOdd] = useState(2)

    const odds = [
        {
            value: 2,
        },
        {
            value: 4
        },
        {
            value: 6
        },
        {
            value: 8
        },

    ]
    const [won, setWon] = useState()
    const [play, setPlay] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0); // Initial selected option is 0 (first slice)


    const startRotation = () => {
        setPlay(true);

        setTimeout(() => {
            setPlay(false)
        }, Math.floor(Math.random() * 10000 + 1))
    }

    const handleSpinFinish = (result) => {
        console.log(`Spun to: ${result}`);
        handleConfetti()
        // Handle the result as needed
    };


    const segments = [
        { segmentText: '2x', segColor: '#2F855A' },
        { segmentText: 'Free Spin', segColor: 'white' },
        { segmentText: '4x', segColor: '#2F855A' },
        { segmentText: 'Free Spin', segColor: 'white' },
        { segmentText: '6x', segColor: "#2F855A" },
        { segmentText: 'Free Spin', segColor: 'white' },
        { segmentText: '8x', segColor: '#2F855A' },
        { segmentText: 'Free Spin', segColor: 'white' },
        // Add more segments as needed
    ];

    const spinWheelProps = {
        segments,
        onFinished: handleSpinFinish,
        primaryColor: '#2F855A',
        contrastColor: 'black',
        buttonText: 'Spin',
        isOnlyOnce: false,
        size: 290,
        upDuration: 100,
        downDuration: 600,
        arrowLocation: 'top',
        showTextOnSpin: false,
        isSpinSound: true,
    };

    const { width, height } = useWindowSize()

    const [show, setShow] = useState(false)

    const handleConfetti = () => {
        setShow(true)
        // setTimeout(() => { setShow(false) }, 5000)
    }
    return (
        <div className='bg-gray-800 min-h-[100vh]'>
            <Return />
            {won}

            {
                    show &&
                    <>
                        <Confetti
                            width={width}
                            height={height}
                        />
                        <Overlay setShow={setShow}/>
                    </>

                }
            <div className='flex flex-col items-center justify-center mt-10'>

               

                <h2 className={`text-white text-center p-3 text-[24px] font-semibold ${!show? "pulsate" : ""}`}>Tap to Spin the wheel</h2>

                <div className='md:px-[5%]'>
                    <SpinWheel {...spinWheelProps} />;
                </div>

                <div className='flex text-white w-2/5 border border-primary p-3 gap-3 rounded-lg items-center justify-center'>
                    <p>Bet</p>
                    <input type="number" className='w-full bg-transparent font-bold text-primary  focus:outline-none' placeholder='0.00' />
                </div>

                <div className="flex gap-2 rounded-full my-5 p-3 bg-gray-700 border border-gray-100">
                    {
                        odds.map((odd, i) => {
                            return (
                                <div key={i} className={`rounded-full w-10 h-10 text-center flex items-center justify-center cursor-pointer font-semibold ${selectedOdd == odd.value ? "bg-primary text-white border-2 border-white" : "bg-white text-black"}`} onClick={() => setSelectedOdd(odd.value)}>
                                    {odd.value}x
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default WheelGame