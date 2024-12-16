import React from 'react'
import { SEARCH_LIST } from '../utils/helper'

function HeadlessList() {
  return (
    <div>
        {SEARCH_LIST.map((obj, i) => (
                                        <li key={i} className='list-disc text-off-blue leading-custom-lg'>{obj}</li>
                                    ))}
    </div>
  )
}

export default HeadlessList