import React from 'react';

const MenuItem = ({menuItemDetails, addToCart}) => {
  return (
    <div className="items">
      <img src={menuItemDetails.image} alt="meal picture" />
      <h3>{menuItemDetails.title}</h3>
      <h3>Price: ₦{menuItemDetails.price}</h3>
      <button
        className={menuItemDetails.isInCart ? "item-btn disabled" : "item-btn"}
        onClick={() => addToCart(menuItemDetails.menu_id)}>
          {
            menuItemDetails.isInCart
              ? "added to cart"
              : "add to cart"
          }
      </button>
    </div>
  );
};

export default MenuItem;
