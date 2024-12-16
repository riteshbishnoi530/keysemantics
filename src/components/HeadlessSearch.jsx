import React from 'react'
import Heading from '../common/Heading'
import { DATA_SECURITY, SEARCH_LIST } from '../utils/helper'
import CustomButtons from '../common/CustomButtons'
import HeadlessList from '../common/HeadlessList'

function HeadlessSearch() {
    return (
        <div>
            <div className='px-4 pt-[148px] pb-[164px] max-lg:py-16 max-md:py-12 max-sm:py-10 '>
                <div className='container'>
                    <HeadlessList CommonText='Headless federated search' SectionList={SEARCH_LIST} btnText="get a demo" myImg="/assets/images/headless-search.webp" />
                </div>
                <div className='pt-[148px] max-lg:pt-16 max-md:pt-12 max-sm:pt-10'>
                    <div className='container'>
                        <HeadlessList CommonText='Data Security and Hosting' SectionList={DATA_SECURITY} btnText="get a demo" myImg="/assets/images/data-security.webp"  myClass='flex-row-reverse' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeadlessSearch