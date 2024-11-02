import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = ({title , icon , isActive , onClick}) => {
  return (
    <div className={`skills-card  relative cursor-pointer transition-all duration-300 ease-in-out 
                rounded-[0.65rem] border border-[#6751b9] 
                p-[2.5rem] text-center 
                bg-[rgba(22,17,47,0.398)] 
                backdrop-blur-[1rem] 
                hover:bg-[linear-gradient(180deg,#aa94fe_0%,#7c5fe6_100%)] 
                active:bg-[linear-gradient(180deg,#aa94fe_0%,#7c5fe6_100%)] ${isActive ? "active" : ""}`} onClick={() => onClick()}>
        <div className='skill-Icon w-16 h-16 flex justify-center items-center bg-[#2a2252] border-[1.5px] border-[#6852ba] rounded-xl absolute top-[-1rem] left-[-1rem]'>
            <FontAwesomeIcon icon={icon}  className='text-2xl text-white'/>
        </div>

        <span className=' text-sm md:text-xl font-medium'>{title}</span>
    </div>
  )
}

export default SkillCard