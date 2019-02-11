import React from 'react';
import OrderItemsInfo from '../UI/OrderItemsInfo';
import OrderDeliveryInfo from '../UI/OrderDeliveryInfo';

const OrderDetail = ({order, deleteOrder}) => {
  return (
    <div className="order-detail">
      <OrderDeliveryInfo order={order} />
      <div style={{ position: 'relative' }}>
        <OrderItemsInfo items={order.items} totalAmount={order.total_amount}/>
        {
          deleteOrder
          ? (
            <a href="#">
              <i className="fas fa-trash delete delete-order" onClick={(event) => deleteOrder(event, order.order_id)}></i>
            </a>
          )
          : ''
        }
      </div>
    </div>
  );
};

export default OrderDetail; 
