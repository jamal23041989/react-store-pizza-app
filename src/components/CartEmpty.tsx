import { FC } from 'react';
import { Link } from 'react-router-dom';

const CartEmpty: FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                <span>😟</span>
                <br />
                Корзина пустая
            </h2>
            <p>
                Вероятнее всего вы не заказывали пиццу.
                <br /> Для того, чтобы заказать пиццу, перейди на главную страницу
            </p>
            <img src="../assests/img/empty-cart.png" alt="" />
            <Link to="/" className="button button-black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default CartEmpty;
