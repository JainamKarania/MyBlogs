import React from 'react'
import { Button, Navbar , TextInput } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import {Link , useLocation} from 'react-router-dom'
const Nav = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to= '/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-violet-700 via-violet-500 to-blue-400 rounded-xl text-white'>Jainam's</span>
        Blogs
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-8 lg:hidden' color="gray" pill>
        <AiOutlineSearch/>
        </Button>
      <div className='flex gap-4 md:order-2'>
        <Button className='w-12 h-8 sm:inline' color='gray' pill>
           <FaMoon/> 
        </Button> 
        <Link to='/login'>
          <Button gradientDuoTone='greenToBlue'>
            Login
          </Button>   
          
        </Link>
        <Navbar.Toggle/>  
      </div> 
      <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
                <Link to='/'>
                   Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
                <Link to='/about'>
                   About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/projects"} as={'div'}>
                <Link to='/projects'>
                   Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse> 
    </Navbar>
  )
}

export default Nav