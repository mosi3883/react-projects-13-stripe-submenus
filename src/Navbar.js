import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Navbar = () => {
  const { openSidebar, oepnSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    console.log('hello');
    oepnSubmenu();
  };

  const hideSubmenu = (e) => {
    console.log('hello');
    closeSubmenu();
  };
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button
              className='link-btn'
              onMouseEnter={displaySubmenu}
              onMouseLeave={hideSubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseEnter={displaySubmenu}
              onMouseLeave={hideSubmenu}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseEnter={displaySubmenu}
              onMouseLeave={hideSubmenu}
            >
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
