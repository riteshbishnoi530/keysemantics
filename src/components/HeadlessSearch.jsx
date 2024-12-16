import React from 'react'
import Heading from '../common/Heading'
import { DATA_SECURITY, SEARCH_LIST } from '../utils/helper'
import CustomButtons from '../common/CustomButtons'
import HeadlessList from '../common/HeadlessList'

function HeadlessSearch() {
    return (
        <div className='px-4 pt-[148px] pb-[164px] max-lg:py-16 max-md:py-12 max-sm:py-10'>
            <div className='container'>
                <div className='flex items-center justify-between gap-6 max-lg:flex-col mb-[148px] max-lg:mb-16 max-md:mb-12 max-sm:mb-10'>
                    <div className='max-w-[552px]'>
                        <Heading heading="Headless federated search"/>
                        <HeadlessList/>
                        <div className='mt-6 max-lg:mt-5 max-md:mt-4 max-sm:mt-3'>
                        <CustomButtons customButtons="Get a demo"/>
                        </div>
                    </div>
                    <div className='max-w-[600px] max-xl:max-w-[500px] max-lg:max-w-[552px]'>
                        <img src="./assets/images/headless-search.webp" alt="headless search"/>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-6 max-lg:flex-col-reverse'>
                    <div className='max-w-[600px] max-xl:max-w-[500px] max-lg:max-w-[552px]'>
                        <img src="./assets/images/data-security.webp" alt="headless search"/>
                    </div>
                    <div className='max-w-[552px]'>
                        <Heading heading="Data Security and Hosting"/>
                        <HeadlessList/>
                        <div className='mt-6 max-lg:mt-5 max-md:mt-4 max-sm:mt-3'>
                        <CustomButtons customButtons="Get a demo"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeadlessSearch