import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    //converting object to array
    let transformIngredients = Object.keys(props.ingredients).map(keys => {
        return [...Array(props.ingredients[keys])].map((_ , index) => {
            return <BurgerIngredient key={keys + index} type={keys} />
        });
    }).reduce((arr , el) => {
        return arr.concat(el)
    } , []);

    if(transformIngredients.length === 0) {
        transformIngredients = <h5> Please add some elements </h5>;
    }



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'} />
                {transformIngredients}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    );
}

export default burger; 