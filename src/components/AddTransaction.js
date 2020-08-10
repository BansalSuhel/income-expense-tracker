import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/globalContext';

import './AddTransaction.css';


const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactionHandler } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = {
            id: Math.floor(Math.random() * 10000000000),
            text: text,
            amount: +amount
        }
        console.log(newData);
        addTransactionHandler(newData);
        setText('');
        setAmount(0);
    }

    return (
        <div className="addTransaction">
            <h3 className="addTransaction__heading">Add New Transaction</h3>
            <form onSubmit={submitHandler} className="form">
                <div className="form-control">
                    <label
                        htmlFor="text-input"
                        className="form-control__label">
                        Text</label>
                    <input
                        type="text"
                        id="text-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        className="form-control__input"
                        placeholder="Enter Text...."
                    />
                </div>
                <div className="form-control">
                    <label
                        htmlFor="number-input"
                        className="form-control__label" >
                        Amount
                    <span>(negative - expense, positive - income)</span>
                    </label>

                    <input
                        type="number"
                        id="number-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="form-control__input" />
                </div>
                <button className="form-btn">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;