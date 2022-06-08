import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper${isSidebarOpen ? ' show' : ''}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            return (
              <article key={index}>
                <h4>{item.page}</h4>
                <div className='sidebar-sublinks'>
                  {item.links.map((link, index) => {
                    return (
                      <a href={link.url} key={index}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
