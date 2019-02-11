import React from 'react';
import SideBarItem from '../UI/SideBarItem';

const SideBar = ({style, items, activeItem, handleClick, handleClose }) => {
  return (
    <nav id="menu-bar" style={style}>
      <a id="close" href="#" onClick={handleClose}>&times;</a>
      <ul>
        {
          items.map(item => (
            <SideBarItem
              key={item}
              name={item}
              isActive={activeItem === item}
              onClick={handleClick}/>
          ))
        }
      </ul>
    </nav>
  );
};

export default SideBar;
