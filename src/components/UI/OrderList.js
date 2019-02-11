import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import Order from './Order';
import * as orderActions from '../../actions/order';

export class OrderList extends Component {
  deleteOrder = (event, orderId) => {
    event.preventDefault();
    this.props.orderActions.deleteOrder(orderId, this.props.alert);
  };

  render() {
    return (
      <div className="section-orders">
        <div className="head">
          <div>Order</div>
          <div>Time</div>
          <div>Status</div>
        </div>
        <ul>
          {
            this.props.orderList.map(order => (
            <Order
              key={order.order_id}
              order={order}
              deleteOrder={this.deleteOrder}
              />)
            )
          }
        </ul>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    orderActions: bindActionCreators(orderActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(withAlert(OrderList));
