import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='bg-hero-bg bg-bottom bg-cover bg-no-repeat bg-off-white'>
      <Header/>
    <div className='min-h-screen flex flex-col justify-center px-4'>
      <div className="container">
        <h1 className='text-off-blue text-custom-md max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold max-w-[650px] max-lg:max-w-[500px] max-md:max-w-[400px] max-sm:max-w-[340px] mx-auto text-center leading-custom-sm'>AI-Powered Search as a Service</h1>
        <p className='text-2xl max-md:text-base max-sm:max-w-[320px] mx-auto font-medium text-center mt-10 max-lg:mt-8 max-md:mt-6 max-sm:mt-4'>Unlock your content with KeySemantics.</p>
        <div className='flex justify-center mt-12 max-lg:mt-8 max-md:mt-6 max-sm:mt-4'>
        <button className='text-white rounded-[48px] py-5 px-8 bg-off-blue border border-off-blue hover:bg-transparent hover:text-off-blue transition-all ease-linear duration-300 font-medium leading-custom-md'>Get started</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero