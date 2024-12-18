
import React, { useState } from 'react'

const CustomInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, company, phone });
  };

  return (
    <div className=" px-4 bg-footer-bg bg-cen bg-cover bg-no-repeat py-24 max-lg:py-16 max-md:py-12 max-sm:py-10">
      <div className="container relative">
        <p className="absolute top-0 left-0 max-sm:hidden">
        </p>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-white font-bold text-custom-sm text-center leading-[72px] max-md:text-2xl max-sm:text-2xl">
            How does KeySemantics work?
          </h2>
          <p className="font-normal text-base text-center text-white leading-[28px] pt-2 relative z-20">
            Request a demo for your team and let us show you how KeySemantics can help your company
          </p>
          <form
            className="flex items-center justify-center flex-col mt-[64px] max-xl:mt-11 max-lg:mt-8 max-md:mt-5"
            onSubmit={handleSubmit}
          >
            <input required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-off-purple w-[320px] mx-auto py-4 max-sm:py-3 px-5 rounded-full outline-none placeholder:text-dark-purple text-white font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px]"
              placeholder="Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-off-purple w-[320px] mx-auto py-4 max-sm:py-3 px-5 rounded-full outline-none placeholder:text-dark-purple text-white font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Email"
              required
            />
            <input required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              className="bg-off-purple w-[320px] mx-auto py-4 max-sm:py-3 px-5 rounded-full outline-none placeholder:text-dark-purple text-white font-normal placeholder:font-normal text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Company"
            />
            <input required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="bg-off-purple w-[320px] mx-auto py-4 max-sm:py-3 px-5 rounded-full outline-none placeholder:text-dark-purple text-white font-normal placeholder:font-normal  text-sm placeholder:text-sm leading-[20px] mt-2"
              placeholder="Phone (optional)"
            />
            <p className="text-[10px] font-normal leading-[14px] text-center text-dark-purple pt-4 pb-6">
              By submitting my contact information I agree to the KeySemantics Privacy Policy
            </p>
            <button
              type="submit"
              className="bg-off-sky hover:bg-white hover:text-off-sky transition-all ease-linear duration-200 hover:bg-darkBlue border-darkSkyBLue rounded-full bg-darkSkyBLue text-white py-4 px-[32px] font-medium text-sm leading-[20px] min-w-[180px]"
            >
              Request a demo
            </button>
          </form>
        </div>
        <p className="absolute bottom-0 right-0 max-sm:hidden">
        </p>
      </div>
    </div>
  );
};

export default CustomInput;
