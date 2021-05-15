import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts,selectSize} from '../../actions'

import Card from './Card'

class ProductList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }
    renderList(){
            return this.props.products.map(product =>{
                return (
                    <Card key={product.id} prodImg={product.URL} prodName={product.name} prodPrice={product.price}/>
                )
            })
    }
    renderFilteredProduct(){
        return this.props.filteredItems.map(product =>{
            return (
                <Card key={product.id} prodImg={product.URL} prodName={product.name} prodPrice={product.price}/>
            )
        })
    }
    
    render(){
        return (
            <>
                <div className="product-list row">
                    {this.props.productsList.size==="顯示全部"?this.renderList():this.renderFilteredProduct()}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products:state.productsList.products,
        filteredItems:state.productsList.filteredItems,
        productsList:state.productsList
    }
}

export default connect(mapStateToProps,{fetchProducts,selectSize})(ProductList)