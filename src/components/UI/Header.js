import React from 'react';
import { connect } from 'react-redux';

export const Header = ({toggleNavBar, user}) => {
  return (
    <header id="main-header">
      <div id="brand">
        <h1 id="brand-name"><a href="/home">Fast Food Fast</a></h1>
      </div>
      <div id="menu">
        {
          user.userId
          ? (
            <a href="#" onClick={toggleNavBar}>
              <i className="fas fa-bars"></i>
            </a>
          )
          : ''
        }
      </div>
    </header>
  );
};

export const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);
