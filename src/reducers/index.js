import {combineReducers} from 'redux'
import {sizeList,} from './categoryReducers'
import {productsList} from './productListReducers'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    sizeList,
    productsList,
    form: formReducer,
})