import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../redux/slices/Filter/slice';
import styles from './Pagination.module.scss';

const Pagination: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
                pageRangeDisplayed={8}
                pageCount={2}
                previousLabel="<"
            />
        </>
    );
};

export default Pagination;
