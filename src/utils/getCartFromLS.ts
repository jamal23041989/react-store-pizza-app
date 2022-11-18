import { CartItem } from '../redux/slices/Cart/types';
import { CalcTotalPrice } from './CalcTotalPrice';

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items);

    return { items: items as CartItem[], totalPrice };
};
