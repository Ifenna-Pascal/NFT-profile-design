import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqs = [
    {
        question: "When is it launch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it launch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it lauch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it launch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it launch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it lauch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    },
    {
        question: "When is it launch?",
        desc: "Official launch will be mid April 2022, precise dates are To-Be-Announced on our discord. Updates will be made in the announcements channel on discord and on Twitter."
    }
]

const Question = ({question, description,index}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={`py-3 border-t-[1px] duration-300 hover:cursor-pointer border-gray-500 px-2 mb-3`} onClick={() => setShow(!show)}>
        <div className={`flex justify-between items-center duration-300 `}>
            <h1 className={`font-semibold text-xl lg:text-3xl ${show ? 'text-[#E5A301]' : 'text-white'}`}> <span>{ index < 10 ? `0${index}` : `1${index}` }</span> {question} </h1>
            <span onClick={() => setShow(!show)}>{show ? <AiOutlineMinus className='w-6 h-6  hidden md:block text-[#E5A301] hover:cursor-pointer' /> : <AiOutlinePlus className='w-6 h-6 hidden md:block font-bold text-white hover:cursor-pointer' />}</span>
        </div>
        {
            show && (
                <div className={`text-lg font-semibold tracking-wide lg:px-3  mt-8 text-gray-500`}>
                    {description}
                </div>
            )
        }
    </div>
    )
}

function FAQ() {
  return (
    <div className='md:max-w-[70%] mx-auto py-20'>
        <h1 className='text-center font-bold text-white text-2xl leading-10 lg:text-5xl w-[100%] '>FAQ</h1>
     <div className='my-8 max-w-[80%] mx-auto'>
        {
            faqs && faqs.map((x, i) => (
                <Question key={i} question={x.question} description={x.desc} index={i+1} />
            ))
        }
     </div>
    </div>
  )
}

export default FAQ