import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import * as orderActions from '../../actions/order';
import * as menuActions from '../../actions/menu';
import Footer from '../UI/Footer';
import MainLayout from './MainLayout';
import getSection from '../../utils/getSection';


class HomePage  extends Component {
  static categories = ['Meals', 'Drinks', 'Desserts', 'My Cart', 'My Orders'];

  state = {
    activeSection: HomePage.categories[0],
  };

  componentDidMount() {
    this.props.menuActions.getMenu(this.props.alert);
    this.props.orderActions.getOrders(this.props.user.userId, this.props.alert);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ activeSection: event.target.innerText });
  };

  render() {
    const index = HomePage.categories.indexOf(this.state.activeSection);
    return (
      <div>
        <MainLayout
          categories={HomePage.categories}
          activeCategory={this.state.activeSection}
          user={this.props.user}
          handleClick={this.handleClick}
        >
          {
            this.props.menu.length
            ? getSection(index, this.props.menu, this.props.cart, this.props.orders)
            : (
            <Loader
              type="Rings"
              color="#00BFFF"
              height="100vh"
              width="100%"
            />
            )
          }
        </MainLayout>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    menu: state.menu,
    orders: state.orders,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderActions: bindActionCreators(orderActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(HomePage));
