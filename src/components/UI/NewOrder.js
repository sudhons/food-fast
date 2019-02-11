import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OrderItemCard from './OrderItemCard';
import * as cartActions from '../../actions/cart';

export class NewOrder extends Component {
  changeQuantity = (event, menuId) => {
    const value = Number(event.target.value);
    this.props.cartActions.changeQuantity(menuId, value);
  };

  removeFromCart = (event, menuId) => {
    event.preventDefault();
    this.props.cartActions.removeFromCart(menuId);
  };

  render() {
    return (
      <div className='meal-cat'>
        {
          this.props.cart.map(orderItem => <OrderItemCard
            key={orderItem.menu_id}
            orderItem={orderItem}
            removeFromCart={this.removeFromCart}
            changeQuantity={this.changeQuantity} />
          )
        }
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(NewOrder);
