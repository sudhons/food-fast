import React from 'react';

const OrderDeliveryInfo = ({order}) => {
  return (
    <table className="order-data">
      <tbody>
        <tr>
          <th className="order-props">Order ID:</th>
          <td>
            {order.order_id}
          </td>
        </tr>
        <tr>
          <th className="order-props">Status:</th>
          <td className={order.order_status}>
            {order.order_status}
          </td>
        </tr>
        <tr>
          <th className="order-props">Customer:</th>
          <td>
            {order.customer}
          </td>
        </tr>
        <tr>
          <th className="order-props">Recipient Name:</th>
          <td>
            {order.recipient_name}
          </td>
        </tr>
        <tr>
          <th className="order-props">Recipient Address:</th>
          <td>
            {order.recipient_address}
          </td>
        </tr>
        <tr>
          <th className="order-props">Recipient Phone Number:</th>
          <td>
            {order.recipient_phone}
          </td>
        </tr>
        <tr>
          <th className="order-props">Date:</th>
          <td>
            {new Date(order.ordered_time).toDateString()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDeliveryInfo; 
