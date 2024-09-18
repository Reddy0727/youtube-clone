import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import icon from '../assets/icon.png';
import VideocamIcon from '@mui/icons-material/Videocam';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { setToggle } from '../redux/slices/toggleSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch()
  const handleDispatch = () => dispatch(setToggle())
  return (
    <header className='flex justify-between items-center py-4  md:px-14 px-4  opacity-95 h-[10vh]' >
     <div className='flex justify-between items-center gap-2 cursor-pointer'>
       <MenuIcon  onClick={handleDispatch} />
       <Link to='/'> <img src={icon} alt="icon" width={40} /></Link>
     </div>
     <div className=' md:w-1/3 w-1/4'>
      <SearchBar />
     </div>
     <div className='flex gap-4 items-center cursor-pointer'>
       <AppsIcon />
       <NotificationsNoneIcon />
       <AccountCircleIcon />
     </div>
    </header>
  )
}

export default Navbar
