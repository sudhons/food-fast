import React from 'react';
import Menu from '../components/UI/Menu';
import NewOrder from '../components/UI/NewOrder';
import OrderDelieveryForm from '../components/UI/OrderDeliveryForm';
import OrderList from '../components/UI/OrderList';

export const getTotalPrice = orderItems => orderItems.reduce((prev, value) => (prev + value.price * value.quantity), 0);

export const isInCart = (cart, item) => cart.some(cartItem => cartItem.mealId === item.menu_id);

const getSection = (activeIndex, menu, cart, orders) => {

  if (activeIndex === 0) {
    const mealList = menu.filter(menuItem => menuItem.menu_category === 'meal');
    mealList.forEach(mealItem => mealItem.isInCart = isInCart(cart, mealItem));
    return (
      <Menu menu={mealList} />
    );
  }
  if (activeIndex === 1) {
    const drinkList = menu.filter(menuItem => menuItem.menu_category === 'drink');
    drinkList.forEach(mealItem => mealItem.isInCart = isInCart(cart, mealItem));
    return (
      <Menu menu={drinkList} />
    )
  }
  if (activeIndex === 2) {
    const dessertList = menu.filter(menuItem => menuItem.menu_category === 'dessert');
    dessertList.forEach(mealItem => mealItem.isInCart = isInCart(cart, mealItem));
    return (
      <Menu menu={dessertList} />
    )
  } 
  if (activeIndex === 3) {
    let cartContent = cart.map(item => {
      const cartItem = menu.find(menuItem => menuItem.menu_id === item.mealId);
      return Object.assign({}, cartItem, { quantity: item.quantity });
    });
    return (
      cartContent.length > 0
      ? <div>
          <NewOrder cart={cartContent}/>
          <div id="total-order">Total Amount: ₦{getTotalPrice(cartContent)}</div>
          <hr />
          <OrderDelieveryForm/>
        </div>
      : <div id="total-order">Cart is Empty</div>
    );
  }
  
  return (
    orders.length > 0
    ? <OrderList orderList={orders} />
    : <div id="total-order">You have not made any order</div>
  );
}

export default getSection;
