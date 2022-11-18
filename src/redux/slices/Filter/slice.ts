import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: { name: 'популярности', sort: SortPropertyEnum.RAITING_DESC },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },

        setSortType(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },

        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },

        setFiltres(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.categoryId = Number(action.payload.categoryId);
                state.sort = action.payload.sort;
                state.currentPage = Number(action.payload.currentPage);
            } else {
                state.currentPage = 1;
                state.categoryId = 0;
                state.sort = { name: 'популярности', sort: SortPropertyEnum.RAITING_DESC };
            }
        },
    },
});

export const { setCategoryId, setFiltres, setSortType, setCurrentPage, setSearchValue } =
    filterSlice.actions;

export default filterSlice.reducer;
