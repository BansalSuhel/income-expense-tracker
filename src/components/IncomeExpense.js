import React, { useContext } from 'react';

import { GlobalContext } from '../context/globalContext';

import './IncomeExpense.css';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const incomeExpenseArray = transactions.map(transaction => transaction.amount);

    const totalIncome = incomeExpenseArray
        .filter(transaction => transaction >= 0)
        .reduce((acc, num) => (acc += num), 0)
        .toFixed(2);

    const totalExpense = (incomeExpenseArray
        .filter(transaction => transaction < 0)
        .reduce((acc, num) => (acc += num), 0) * -1)
        .toFixed(2);

    return (
        <div className="income-expense">
            <h3 className="income-expense__income"><span>Income</span><span className="income-span">{totalIncome}</span></h3>
            <h3 className="income-expense__expense"><span>Expense</span><span  className="expense-span">{totalExpense}</span></h3>
        </div>
    )
};

export default IncomeExpense;