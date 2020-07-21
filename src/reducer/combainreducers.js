import { combineReducers } from 'redux';
import { cart } from './cart';

export const allreduces = combineReducers({
    Cart: cart
});