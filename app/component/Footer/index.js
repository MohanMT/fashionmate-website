import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="p-6 dark:bg-[#141842] dark:text-white bg-[#141842] bg-cover bg-center">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 text-white text-left">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-[14px]">Company Info</h2>
            <div className="flex flex-col space-y-2 text-[12px]">
              <a rel="noopener noreferrer" href="#">About Us</a>
              <a rel="noopener noreferrer" href="#">Carrier Info</a>
              <a rel="noopener noreferrer" href="#">We are Hiring</a>
              <a rel="noopener noreferrer" href="#">Blog</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-[14px]">Legal</h2>
            <div className="flex flex-col space-y-2 text-[12px]">
              <a rel="noopener noreferrer" href="#">Legal</a>
              <a rel="noopener noreferrer" href="#">About Us</a>
              <a rel="noopener noreferrer" href="#">We Are Hiring</a>
              <a rel="noopener noreferrer" href="#">Dark Mode</a>
              <a rel="noopener noreferrer" href="#">Blog</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-[14px]">Features</h2>
            <div className="flex flex-col space-y-2 text-[12px]">
              <a rel="noopener noreferrer" href="#">Business Marketing</a>
              <a rel="noopener noreferrer" href="#">User Analysis</a>
              <a rel="noopener noreferrer" href="#">Live Chat</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-[14px]">Community</h2>
            <div className="flex flex-col space-y-2 text-[12px]">
              <a rel="noopener noreferrer" href="#">GitHub</a>
              <a rel="noopener noreferrer" href="#">Discord</a>
              <a rel="noopener noreferrer" href="#">Twitter</a>
              <a rel="noopener noreferrer" href="#">YouTube</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="flex items-center justify-center px-6 pt-12 text-xs text-center">
          <span className="text-white">© Copyright 1986. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
