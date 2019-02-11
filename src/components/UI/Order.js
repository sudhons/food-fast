import React, { Component } from 'react';
import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';

class Order extends Component {
  state = {  showDetails: false };

  handleChange = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { order, deleteOrder, changeStatus } = this.props;
    const { showDetails } = this.state;
    return (
      showDetails
      ? <li>
          <OrderSummary show={showDetails} order={order} handleChange={this.handleChange} handleClick={changeStatus} />
          <OrderDetails order={order} deleteOrder={deleteOrder} />
        </li>
      : <li>
          <OrderSummary show={showDetails} order={order} handleChange={this.handleChange} handleClick={changeStatus} />
        </li>
    );
  }
}

export default Order;
