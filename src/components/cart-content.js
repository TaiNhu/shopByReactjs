import React from 'react'
import ReactDOM from 'react-dom'
import { cartItems } from '../utils/cart-items'

export default function CartContent(){

    function handdleClick(){
        document.querySelector(".cart-background").classList.remove("open")
    }

    return (
        <React.Fragment>
            <div className="cart--header" onClick={handdleClick}><ion-icon name="chevron-forward-outline" className="cart--close-icon"></ion-icon> &nbsp; <span>Cart</span></div>
            <div className="cart--content">
                <div className="cart--items">
                    {cartItems}
                </div>
                
                <span style={{"marginLeft": "10px"}}>
                    SubTotal: $<span id="total">0</span>
                </span>
            </div>
        </React.Fragment>
    )
} 

ReactDOM.render(<CartContent />, document.querySelector(".cart--wrapper"))