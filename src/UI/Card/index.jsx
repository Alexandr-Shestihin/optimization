import React from 'react';
import s from './Card.module.css';
import useFormatterCurrency from '../../hooks/useFormatterCurrency';

const Card = ({ cars }) => {

    const formatterCurrency = useFormatterCurrency('USD', 'en')

    return (
        <div className={s.card}>
            <div
                className={s.img}
                style={{ backgroundImage: cars.img }}
            />
            <div className={s.info}>
                <h2>{cars.name}</h2>
                <p>{formatterCurrency(cars.price)}</p>
                <button>Read more</button>
            </div>

        </div>
    )
}

export default Card;