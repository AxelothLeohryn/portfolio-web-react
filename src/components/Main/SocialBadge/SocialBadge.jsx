import React from 'react'

const SocialBadge = ({text, logo, link}) => {
  return (
    <a className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base bg-white/5 hover:scale-105 hover:bg-cyan-600 transition' href={link} target=' _blank' rel='noopener noreferer'>
        <img src={logo} alt={text} className='size-4 md:size-6' />
        {text}
    </a>
  )
}

export default SocialBadge