import React from 'react'
import CustomButtons from '../common/CustomButtons'

function Header() {
  return (
    <div className='px-4'>
    <div className='container items-center flex flex-wrap justify-between pt-12 max-lg:pt-10 max-md:pt-8 max-sm:pt-5'>
      <img className='max-w-[248px] max-md:max-h-[40px] max-md:max-w-[150px]' src="./assets/images/logo.webp" alt="logo"/>
      <CustomButtons customButtons="Request a demo"/>
    </div>
    </div>
  )
}

export default Header