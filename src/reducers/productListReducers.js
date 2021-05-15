const initialState = {products:[], filteredItems:[],size:"顯示全部"}
export const productsList = (state=initialState,action) =>{
    switch(action.type) {
        case 'FETCHED_PRODUCTS':
            return {...state,products:action.payload}
        case 'SELECT_SIZE':
            return {...state,filteredItems:action.payload.items,size:action.payload.size}
        default:
            return state
    }
}