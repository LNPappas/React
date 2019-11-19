import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    // get keys from array ingredients. 
    //map key to new array with length of key
    //ie: cheese: 2 then igkey = 'cheese' and ingredient[igkey]= 2
    //now type=igkey (type='cheese') displayed i times (2)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if ( transformedIngredients.length === 0 ) {
        transformedIngredients = <p>Start building your burger!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;