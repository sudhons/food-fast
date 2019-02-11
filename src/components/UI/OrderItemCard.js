import React from 'react';

const OrderItemCard = ({orderItem, removeFromCart, changeQuantity}) => {
  return (
    <div className="order-items">
        <div>
          <img src={orderItem.image} alt="food item picture" />
          <a href="#"><i className="fas fa-trash delete delete-cart-item" onClick={(event) => removeFromCart(event, orderItem.menu_id)}></i></a>
        </div>
        <div>
          <div className="my-order-props">
            <label htmlFor="">Quantity: </label>
            <input
              className="qty"
              type="number"
              min="1"
              step="1"
              value={orderItem.quantity}
              onChange={event => changeQuantity(event, orderItem.menu_id)} />
          </div>
          <div className="my-order-props">
            <div>Unit Price: </div>
            <div className="price">₦{orderItem.price}</div>
          </div>
          <div className="my-order-props">
            <div>Total: </div>
            <div className="price">₦{orderItem.price * orderItem.quantity}</div>
          </div>
        </div>
      </div>
  );
};

export default OrderItemCard;
