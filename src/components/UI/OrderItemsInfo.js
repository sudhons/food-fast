import React from 'react';

const OrderItemsInfo = ({items, totalAmount}) => {
  return (
    <table className="order-amount">
      <thead>
        <tr>
          <th>Meal</th>
          <th>Qty</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.unit_price}</td>
              <td>{item.total}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="3">Order Total</th>
          <th>{totalAmount}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderItemsInfo; 
