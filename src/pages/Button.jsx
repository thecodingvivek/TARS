import React from 'react'

const Button = () => {
  return (
    <>
        <div onClick={()=>location.reload()} className='absolute top-[10px] right-[10px] w-[200px] h-[40px] bg-black flex rounded-full items-center justify-center cursor-pointer'><span className='text-white text-[12px] font-semibold'>Back</span></div>
    </>

  );
}

export default Button