import React, { useEffect, useMemo, useState } from 'react';
import s from './Home.module.css';
import Card from '../../UI/Card';
import trimSpace from '../../utils/trimSpace';
import InputFilter from '../../UI/Input';

function Home({ cars }) {

    //Состояние фильтров
    const [priceFrom, setPriceFrom] = useState(() => {
        const newArr = [...cars]
        //Находим наименьшее значение в массиве
        return (newArr.sort((a, b) => a.price - b.price)[0].price).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    })
    const [priceTo, pricePriceTo] = useState(() => {
        const newArr = [...cars]
        //Находим наибольшее значение в массиве
        return (newArr.sort((a, b) => b.price - a.price)[0].price).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    })

    //Состояние отфильтрованного массива
    const [filtredCar, setFiltredCar] = useState(cars)

    //Функция фильтрации массива, котоая возвращает отфильтрованный ассив по параметрам
    const filterCars = () => {
        console.log('Запущена ф-ия фильтрации массива');
        return cars.filter(el => el.price >= trimSpace(priceFrom) && el.price <= trimSpace(priceTo))
    }

    return (
        <div className={s.homePage}>
            <div className={s.filterPanel}>
                <div className={s.filterPriceContainer}>
                    <p className={s.filterTitle}>Filter of price</p>
                    <InputFilter
                        setFiltredArr={setFiltredCar}
                        param={priceFrom}
                        setParam={setPriceFrom}
                        filterFn={filterCars}
                    />
                    {/* <InputFilter
                        setFiltredArr={setFiltredCar}
                        param={priceTo}
                        setParam={pricePriceTo}
                        filterFn={filterCars}
                    /> */}
                </div>

            </div>

            <div className={s.carsItems}>
                <h1>Cars catalog</h1>
                {filtredCar.length ? filtredCar.map((el) => <Card key={el.id} cars={el} />) : 'No cars found'}
            </div>

            <div className={s.addPanel}></div>
        </div>
    )
}

export default Home;