import { getElement } from '../utils.js';

const toggleCart = getElement('.toggle-cart');
const closeCart = getElement('.cart-close');
const cart = getElement('.cart-overlay');

 toggleCart.addEventListener('click', () => {
   cart.classList.add('show');
 });
 closeCart.addEventListener('click', () => {
   cart.classList.remove('show');
 });

export const openCart = () => {
              // cart.classList.add('show');
};
