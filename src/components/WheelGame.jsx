import React, { useEffect, useState } from 'react'
import Return from './Return'
import { SpinWheel } from 'spin-wheel-game';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Overlay from './Overlay';
import { Wheel } from 'react-custom-roulette'
import toast, { Toaster } from 'react-hot-toast';

const WheelGame = () => {

    const notify = () => toast.error('Kindly stake an amount');

    const [stake, setStake] = useState()
    const [won, setWon] = useState(false)
    const [amountWon, setAmountWon] = useState(0)
    const [selectedOdd, setSelectedOdd] = useState(2)
    const [Insufficient, setInsufficient] = useState(false)

    const data = [
        { option: '2x', segColor: '#9EF4C3' },
        { option: '4x', segColor: '#9EF4C3' },
        { option: '6x', segColor: "#9EF4C3" },
        { option: '8x', segColor: '#9EF4C3' },
        { option: '10x', segColor: '#9EF4C3' },
        { option: '12x', segColor: '#9EF4C3' },
        { option: '14x', segColor: '#9EF4C3' },
        { option: '16x', segColor: '#9EF4C3' },
    ]

    const [balance, setBalance] = useState(8000)
    const segments = [
        { option: '2x', segColor: '#9EF4C3' },
        { option: '4x', segColor: '#9EF4C3' },
        { option: '6x', segColor: "#9EF4C3" },
        { option: '8x', segColor: '#9EF4C3' },
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
        if ((stake == null) || (stake == 0)){
            notify()
            setMustSpin(false)
        }
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
        <div className='bg-[#2F855A] min-h-[100vh]'>
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


            <div className='flex flex-col items-center justify-center mt-3'>



                <h2 className={`text-white text-center p-3 text-[24px] font-semibold ${!show ? "pulsate" : ""}`}>Wheel of Fortune</h2>

                <div className='md:px-[5%] layer'>
                    {/* <SpinWheel {...spinWheelProps} />; */}

                    {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/010/862/341/small/3d-blank-black-golden-podium-stand-display-minimalist-pedestal-or-showcase-scene-for-present-product-and-mock-up-png.png" alt="" className='absolute -bottom-16 x1'/> */}
                    <div className='absolute top-0 centered-div '>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data}
                        outerBorderColor="#9EF4C3"
                        backgroundColors={["#9EF4C3", "white"]}
                        radiusLineWidth={"1"}
                        onStopSpinning={() => {
                            setMustSpin(false);
                        }}
                        fontSize={"30"}
                        innerBorderColor={"red"}
                        disableInitialAnimation={"true"}
                        textColors={["#2F855A"]}
                    />
                    </div>

                </div>

                <div className='flex text-white w-2/5 border-4 border-white p-3 gap-3 rounded-lg items-center justify-center mt-10'>
                    <p>Stake: </p>
                    <input type="number" className='w-full bg-transparent font-bold text-white  focus:outline-none' value={stake} onChange={(e) => { setStake(e.target.value);
                        if(e.target.value > balance || e.target.value <= 0){
                            setInsufficient(true)
                        }
                        else{
                            setInsufficient(false)
                        }
                    }} placeholder='0.00' />
                </div>

                {
                    Insufficient &&
                    <p className='text-red-400 font-semibold text-[14px]'>Insufficient Balance</p>
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

                <button className=' w-2/3 mb-20 big-button' onClick={handleSpinClick} disabled={Insufficient}>
                    <span>Spin</span>
                </button>


            </div>

            <Toaster />
        </div>
    )
}

export default WheelGame