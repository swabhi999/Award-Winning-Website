import React from 'react'

const Button = ({title,leftIcon,rightIcon,containerClass,id}) => {
  return (
    <div>
       <button id={id} className={`group realtive z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 py-3 px-7 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden 
        font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        

       </button> 

    </div>
  )
}

export default Button