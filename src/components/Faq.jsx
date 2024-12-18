import React, { useState, useRef } from 'react';
import Heading from '../common/Heading';
import CustomButtons from '../common/CustomButtons';
import { FAQ_LIST, FAQ_TEXT } from '../utils/helper';
import CustomList from '../common/CustomList';
import CustomFaqDescription from '../common/CustomFaqDescription';

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="px-4">
            <div className="container">
                <div className="flex gap-12 max-xl:gap-9 max-md:gap-6 max-xl:flex-wrap max-xl:justify-center">
                    <div className="max-w-[568px] max-xl:w-full relative">
                        <img
                            src="./assets/images/faq-sticky-image.webp"
                            alt="working-girl"
                            className="w-full max-w-[600px] max-xl:mx-auto max-sm:max-w-none sticky top-0"
                        />
                    </div>

                    <div className="w-6/12 max-xl:w-full">
                        <div className='pl-4'>
                            <Heading heading="Key Q&A" />
                        </div>
                        <div className="pl-4 max-md:pl-2 flex flex-col gap-2">
                            {FAQ_TEXT.map((item, i) => (
                                <div key={i}>
                                    <CustomList CustomList={item} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            {FAQ_LIST.map((obj, i) => (
                                <div key={i} className="border-t border-solid border-[#C9CAD4] p-4">
                                    <div
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => toggleFAQ(i)}>
                                        <h3 className="text-lg text-darkBlue font-medium leading-[28px]">
                                            {obj.title}
                                        </h3>
                                        <div>
                                            <div
                                                className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : 'rotate-0'}`}>
                                                {obj.arrowImg}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        ref={(el) => (contentRefs.current[i] = el)}
                                        className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                        style={{
                                            maxHeight:
                                                expandedIndex === i
                                                    ? contentRefs.current[i]?.scrollHeight + 'px'
                                                    : '0',
                                            opacity: expandedIndex === i ? 1 : 0,
                                        }}>
                                        <div className="mt-4">
                                            <CustomFaqDescription FaqText={obj.descriptionOne} />
                                            <CustomFaqDescription FaqText={obj.descriptionTwo} />
                                            <div className="flex items-center justify-center gap-4 my-4 max-sm:flex-col">
                                                <img
                                                    className="max-w-[268px]"
                                                    src={obj.imgOne}
                                                    alt="key-semantics-img"/>
                                                <img
                                                    className="max-w-[268px]"
                                                    src={obj.imgTwo}
                                                    alt="key-semantics-img"/>
                                            </div>
                                            <CustomFaqDescription FaqText={obj.descriptionThree} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-[116px] mt-6 max-lg:mt-5 max-md:mt-4 max-sm:mt-3">
                            <CustomButtons customButtons="Get a demo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
