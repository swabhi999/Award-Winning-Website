import React from 'react'

const Button = ({title,leftIcon,rightIcon,containerClass,id}) => {
  return (
    <div>
       <button id={id} className={`group relative z-10 flex items-center gap-1 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 py-3 px-7 text-black ${containerClass}`}>
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        <span className='relative inline-flex overflow-hidden 
        font-general text-xs uppercase'>
            {title}
        </span>
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
       </button> 

    </div>
  )
}

export default Button