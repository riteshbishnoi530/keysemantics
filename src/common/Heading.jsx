import React from 'react'

function Heading({heading, color}) {
  return (
    <div>
        <h3 className= {`text-${color} text-custom-sm max-md:text-2xl max-sm:text-xl font-bold leading-custom-xl`}>{heading}</h3>
    </div>
  )
}

export default Heading