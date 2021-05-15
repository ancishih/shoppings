import React from 'react'
import {withRouter} from 'react-router-dom'
import './product.scss'

import SideBar from './SideBar'
import ProductList from './ProductList'

const Product = () => {
    return (
        <div className="product-container">
            <SideBar />
            <ProductList />
        </div>
    )
}

export default Product