import React from 'react'
import Lottie from 'lottie-react'
import a from '../lottie/mobile.json'
import infographic from '../lottie/infography .json'
import Heading from '../common/Heading'
import { KEY_SEMANTICS_WORK } from '../utils/helper'
function KeySemanticsWork() {
  return (
    <div className='px-4 pt-24 max-lg:py-16 max-md:py-12 max-sm:py-10 pb-[164px]'>
      <div className="container">
      <div className='text-center'>
        <Heading heading="How does KeySemantics work?"/>
      </div>
      <div className='flex flex-wrap max-w-[1026px] mt-14 max-lg:mt-10 max-md:mt-8 max-sm:mt-5 gap-[79px] max-lg:gap-y-10 max-md:gap-y-7 max-sm:gap-y-6 justify-between max-lg:justify-center mx-auto'>
        {KEY_SEMANTICS_WORK.map((obj, i) => (
          <div className='max-w-[278px]' key={i}>
            <Lottie animationData={obj.lotty} loop={true} />
            <p className=' tracking-[-0.3px] text-center mt-6 max-md:mt-5 leading-custom-lg max-sm:mt-3 text-off-blue'>{obj.description}</p>
          </div>
        ))}
      </div>
      <div className='max-md:hidden'>
        <Lottie animationData={infographic} loop={true}/>
      </div>
      <div className='md:hidden max-w-[500px] mx-auto'>
        <Lottie animationData={a} loop={true}/>
      </div>
      </div>
    </div>
  )
}

export default KeySemanticsWork