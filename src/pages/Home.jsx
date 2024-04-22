import React, { useState } from 'react'
import { airpods } from '../data/airpods'
import { FaRegHeart } from "react-icons/fa";
function Home() {
    const [chosenId, setChosenId] = useState(1)
    const currentItem = airpods.find(item => item.id === chosenId)
    console.log(currentItem)
    const clickBtn = (item) => {
        setChosenId(item.id)
    }
    console.log(chosenId)
    return (
        <div className='w-full flex flex-col gap-y-5 p-10 gap-x-3 h-screen'>
            <div className='w-[350px] min-h-96 py- flex flex-col justify-center p-8 bg-white shadow-2xl border rounded-xl '>
                <div className='flex flex-col gap-y-4'>

                    <div className='flex items-center  justify-center py-'>
                        <img className='w-40 h-40' src={currentItem?.image} alt="" />

                    </div>
                    <div className='flex flex-col gap-y- py-4'
                    >

                        <h2 className='font-bold'>{currentItem?.title}</h2>
                        <h3 className='font-semibold text-zinc-700'>${currentItem?.price}</h3>
                        <p className='font-semibold'>{currentItem?.desc}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-9 items-start '>
                    <div className='flex items-center gap-x-5'>


                        {
                            airpods.map(item => (
                                <div className={`
                                ${chosenId === item.id ? "shadow-lg shadow-red-500 border" : "border"}
                                flex items-center shadow-xl w-20 h-24 jutify-center p-1 rounded-lg bg-white gap-x-5`} key={item.id}>
                                    <img onClick={() => clickBtn(item)} className='w-20 h-20 bg-cover bg-transparent cursor-pointer' src={item.image} alt="" />

                                </div>
                            ))
                        }
                    </div>
                    <div className='flex items-center  gap-x-3'>

                        <div className='w-8 h-8 cursor-pointer flex items-center justify-center rounded bg-white shadow-lg '>
                            <FaRegHeart  />
                        </div>
                        <button className='h-8 px-5 rounded font-serif bg-black shadow-lg hover:bg-zinc-900 ease-linear duration-150 text-white'>Buy Now</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home;