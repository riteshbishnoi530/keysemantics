import React from 'react'

const CustomList = ({ CustomList }) => {
  return (
      <ul className='list-disc pl-6'>
          <li className='text-base font-normal leading-[28px] text-darkBlue max-w-[552px] max-lg:max-w-none'>{CustomList}</li>
    </ul>
  )
}

export default CustomList