import {getData} from '../api'
// import _ from 'lodash'

export const fetchProducts = () => async dispatch => {
    const response = await getData.get('/products')
    dispatch({type:'FETCHED_PRODUCTS',payload:response.data})
}

export const selectSize = (data,size) => dispatch => {
        console.log(data,size)
        dispatch({
            type:'SELECT_SIZE',
            payload:{
                size:size,
                items:size==="顯示全部"?data:data.filter(element => element.type===size)
            }
        })
    }

export const searchProducts = (productname) => {
    return {
        type:'SEARCH_ITEM',
        payload:productname
    }
}
