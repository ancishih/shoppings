import React from 'react'

import {devURL} from '../../config'

class Card extends React.Component {
    render(props){
        return(
            <div className="product-card">
            <img src={devURL+this.props.prodImg} alt={devURL+this.props.prodImg}/>
            <div className="productName">{this.props.prodName}</div>
            <div className="productPrice">{this.props.prodPrice}</div>
            </div>
        )
    }
}

export default Card