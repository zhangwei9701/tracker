//this is bascailly where we create our context, manage our state :)
import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// Initial our app state here
const initialState = {
    transactions: 
    [
        
    ]
}
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(keyid){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: keyid
        });
    }

    //Add Transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }} >
        {children}
    </GlobalContext.Provider>);
}