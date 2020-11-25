import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    //each transactions is an obj with id,text and amount, mapping through and getting all the amounts array
    const amounts = transactions.map(transaction => transaction.amount);
    //to get total, we use reduce to simiply add element of amounts all together and use tofixed decimal
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <h4>My Balance</h4>
        <h1>${total}</h1>
        </>
    )
}
