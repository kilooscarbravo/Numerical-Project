import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-6 py-1 border-2 border-white bg-[#fca4c4] hover:text-[#ab2e2e] transition-all rounded-full'>
            {props.title}
        </button>
    </div>
  )
}

export default Button