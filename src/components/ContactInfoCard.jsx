import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactInfoCard = ({icon , text}) => {
  return (
    <div className='contact-details-card flex flex-col justify-center items-center bg-[#130f2a] rounded-lg border-[1.5px] border-[#6751b9] p-6 mb-8'>
        <div className='icon w-16 h-16 flex items-center justify-center rounded-lg bg-[#3d3072] mb-3'>
           <FontAwesomeIcon icon={icon} className='text-3xl font-semibold'/>
        </div>

        <p className='text-[0.9rem] font-normal'>{text}</p>
    </div>
  )
}

export default ContactInfoCard