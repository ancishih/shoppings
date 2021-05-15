import React,{useEffect} from 'react';
import {Field, reduxForm} from 'redux-form';
import {searchProducts} from '../../actions'

import Dropdown from './Dropdown'

const InputComponent = props => {
    return (
        <>
            <input {...props.input} autoComplete="off" 
            type="text"
            /><i className="icono-search tab"></i>
        </>
    )
}

const SideBar =({handleSumbit}) => //console.log(displayList)||
        {
            
            return (
            <>  
                <div className="sidebar">
                    <div className="search-bar">
                        <form>
                            <Field 
                            name={"searchTerm"} 
                            component={InputComponent} 
                            />
                        </form>
                    </div>
                    <Dropdown />  
                </div>        
            </>
)}

export default reduxForm({form:'sideBar-selector',})(SideBar)