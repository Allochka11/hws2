import React from 'react'
import {Pagination} from '@mui/material'

import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const PaginationMemo: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)// пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        if (event) {
            onChange(page, itemsCountForPage)
        }
    }

    const onChangeSelect = (event: any) => {

        if (event) {
            onChange(page, +event.currentTarget.value)
        }
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                onChange={onChangeCallback}
                page={page}
                count={lastPage}
                variant="outlined"
                color="primary"/>
            {/*<Pagination*/}
            {/*    id={id + '-pagination'}*/}
            {/*    sx={{*/}
            {/*        // стили для Pagination // пишет студент*/}
            {/*    }}*/}
            {/*    page={page}*/}
            {/*    count={lastPage}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    hideNextButton*/}
            {/*    hidePrevButton*/}
            {/*/>*/}

            <span className={s.text1}>
                Показать
            </span>
            <SuperSelect
                id={id + '-pagination-select'}
                key={id}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                className={s.select}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строки в таблице
            </span>
        </div>
    )
}

const SuperPagination = React.memo(PaginationMemo)

export default SuperPagination
