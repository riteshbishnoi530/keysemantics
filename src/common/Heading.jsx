import React from 'react'

function Heading({heading, color}) {
  return (
    <div>
        <h3 className= {`text-${color} text-custom-sm mb-2 max-sm:mb-1 max-md:text-2xl max-sm:text-2xl font-bold leading-custom-xl`}>{heading}</h3>
    </div>
  )
}

export default Heading