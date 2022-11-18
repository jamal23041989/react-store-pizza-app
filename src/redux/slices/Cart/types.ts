export type CartItem = {
    id: string;
    imageUrl: string;
    name: string;
    type: string;
    size: number;
    price: number;
    count: number;
};

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}
