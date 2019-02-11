import React from 'react';

const SideBarItem = (props) => {
  return (
    <li className="menu-category">
      <a className="menu-category-link" id={props.isActive ? "active": ""} onClick={props.onClick} href="#">{props.name}</a>
    </li>
  );
};

export default SideBarItem;
