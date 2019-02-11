import React, { Component } from 'react';
import SideBar from '../UI/SideBar';
import Header from '../UI/Header';
import Nav from '../UI/Nav';

class MainLayout extends Component {
  state = {
    sideBarStyle: { width: 0 },
    navBarStyle: { height: 0}
  };

  toggleSideBar = event => {
    event.preventDefault();
    this.setState(({sideBarStyle}) => ({
      sideBarStyle: {width: sideBarStyle.width ? 0 : '14rem'}
    }));
  };

  toggleNavBar = event => {
    event.preventDefault();
    this.setState(({navBarStyle}) => ({
      navBarStyle: {height: navBarStyle.height ? 0 : this.props.user.userRole==="admin" ? '6.4rem' : '3.22rem'}
    }));
  };

  render() {
    return (
      <div>
        <Header toggleNavBar={this.toggleNavBar}/>
        <Nav style={this.state.navBarStyle}/>
        <main id="home-content">
          <SideBar
            style={this.state.sideBarStyle}
            items={this.props.categories}
            activeItem={this.props.activeCategory}
            handleClick={this.props.handleClick}
            handleClose={this.toggleSideBar}
            />
          <div id="content-container">
            {
              this.props.children
            }
          </div>
          {
            !this.state.sideBarStyle.width
            ? <a href="#" onClick={this.toggleSideBar}><i className="fas fa-caret-square-down"></i></a>
            : ''
          }
        </main>
      </div>
    );
  }
};

export default MainLayout;
