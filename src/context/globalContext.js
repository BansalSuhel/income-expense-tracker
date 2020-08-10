import React, { useReducer } from "react";

import inputReducer from '../reducer/inputReducer';

const initialState = {
    transactions: []
    
}

export const GlobalContext = React.createContext(initialState);


const GlobalProvider = props => {
    const [state, dispatch] = useReducer(inputReducer, initialState);

  const addTransactionHandler = (newData) => {
        dispatch({type: 'ADD', payload: newData})
    }

  const deleteTransactionHandler = (id) => {
      dispatch({type: 'DELETE', payload: id});
  }  

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransactionHandler,
                deleteTransactionHandler
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
};

export default GlobalProvider;