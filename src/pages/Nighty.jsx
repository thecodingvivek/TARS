import React from 'react'
import Button from './Button'

const Nighty = () => {
  return (
    <div className='relative w-screen h-screen bg-[#f1f1f1] flex items-center justify-center'>
        <Button />
        <div className='mainWrapper_1990 w-[700px] h-[400px] p-1'>
            <div className="minWrapper_1990 w-full h-full flex p-2 gap-[8px]">
                <div className="imgwrapper_1990 w-[40%] h-full"></div>
                <div className="contentwrapper w-[60%] h-full flex flex-col gap-[4px] py-[20px]">
                        <span className='head1990 text-[42px] font-semibold text-black'>Apple <br /> Computer.Co</span>
                        <p className='subhead1990 text-[12px] font-semibold text-black'>© 1990 Apple Computer, Inc. All rights reserved. Apple, the Apple logo, and Macintosh are trademarks of Apple Computer, Inc., registered in the U.S. and other countries. This product, including its software, documentation, and design, is protected under U.S. and international copyright laws. No part of this publication may be copied, reproduced.</p>
                        <input type="button" value="more" className='bg-[#ccc] w-[80px] text-center text-[#000] rounded text-[12px] border border-black outline mt-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nighty