import React, { useEffect, useMemo, useState } from 'react';
import trimSpace from '../../utils/trimSpace';
import s from './InputFilter.module.css';

const InputFilter = ({ param, setParam, filterFn, setFiltredArr }) => {
    //param параметр фильтрации и значение поля ввода
    //setParam сеттер параметра фильтрации и значения поля ввода
    //filterFn функция, которая должна выполниться после ввода значения в поле ввода и анфокуса
    //setFiltredArr сеттер отфильтрованного массива

    //Проверяем изменились ли параметры фильтрации
    const [isFilterParamsChanged, setIsFilterParamsChanged] = useState(false)

    //При снятии фокуса
    const [onBlurActive, setOnBlurActive] = useState(false)
    const isFilterParamsCheck = () => {
        //Если данные в поле ввода изменились
        if (isFilterParamsChanged) {
            //То ставим, что фокус активен, что запустит useEffect с сеттером отфильтрованного массива
            setOnBlurActive(!onBlurActive)
            //Поскольку параметры применены, ставим false-таким образом, мы сообщаем, что параметры уже актуальны и изменять больше ничего не нужно 
            setIsFilterParamsChanged(false)
        }
    }

    //Ф-ия, меняющая значения поля ввода и параметр фильтрации
    const changePrice = (e, setter) => {
        const value = trimSpace(e.target.value)
        if (!isNaN(value)) {
            setter((value).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
            setIsFilterParamsChanged(true)
        }
    }
    let result = useMemo(filterFn, [onBlurActive])

    useEffect(() => {
        setFiltredArr(result)
    }, [result])

    return (
        <input onBlur={isFilterParamsCheck} onChange={(e) => changePrice(e, setParam)} value={param} placeholder='от' type="text" />
    )
}

export default InputFilter;