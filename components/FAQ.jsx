import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqs = [
    {
        question: "What is the Alpha Sheep club Nft? ",
        desc: " Alpha Sheep Club is a collection of 10,000 unique collectible sheeps.. coming soon to Alphaverse and Blockchain."
    },
    {
        question: "What are the benefits of holding Alpha Sheep club Nft?",
        desc: "Check our discord to find out the benefits of holding our NFT."
    },
    {
        question: "How do I contact the alpha Sheep Club team?",
        desc: "Join our discord, open a ticket to contact our admin or mod forward information."
    },
    {
        question: "What is the total supply of Alpha Sheep Club NFT",
        desc: "There are 10,000 of Alpha Sheep Club Nfts"
    },
    {
        question: "How can I get Alpha Sheep Club NFT",
        desc:  `Discord & Twitter giveaways, \n DG dpot, \n WL sales, \n public sales`
    },
]

const Question = ({question, description,index}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={`py-3 border-t-[1px] hover:cursor-pointer border-gray-500 px-2 mb-3`} onClick={() => setShow(!show)}>
        <div className={`flex justify-between items-center`}>
            <h1 className={`font-semibold text-xl uppercase lg:text-3xl ${show ? 'text-[#E5A301]' : 'text-white'}`}> <span>{ index < 10 ? `0${index}` : `1${index}` }</span> {question} </h1>
            <span onClick={() => setShow(!show)}>{show ? <AiOutlineMinus className='w-6 h-6 duration-300 hidden md:block text-[#E5A301] hover:cursor-pointer' /> : <AiOutlinePlus className='w-6 h-6 hidden md:block font-bold text-white hover:cursor-pointer' />}</span>
        </div>
        {
            show && (
                <div className={`text-xl  tracking-wide lg:px-3 duration-300 ${show && "mt-8"}  text-gray-400`}>
                    {description}
                </div>
            )
        }
    </div>
    )
}

function FAQ() {
  return (
    <div id='faq' className='md:max-w-[65%] max-w-[90%] mx-auto py-20'>
        <h1 className='text-center font-bold text-white text-4xl leading-10 lg:text-5xl w-[100%] '>FAQ</h1>
     <div className='my-8 max-w-[100%] md:mt-16 mx-auto'>
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