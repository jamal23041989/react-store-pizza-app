import qs from 'qs';
import { FC, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategoryId, setFiltres } from '../redux/slices/Filter/slice';
import { selectFilter } from '../redux/slices/Filter/selectors';

import { fetchPizzas } from '../redux/slices/Pizza/asyncActions';
import { selectPizzaData } from '../redux/slices/Pizza/selectors';
import { SearchPizzaParams } from '../redux/slices/Pizza/types';

import { useAppDispatch } from '../redux/store';

import { Categories, MyLoader, Pagination, PizzaBlock, Sort } from '../components';
import { popups } from '../components/Sort';

const Home: FC = () => {
    const { items, status } = useSelector(selectPizzaData);
    const { categoryId, currentPage, sort: sortType, searchValue } = useSelector(selectFilter);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const getPizzas = async () => {
        const sortBy = sortType.sort.replace('-', '');
        const order = sortType.sort.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? String(categoryId) : '';
        const search = searchValue;

        dispatch(
            fetchPizzas({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            })
        );

        isSearch.current = false;

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sort: sortType.sort,
                categoryId,
                currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;

        if (!window.location.search) {
            dispatch(fetchPizzas({} as SearchPizzaParams));
        }
    }, [categoryId, sortType.sort, currentPage, navigate]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(
                window.location.search.substring(1)
            ) as unknown as SearchPizzaParams;

            const sort = popups.find((popup) => popup.sort === params.sortBy);

            dispatch(
                setFiltres({
                    searchValue: params.search,
                    categoryId: Number(params.category),
                    currentPage: Number(params.currentPage),
                    sort: sort || popups[0],
                })
            );

            isSearch.current = true;
        }
    }, [dispatch]);

    useEffect(() => {
        getPizzas();
    }, [categoryId, sortType.sort, searchValue, currentPage]);

    const onChangeCategory = useCallback((idx: number) => dispatch(setCategoryId(idx)), []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
                <Sort sortType={sortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка</h2>
                    <p>Не удалось получить пиццы</p>
                </div>
            ) : (
                <div className="content__items">
                    {status === 'loading'
                        ? [...new Array(6)].map((_, i) => <MyLoader key={i} />)
                        : items
                              .filter((item: any) =>
                                  item.name.toLowerCase().includes(searchValue.toLowerCase())
                              )
                              .map((item: any) => <PizzaBlock key={item.id} {...item} />)}
                </div>
            )}

            <Pagination />
        </div>
    );
};

export default Home;
