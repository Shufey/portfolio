import React from 'react'
import './skillsInfoCard.css'

const SkillsInfoCard = ({heading , skills }) => {
  return (
    <div className='skills-info-card min-h-[23rem] rounded-[0.65rem] border border-[#6751b9] bg-[rgba(22,17,47,0.398)] backdrop-blur-[1rem]'>
        <h6 className='text-[1.2rem] font-medium py-[0.8rem] px-[2rem] bg-gradient-to-b from-[#ac96ff] to-[#7c5fe6] bg-clip-text text-transparent border-b-[1.5px] border-[#6751b9]'>{heading}</h6>

        <div className='skills-info-content p-8'>
            {
                skills.map((item,index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className='skill-info flex justify-between items-center'>
                            <p className='text-xl font-medium'>{item.skill}</p>
                            <p className='percentage text-[#dd8cfa]'>{item.percentage}</p>

                        </div>

                        <div className='skill-progress-bg w-[100%] h-2 bg-[#382e68] rounded-lg my-4 mx-0 overflow-hidden'>
                            <div className='skill-progress w-0 h-2 bg-gradient-to-r from-[#aa94fe] via-[#aa94fe] to-[#7d60e6] rounded-md transition-all duration-500 ease-in-out' style={{width: item.percentage}} />
                        </div>

                    </React.Fragment>
                ))
            }

        </div>
    </div>
  )
}

export default SkillsInfoCard