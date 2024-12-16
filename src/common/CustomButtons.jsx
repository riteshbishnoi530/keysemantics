import React from 'react'

function CustomButtons({customButtons}) {
  return (
    <div>
        <button className='border border-off-blue rounded-[48px] py-[8.5px] px-[14px] text-sm hover:bg-off-blue hover:text-white transition-all ease-linear duration-300 text-off-blue font-medium leading-custom-lg'>{customButtons}</button>
    </div>
  )
}

export default CustomButtons