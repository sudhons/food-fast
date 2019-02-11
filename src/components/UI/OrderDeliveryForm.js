import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/order';
import { validateRecipientDetails } from '../../utils/validators';

export class OrderDeliveryForm extends Component {
  state = {
    recipientName: '',
    recipientAddress: '',
    recipientPhone: '',
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const validationResult = validateRecipientDetails(this.state);
    if (validationResult.isValid) {
      this.props.orderActions.makeOrder(
        {...this.state, order: [...this.props.cart]},
      this.props.alert);
    } else {
      this.props.alert.error(validationResult.error);
    }
  };

  render() {
    return (
      <form id="recipient" action="" className="form" onSubmit={this.handleSubmit}>
        <h1 className="form-heading">Delivery Details</h1>
        <div>
          <i className="fas fa-user"></i>
          <input
          className="form-input"
          name="recipientName"
          id="name"
          type="text"
          placeholder="Recipient Name"
          onChange={this.handleChange}
          value={this.state.recipientName}
          required />
        </div>
        <div>
          <i className="fas fa-address-card"></i>
          <input
          className="form-input"
          name="recipientAddress"
          id="address"
          type="text"
          placeholder="Recipient Address"
          onChange={this.handleChange}
          value={this.state.recipientAddress}
          required />
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <input
          className="form-input"
          name="recipientPhone"
          id="phone"
          type="number"
          placeholder="Recipient Phone Number"
          onChange={this.handleChange}
          value={this.state.recipientPhone}
          required />
        </div>
        <button id="btn-order" type="submit">Place Order</button>
      </form>
    );
  }
}

export const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    orderActions: bindActionCreators(orderActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(OrderDeliveryForm));
