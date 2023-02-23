import React, {ChangeEvent, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'
import s3 from '../hw07/common/c5-SuperSelect/SuperSelect.module.css'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";


/*
* 1 - в файле SuperSelect.tsx дописать логику функции onChangeCallback
* 2 - в файле SuperRadio.tsx дописать логику функции onChangeCallback
* 3 - в файле SuperRadio.tsx дописать name, checked, value (узнать для чего в радио name)
* 4 - сделать стили в соответствии с дизайном
* */

const arr = [
    { id: 1, value: 'Pre-junior' },
    { id: 2, value: 'Junior' },
    { id: 3, value: 'Junior+' },
] // value может быть изменено

const HW7 = () => {
    const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно
    const handleChange = (event: SelectChangeEvent) => {
        // @ts-ignore
        onChangeOption(event.target.value as number)
    };

    return (
        <div id={'hw7'} className={s2.hw7}>
            <div className={s2.hwTitle}>Homework #7</div>
            <div className={s2.line}></div>

            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw7Container}>
                <div className={s.container}>
                    <div>
                        <FormControl fullWidth>
                            {/*<InputLabel id="hw7-super-select">{value}</InputLabel>*/}
                            <Select
                                labelId='hw7-super-select'
                                id='hw7-super-select'
                                // value={Number(value)}
                                label="HW7"
                                onChange={handleChange}
                                // onChange={(e)=>onChangeCallback()}
                            >
                                {arr.map(o =>{

                                    return(
                                        <MenuItem value={o.id}
                                                  id={'hw7-option-' + o.id}
                                                  key={o.id}
                                        >{o.value}</MenuItem>
                                    )
                                })}



                            </Select>
                        </FormControl>

                        <SuperSelect
                            // className={s3.openSelect}
                            id={'hw7-super-select'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}

                        />
                        {/*<div>mklvm</div>*/}
                    </div>
                    <div>
                        <SuperRadio
                            id={'hw7-super-radio'}
                            name={'hw7-radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW7


