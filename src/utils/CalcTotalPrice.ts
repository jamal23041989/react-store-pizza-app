import { CartItem } from './../redux/slices/Cart/types';

export const CalcTotalPrice = (items: CartItem[]) => {
    return items.reduce((item, acc) => acc.price * acc.count + item, 0);
};
