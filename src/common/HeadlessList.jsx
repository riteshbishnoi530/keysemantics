import React from 'react'
import Heading from './Heading'
import CustomButtons from './CustomButtons'

const HeadlessList = ({ CommonText, btnText, SectionList,myImg,myClass }) => {
  return (
    <div className={` ${myClass} flex items-center gap-x-5 gap-y-6 justify-between max-lg:flex-col`}>
        <div className='w-6/12 max-lg:w-full'>
        <Heading heading={CommonText} />
            <ul className=' list-disc pl-4'>
                {SectionList.map((obj, i) => (
                    <li className='text-base text-wrap font-normal leading-[28px] text-darkBlue max-w-[552px] max-xl:max-w-none' key={i}>{obj}</li>
                ))}
                
            </ul>
            <div className='w-[113px] mt-6'>
                <CustomButtons customButtons={btnText} />
                </div>
        </div>
        <div className='w-6/12 mt-6 max-lg:w-full'>
        <img src={myImg} alt="people" />
        </div>
    </div>
  )
}

export default HeadlessList