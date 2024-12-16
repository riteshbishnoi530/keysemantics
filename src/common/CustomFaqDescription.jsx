import React from 'react'

const CustomFaqDescription = ({ FaqText }) => {
  return (
      <p className='text-base font-normal text-darkBlue leading-[28px] max-w-[552px] max-xl:max-w-none'>{FaqText}</p>
  )
}

export default CustomFaqDescription