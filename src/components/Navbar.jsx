import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Assets/logo.png'


/* eslint-disable */


function Navbar() {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const formatDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit;
  };


  const navigate = useNavigate();

    function handleLanding() {
        navigate('/landing');
    }

    function handleLogout() {
      navigate('/');
    }

  return (
      <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl">

          <div className="logo m-4">
            <img src={logo} onClick={handleLanding} className=' h-16 w-auto rounded' href="#" alt='logo' />
          </div>

          <div className="container-1 m-8">
            <p>User Name: ABC12345 - Backoffice</p>
          </div>

          <div className="container-2 m-8">
            <span>{currentTime}</span>
          </div>

          <div className='container-3 m-8 '>
            <button onClick={handleLogout} className='text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-2xl text-lg' type="submit">Log Out</button>
          </div>

    </nav>
  );
}

export default Navbar;
