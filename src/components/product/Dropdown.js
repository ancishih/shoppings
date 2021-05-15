import React from 'react';
import {connect} from 'react-redux'
import {selectSize,} from '../../actions'


class Dropdown extends React.Component {
    render(){
        const renderSizeList = this.props.sizeList.map(size=>{
            return(
                <option value={size.title} key={size.title}>{size.title}</option>
            )
        })
        console.log(this.props)
        return (
            <>  
                <div className="product-dropdown">
                    <div>產品尺寸</div>
                    <select className="form-select" 
                    onChange={(e)=> 
                    this.props.selectSize(this.props.products,e.target.value)
                    }>{renderSizeList}</select>
                </div>
            </>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        sizeList: state.sizeList,
        products: state.productsList.products,
        filteredItems:state.productsList.filteredItems,
        size: state.productsList.size
    }
}

export default connect(mapStateToProps,{selectSize,})(Dropdown)