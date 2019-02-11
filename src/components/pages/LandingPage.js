import React, { Component } from 'react';
import SignUpForm from '../UI/SignUpForm';
import LoginForm from '../UI/LoginForm';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Nav from '../UI/Nav';

class LandingPage  extends Component {
  state = { isANewUser: true };

  changeForm = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ isANewUser: !prevState.isANewUser }));
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <main id="main">
          <div className="container">
            <div id="content">
              <div id="intro">
                <p>Have our delicious and nutritious meals delivered at your door step</p>
                <p>You can't get a better taste else where!</p>
              </div>
              {
                this.state.isANewUser
                ? <SignUpForm changeForm={this.changeForm} />
                : <LoginForm changeForm={this.changeForm} />
              }
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default LandingPage;
