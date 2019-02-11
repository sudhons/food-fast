import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuItem from '../UI/MenuItem';
import * as cartActions from '../../actions/cart';

export class Menu extends Component {
  addMenuToCart = (menuId) => {
    this.props.cartActions.addToCart(menuId);
  };

  render() {
    return (
      <div className="meal-cat">
        {
          this.props.menu.map(menuItemDetails => (
            <MenuItem
              key={menuItemDetails.menu_id}
              menuItemDetails={menuItemDetails}
              addToCart={this.addMenuToCart} />
          ))
        }
      </div>
    );
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Menu);

