import React, { useContext } from 'react';

import { GlobalContext } from "../context/globalContext";

import './SingleTransaction.css';

const SingleTransaction = props => {
    const { deleteTransactionHandler } = useContext(GlobalContext);

    let sign = props.transaction.amount >= 0 ? '+' : '-'


    return (
        <React.Fragment>

            <li className={props.transaction.amount > 0 ? 'income-list' : 'expense-list' } >
                
                <div className="list-items__flex">
                    <span className="span-text">{props.transaction.text}</span>
                    <span className="span-amount">{sign}${Math.abs(props.transaction.amount)}</span>
                </div>
                <button className="btn" onClick={() => deleteTransactionHandler(props.transaction.id)}>x</button>
            </li>
        </React.Fragment>
    );

};

export default SingleTransaction;