import { FC, memo } from 'react';

type CategoriesProps = { categoryId: number; onClickCategory: (i: number) => void };

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: FC<CategoriesProps> = memo(({ categoryId, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((category, i) => {
                    return (
                        <li
                            key={i}
                            onClick={() => onClickCategory(i)}
                            className={categoryId === i ? 'active' : ''}
                        >
                            {category}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default Categories;
