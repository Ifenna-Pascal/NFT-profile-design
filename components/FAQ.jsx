import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const faqs = [
    {
        question: "What is the Alpha Sheep Club?",
        desc: "Alpha sheep club is a 3D nft Collection of 10,000 unique  sheep coming to Ethereum Blockchain soon Alpha Sheep Club is taking the beautiful nature of earth to the alpha verse where the Shepard's live with Alpha sheep nft,10 Knight sheep nft, Uncommon sheep nft, common sheep nft, rare sheep nft, super rare nft"
    },
    {
        question: "When is the mint price & date?",
        desc: "OG presale: TBA \n WL Presale: TBA \n Public presale: TBA"
    },
    {
        question: "What is the total supply of Alpha Sheep Club Nft?",
        desc: "There will be 10,000 of Alpha Sheep Club NFT without no additional nft"
    },
    {
        question: "How can I get Alpha Sheep Club Nft?",
        desc: "You get our nft by been whitelisted and OG for presale or public sale And also OS for secondary market"
    },
    {
        question: "Which Blockchain would this project be on?",
        desc:  `Ethereum Blockchain`
    },
    {
        question: "What are the benefits of Alpha Sheep Club holders?",
        desc:  `Holder will be to attending exclusive our events and party
        They can shake their nft and benefit from it.... Etc \n Join our discord, find out more on how to be whitelist and get access to our Presale`
    }
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