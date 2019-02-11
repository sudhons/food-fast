import getSection, { getTotalPrice, isInCart } from './getSection';
import Menu from '../components/UI/Menu';

describe('getTotalPrice', () => {
  it('should return total price', () => {
    expect(getTotalPrice([{price: 200, quantity: 2}, {price: 500, quantity: 1}]))
    .toEqual(900);
  });

  it('should return true', () => {
    expect(isInCart([
      {mealId: 3, price: 200, quantity: 2},
      {mealId: 6, price: 500, quantity: 1}
    ], {menu_id: 6}))
    .toEqual(true);
  });

  it('should return getSection for meal category', () => {
    expect(getSection(0,
    [
      {menu_category: 'meal'},
      {menu_category: 'dessert'},
    ],
    [
      {mealId: 3, price: 200, quantity: 2},
      {mealId: 6, price: 500, quantity: 1}
    ]))
    .toBeDefined();
  });

  it('should return getSection for drinks category', () => {
    expect(getSection(1,
    [
      {menu_category: 'meal'},
      {menu_category: 'dessert'},
      {menu_category: 'drink'},
    ],
    [
      {mealId: 3, price: 200, quantity: 2},
      {mealId: 6, price: 500, quantity: 1}
    ]))
    .toBeDefined();
  });

  it('should return getSection for desserts category', () => {
    expect(getSection(2,
    [
      {menu_category: 'meal'},
      {menu_category: 'dessert'},
      {menu_category: 'drink'},
    ],
    [
      {mealId: 3, price: 200, quantity: 2},
      {mealId: 6, price: 500, quantity: 1}
    ]))
    .toBeDefined();
  });

  it('should return getSection for cart category', () => {
    expect(getSection(3,
    [
      {menu_category: 'meal', menu_id: 2},
      {menu_category: 'dessert', menu_id: 4},
      {menu_category: 'drink', menu_id: 1},
    ],
    [
      {mealId: 3, price: 200, quantity: 2},
      {mealId: 6, price: 500, quantity: 1}
    ]))
    .toBeDefined();
  });

  it('should return getSection for cart category when cart is empty', () => {
    expect(getSection(3,
    [
      {menu_category: 'meal', menu_id: 2},
      {menu_category: 'dessert', menu_id: 4},
      {menu_category: 'drink', menu_id: 1},
    ],
    []))
    .toBeDefined();
  });

  it('should return getSection for orders category ', () => {
    expect(getSection(4, null, null,
    [
      {menu_category: 'meal', menu_id: 2},
      {menu_category: 'dessert', menu_id: 4},
      {menu_category: 'drink', menu_id: 1},
    ]))
    .toBeDefined();
  });

  it('should return getSection for orders category when orders is empty', () => {
    expect(getSection(4, null, null,[])).toBeDefined();
  });
});
