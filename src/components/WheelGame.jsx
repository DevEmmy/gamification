import React, { useEffect, useState } from 'react'
import Return from './Return'
import { SpinWheel } from 'spin-wheel-game';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Overlay from './Overlay';
import { Wheel } from 'react-custom-roulette'

const WheelGame = () => {

    const [stake, setStake] = useState()
    const [won, setWon] = useState(false)
    const [amountWon, setAmountWon] = useState(0)
    const [selectedOdd, setSelectedOdd] = useState(2)
    const [Insufficient, setInsufficient] = useState(false)

    const data = [
        { option: '2x', segColor: '#2F855A' },
        { option: '4x', segColor: '#2F855A' },
        { option: '6x', segColor: "#2F855A" },
        { option: '8x', segColor: '#2F855A' },
        { option: '10x', segColor: '#2F855A' },
        { option: '12x', segColor: '#2F855A' },
        { option: '14x', segColor: '#2F855A' },
        { option: '16x', segColor: '#2F855A' },
    ]

    const [balance, setBalance] = useState(8000)
    const segments = [
        { option: '2x', segColor: '#2F855A' },
        { option: '4x', segColor: '#2F855A' },
        { option: '6x', segColor: "#2F855A" },
        { option: '8x', segColor: '#2F855A' },
        // Add more segments as needed
    ];


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

        {
            value: 10
        },
        {
            value: 12
        },
        {
            value: 14
        },

        {
            value: 16
        },

    ]


    const [show, setShow] = useState(false)

    const handleConfetti = () => {
        setShow(true)
        // setTimeout(() => { setShow(false) }, 5000)
    }

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    useEffect(()=>{
        if(show){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            document.body.style.overflow = 'hidden';
        }
        
        else
            document.body.style.overflow = 'auto';
    }, [show])

    const handleSpinClick = () => {
        if (!mustSpin && (balance >= stake)) {

            setBalance(balance - stake);

            const newPrizeNumber = Math.floor(Math.random() * data.length);
            
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);

            setTimeout(()=>{
                if(data[newPrizeNumber].option.indexOf(selectedOdd) !== -1){
                    console.log("won")
                    setBalance(balance + (Number(stake) * selectedOdd))
                    handleConfetti()
                    setWon(true)
                }
                else{
                    console.log("lost")
                    setWon(false)
                    handleConfetti()
                }
            }, 12000)
        }
        else if(balance < stake){
            console.log("Insufficient Balance")
        }
    }

    const { width, height } = useWindowSize()


    return (
        <div className='bg-gray-800 min-h-[100vh]'>
            <Return amount={balance}/>
            {won}

            {
                show &&
                <>
                    {
                        won && 

                        <div className='z-50'>
                            <Confetti
                            width={width}
                            height={height}
                        />
                        </div>
                    }
                    <Overlay setShow={setShow} status={won ? 2 : 1} amountWon={selectedOdd * Number(stake)}/>
                </>

            }


            <div className='flex flex-col items-center justify-center mt-10'>



                <h2 className={`text-white text-center p-3 text-[24px] font-semibold ${!show ? "pulsate" : ""}`}>Wheel of Fortune</h2>

                <div className='md:px-[5%]'>
                    {/* <SpinWheel {...spinWheelProps} />; */}
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        outerBorderColor="#2F855A"
                        backgroundColors={["#2F855A", "white"]}
                        radiusLineWidth={"1"}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                    />

                </div>

                <div className='flex text-white w-2/5 border border-primary p-3 gap-3 rounded-lg items-center justify-center'>
                    <p>Bet</p>
                    <input type="number" className='w-full bg-transparent font-bold text-primary  focus:outline-none' value={stake} onChange={(e) => { setStake(e.target.value);
                        if(e.target.value > balance){
                            setInsufficient(true)
                        }
                        else{
                            setInsufficient(false)
                        }
                    }} placeholder='0.00' />
                </div>

                {
                    Insufficient &&
                    <p className='text-red-600 text-[14px]'>Insufficient Balance</p>
                }

                <div className="grid grid-cols-4 gap-2 rounded-3xl my-5 p-3 bg-gray-700 border border-gray-100">
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

                <button className='bg-primary p-3 rounded-lg text-white w-2/3 mb-20' onClick={handleSpinClick}>SPIN</button>

            </div>
        </div>
    )
}

export default WheelGame