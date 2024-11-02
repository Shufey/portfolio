import React from 'react';

const Education = () => {

  return (
    

    <div className=' text-white flex flex-col w-full md:h-screen md:mt-96'>
    <h5 className="text-2xl font-semibold mb-14 md:ml-0 ml-8">Education</h5>
    <div className='w-[90%] md:w-full min-h-[12rem] rounded-[0.65rem] border border-[#6751b9] bg-[rgba(22,17,47,0.398)] backdrop-blur-[1rem] justify-center items-center mx-6 md:mx-0'>
        <h3 className='text-[1.2rem] font-medium py-[0.8rem] px-[2rem] bg-gradient-to-b from-[#ac96ff] to-[#7c5fe6] bg-clip-text text-transparent border-b-[1.5px]  border-[#6751b9]'>Bachelor of Engineering (Computer Science)</h3>
        <p className='text-3xl font-semibold text-white px-[2rem] p-2'>Neil Gogte Institute of Technology</p>
        <p className="text-lg text-white italic px-[2rem] p-2">2019 - 2023</p>
        

        <h3 className='text-[1.2rem] font-medium py-[0.8rem] px-[2rem] bg-gradient-to-b from-[#ac96ff] to-[#7c5fe6] bg-clip-text text-transparent border-b-[1.5px] border-t-[1.5px] border-[#6751b9]'>Intermediate (MPC)</h3>
        <p className='text-3xl font-semibold text-white px-[2rem] p-2'>Mother Junior College</p>
        <p className="text-lg text-white italic px-[2rem] p-2">2017 - 2019</p>
       

        <h3 className='text-[1.2rem] font-medium py-[0.8rem] px-[2rem] bg-gradient-to-b from-[#ac96ff] to-[#7c5fe6] bg-clip-text text-transparent border-b-[1.5px] border-t-[1.5px] border-[#6751b9]'>Secondary School of Certificate (10th Std.) </h3>
        <p className='text-3xl font-semibold text-white px-[2rem] p-2'>Ahad High School</p>
        <p className="text-lg text-white italic px-[2rem] p-2">2009 - 2017</p>
       
        
    </div>
    
    
    </div>
  );
};

export default Education;
