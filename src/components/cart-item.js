import React from 'react'
import { cartItems } from '../utils/cart-items'
import sum from '../utils/sum'

export default class CartItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            ...props
        }
    }

    handdleClick(is){
        if(is){
            this.setState({'amount' : parseInt(this.state.amount) + 1})
        } else{
            if(parseInt(this.state.amount) >= 2){
                this.setState({'amount' : parseInt(this.state.amount) - 1})
            }
        } 
        setTimeout(() => document.getElementById("total").textContent = sum(), 0)
    }

    handdleRemove(){
        var n =  document.querySelector(".cart--item."+this.state.id)
        var parent = n.parentElement
        parent.removeChild(n)
        document.querySelector("#total").textContent = sum()
    }

    render(){
        return (
            <div className={"cart--item "+this.state.id}>
                <img src={this.state.img} alt="" />
                <div className="cart--info-item">
                    <h3>{this.state.name}</h3>
                    <strong>${this.state.price}</strong>
                    <div className="number">
                    <ion-icon name="remove-outline" onClick={() => this.handdleClick('')}></ion-icon><span>{this.state.amount}</span><ion-icon name="add-outline" onClick={() => this.handdleClick('tai')}></ion-icon> 
                    </div>
                </div>
                <div className="cart--item-close" onClick={this.handdleRemove.bind(this)}>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </div>
        )
    }

}