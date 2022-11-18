import { useState, useRef, useEffect, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSortType } from '../redux/slices/Filter/slice';
import { Sort, SortPropertyEnum } from '../redux/slices/Filter/types';

type InitialPopups = { name: string; sort: SortPropertyEnum };

type SortPopupProps = { sortType: Sort };

export const popups: InitialPopups[] = [
    { name: 'популярности (DESC)', sort: SortPropertyEnum.RAITING_DESC },
    { name: 'популярности (ASC)', sort: SortPropertyEnum.RAITING_ASC },
    { name: 'цене (DESC)', sort: SortPropertyEnum.PRICE_DESC },
    { name: 'цене (ASC)', sort: SortPropertyEnum.PRICE_ASC },
    { name: 'алфавиту (DESC)', sort: SortPropertyEnum.TITLE_DESC },
    { name: 'алфавиту (ASC)', sort: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: FC<SortPopupProps> = memo(({ sortType }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const onPopupsHandle = (obj: InitialPopups) => {
        dispatch(setSortType(obj));
        setIsVisible(false);
    };

    const onIsVisibleHandle = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const _event = e as MouseEvent & { path: Node[] };
            if (sortRef.current && !_event.path.includes(sortRef.current)) setIsVisible(false);
        };

        document.body.addEventListener('click', handleClickOutside);
        return document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => onIsVisibleHandle()}>{sortType.name}</span>
            </div>

            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {popups.map((popup, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => onPopupsHandle(popup)}
                                    className={sortType.sort === popup.sort ? 'active' : ''}
                                >
                                    {popup.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default SortPopup;
