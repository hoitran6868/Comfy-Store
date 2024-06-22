import { formatPrice, getElement } from '../utils.js';
import { openCart } from './toggleCart.js';

const addToCartDOM = (id) => {
  console.log(id);
  openCart();
};

export default addToCartDOM;
