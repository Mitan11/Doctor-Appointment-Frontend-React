// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import assets from '../assets/assets'// Ensure this path is correct
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Website Logo'
      />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>HOME</li>
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>ALL DOCTORS</li>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>CONTACT</li>
        </NavLink>
      </ul>

      {/* Profile Dropdown or Login Button */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            {/* Profile Picture */}
            <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt='Profile' />
            {/* Dropdown Icon */}
            <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdown Icon' />
            {/* Dropdown Menu */}
            <div className='absolute top-full right-0 mt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='bg-stone-100 rounded shadow-lg flex flex-col gap-4 p-4'>
                <p
                  onClick={() => navigate('/my-profile')}
                  className='hover:text-black cursor-pointer transition-colors'
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className='hover:text-black cursor-pointer transition-colors'
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className='hover:text-black cursor-pointer transition-colors'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block transition-transform transform hover:scale-105'
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='w-6 md:hidden cursor-pointer'
          src={assets.menu_icon}
          alt='Menu Icon'
        />

        {/* Mobile Menu */}
        {showMenu ? <div
          className={`${showMenu ? 'fixed w-full h-screen' : 'h-0'
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt='Logo' />
            <img
              className='w-7 cursor-pointer'
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt='Close Menu Icon'
            />
          </div>

          <ul className='flex flex-col items-center gap-6 mt-8 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'>
              <li className='px-4 py-2 rounded inline-block hover:bg-gray-200'>Home</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
              <li className='px-4 py-2 rounded inline-block hover:bg-gray-200'>ALL DOCTORS</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'>
              <li className='px-4 py-2 rounded inline-block hover:bg-gray-200'>ABOUT</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'>
              <li className='px-4 py-2 rounded inline-block hover:bg-gray-200'>CONTACT</li>
            </NavLink>
          </ul>
        </div> : ''}

      </div>
    </div>

  );
};

export default Navbar;
