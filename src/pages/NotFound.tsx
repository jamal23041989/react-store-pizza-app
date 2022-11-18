import { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    return (
        <>
            <h1 className={styles.root}>
                <span>😟</span>
                <br />
                Корзина пустая
            </h1>
            <p className={styles.description}>
                К сожалению такой страницы нету в нашем интернет-магазине
            </p>
        </>
    );
};

export default NotFound;
