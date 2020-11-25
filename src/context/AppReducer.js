export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
          return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
          }
          case 'ADD_TRANSACTION':
            return{
              ...state,
              transactions: [action.payload, ...state.transactions] 
            }    
        default:
            return state;
    }
}

//bacially, where we specify the app state changes in response
//to certain actions to our context or stores

//reducer is nothing fussy but to change your state and send it down to our components

