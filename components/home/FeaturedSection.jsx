"use client"

 import Pg1 from '../../public/enroll-icon.png'
 import Pg2 from '../../public/faculty-icon.png'
 import Pg3 from '../../public/franchise-icon.png'
 import Pg4 from '../../public/ui-ux-icon.png'
import Image from 'next/image'
const FeaturedSection = () => {

  return (
    <div className={`py-20`}>
    <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
     <div className='lg:w-[40%] w-full flex flex-col lg:justify-start lg:items-start justify-center items-center'>
      <h3 className='text-[#4a1e75] font-Jost font-[600] text-[36px]'>Welcome to Your Chanakya</h3>
      <p className='text-[16px] font-[400px] font-Poppins text-[#4a1e75] pt-5'>Your Chanakya is a <span className='font-bold'>Medical Education Consultancy</span> providing a professional platform for students seeking career assistance, guidance and support. We assist students seeking admission to Medical PG courses and Medical UG courses like <span className='font-bold'>MBBS, MS, MD, BDS, MDS</span> etc. in India and Abroad. </p>
      <div className='mt-9'>
        <button className='text-[18px] font-Jost tracking-wide rounded-ss-[20px] rounded-br-[20px] font-bold text-[#4a1e75] border-[1px] border-[#4a1e75] py-[20px] px-[40px] hover:bg-[#4a1e75] hover:text-white shadow-xl'>Learn More</button>
      </div>
     </div>
     <div className='lg:w-[60%] w-full flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center'>
      <div className='lg:w-[50%] w-full bg-[#ffda00] flex flex-col justify-center items-center gap-5  rounded-tr-[40px]'>
<div className='pt-10'>
  <Image src={Pg1} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#4a1e75] text-[18px] font-Poppins'>NEET PG Counselling</p>
<div>
  <button className='px-5 py-2 rounded-lg bg-[#4a1e75] text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
<div className='flex flex-col gap-5 justify-center items-center bg-[#4a1e75] w-full  rounded-tr-[40px]'>
<div className='pt-10'>
  <Image src={Pg2} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-white text-[18px] font-Poppins'>Overseas Medical Education</p>
<div className='pb-6'>
  <button className='px-5 py-2 rounded-lg bg-[#ffda00]  text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
</div>
      </div>
      <div className='lg:w-[50%]   w-full  bg-[#4a1e75] flex flex-col justify-center items-center gap-5  rounded-tl-[40px]'>
      <div className='pt-10'>
  <Image src={Pg3} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#FFF] text-[18px] font-Poppins'>NEET UG Counselling</p>
<div>
  <button className='px-5 py-2 rounded-lg  bg-[#ffda00] text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
<div className='flex flex-col gap-5 justify-center items-center bg-[#ffda00] w-full  rounded-tl-[40px]'>
<div className='pt-10'>
  <Image src={Pg4} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#4a1e75] text-[18px] font-Poppins'>Enroll With Us</p>
<div className='pb-6'>
  <button className='px-5 py-2 rounded-lg bg-[#4a1e75]  text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
</div>
      </div>
     </div>
       </div>
    </div>
    </div>
  )
}

export default FeaturedSection
