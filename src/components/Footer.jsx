import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
        <div className="bg-off-blue py-6 px-4">
        <div className="container flex items-center justify-between max-md:flex-col max-sm:justify-center">
          <p className="text-xs font-normal text-dark-purple leading-[28px] max-sm:text-center">
          © {currentYear} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland
          </p>
          <p className="text-xs font-normal text-dark-purple leading-[28px]">info@keysemantics.ch</p>
        </div>
      </div>
  )
}

export default Footer