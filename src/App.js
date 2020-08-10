import React from 'react';

import Title from './components/Title';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import HistoryTransaction from './components/HistoryTransaction';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/globalContext';

import './App.css';
import './components/animation.css';

const App = () => {

  return (
    <div className="container">
      <div className="component">
        <GlobalProvider>
          <Title />
          <Balance />
          <IncomeExpense />
          <HistoryTransaction />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>

  )
};

export default App;