import React,{useState} from 'react'
import {HiMenuAlt2} from 'react-icons/hi'
import {AiOutlineCompass,AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {ImEqualizer} from 'react-icons/im'
import {BsToggle2Off} from 'react-icons/bs'

function Navbar() {
    const [browse,setBrowse]=useState(false)
  return (
    <div className='flex items-center space-x-8 py-4 px-5 justify-between border shadow-sm'>
        <div className=' relative flex items-center space-x-5'>
            <HiMenuAlt2 className='text-2xl cursor-pointer'/>
            <div className='flex items-center space-x-2'>
                <img src="/img/cipherIcon.png" alt="ciphericon" className='w-6 h-6 cursor-pointer'/>
                <span className='text-2xl font-semibold cursor-pointer'>CipherSchools</span>
            </div>
            <div onClick={()=>setBrowse(!browse)} className=' flex items-center space-x-2 cursor-pointer'>
                <AiOutlineCompass className=''/>
                <span>Browse</span>
                <IoIosArrowDown />
            </div>
            {
                browse &&
                <div className='absolute  top-14 bg-gray-100 shadow-md py-2 px-2 right-0 flex flex-col space-y-2'>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>App Development</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Web Development</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Game Development</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Data Structures</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Programming</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Machine Learning</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Data Science</span>
                    <span className='hover:bg-blue-300 px-2 cursor-pointer'>Others</span>
                </div>
            }
            
        </div>
        <div className='items-center flex space-x-8'>
            <div className='flex items-center space-x-4 px-4 bg-blue-100 rounded-full py-2'>
                <AiOutlineSearch className='cursor-pointer'/>
                <input type='text' className='bg-blue-100 outline-none' placeholder='Search and Learn'/>
                <ImEqualizer className='cursor-pointer'/>
            </div>
            <div className='relative cursor-pointer'>
                <AiOutlineBell className='text-2xl'/>
                <span className='absolute -top-2 font-bold -right-3 text-white rounded-sm text-sm px-1 bg-orange-500'>0</span>
            </div>
            <FaUserCircle className='text-orange-500 text-2xl cursor-pointer'/>
            <div className='flex items-center space-x-1 cursor-pointer'>
                <img src="/img/cipherIcon.png" alt="ciphericon" className='w-4 h-4 cursor-pointer' />
                <span className='text-orange-500 font-semibold'>0</span>
            </div>
            <BsToggle2Off  className='text-4xl cursor-pointer text-orange-500'/>
        </div>
</div>
  )
}

export default Navbar