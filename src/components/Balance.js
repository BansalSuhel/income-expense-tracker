import React, { useContext } from 'react';

import { GlobalContext } from '../context/globalContext';

import './Balance.css';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totalAmount = transactions.map(transaction => transaction.amount)
    .reduce((acc, num) => acc + num, 0)
    .toFixed(2);

    let sign = totalAmount >= 0 ? '+' : '-';

  return (
    <div className="balance">
      <h3 className="balance__heading">Your Balance</h3>
      <h2 className="balance__amount">{sign}${Math.abs(totalAmount)}</h2>
    </div>
  )
};

export default Balance;