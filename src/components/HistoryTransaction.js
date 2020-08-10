import React, { useContext } from 'react';

import SingleTransaction from './SingleTransaction';
import { GlobalContext } from '../context/globalContext';

import './HistoryTransaction.css';

const HistoryTransaction = () => {

    const { transactions } = useContext(GlobalContext);
    
    console.log(transactions);
    return (
        <div className="history-transaction">
            <h3 className="history-transaction__heading">History</h3>
            <ul className="list-items">
                {transactions.map(transaction => (
                    <SingleTransaction
                        key={transaction.id}
                        transaction={transaction} />
                ))}
            </ul>
        </div>
    )
};

export default HistoryTransaction;