import React from 'react';

const OrderListItem = ({show, order, handleChange, handleClick}) => {
  const iconStyle = show ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' };
  return (
    <div className="order-table">
      <div className="show-order">
        <i className="fas fa-angle-right" onClick={handleChange} style={iconStyle} />
        <span>{order.order_id}</span>
      </div>
      <div className="date">{new Date(order.ordered_time).toDateString()}</div>
      {
        handleClick
        ? (
          <div className={order.order_status==='new' ? 'accept' : 'complete' }>
            <a
            className="status-btn"
            onClick={event => handleClick(event, order.order_id)}
            href="#">
              {order.order_status==='new' ? 'Accept' : 'Complete' }
            </a>
          </div>
        )
        : <div className={order.order_status}>{order.order_status}</div>
      }
    </div>
  );
};

export default OrderListItem; 
