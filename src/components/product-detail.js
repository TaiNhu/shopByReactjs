import React from 'react'
import ReactDOM from 'react-dom'
import CartContent from './cart-content'
import CartItem from './cart-item'
import { cartItems } from '../utils/cart-items'
import sum from '../utils/sum'

export default function ProductDetail({id, img, price, name}){
    var [iconName, setIconName] = React.useState("add-outline");
    var [iconName2, setIconName2] = React.useState("add-outline");
    var [iconName3, setIconName3] = React.useState("add-outline");

    function handdleClick(e){
        if(e.target.classList.contains('_1')){
            if(iconName ===  "remove-outline"){
                setIconName("add-outline")
                document.querySelector('.detail--header._1 ~ p').classList.remove('open')
            } else {
                setIconName("remove-outline")
                document.querySelector('.detail--header._1 ~ p').classList.add('open')
            }
        } else if(e.target.classList.contains('_2')){
            if(iconName2 ===  "remove-outline"){
                setIconName2("add-outline")
                document.querySelector('.detail--header._2 ~ p').classList.remove('open')
            } else {
                setIconName2("remove-outline")
                document.querySelector('.detail--header._2 ~ p').classList.add('open')
            }
        } else if(e.target.classList.contains('_3')){
            if(iconName3 ===  "remove-outline"){
                setIconName3("add-outline")
                document.querySelector('.detail--header._3 ~ p').classList.remove('open')
            } else {
                setIconName3("remove-outline")
                document.querySelector('.detail--header._3 ~ p').classList.add('open')
            }
        }
    }

    function handdleAdd(){
        document.querySelector('.cart-background').classList.add("open")
        var amount = parseInt(document.querySelector(".detail--info input[type='number']").value)
        var isDuplication = false
        for(var i = 0; i < cartItems.length; i++){
            if(id === cartItems[i].props.id){
                isDuplication = true
            }
        }
        console.log('tai')
        if(!isDuplication){
            cartItems.push(
                <CartItem
                    key={cartItems.length - 1}
                    id={id}
                    img={img} 
                    name={name}
                    price={price}
                    amount={amount}
                />
            )
        }
        ReactDOM.render(<CartContent />, document.querySelector(".cart--wrapper"))
        setTimeout(() => document.getElementById("total").textContent = sum(), 0)
    }

    return (
        <div className="detail--wrapper">
            <img src={img} alt=""/>
            <div className="detail--info">
                <h2>{name}</h2>
                <small>SKU: {id}</small>
                <span>{price}</span>
                <label htmlFor="number">Quantity:</label>
                <input type="number" id="number" defaultValue="1" min="1"/>
                <button onClick={handdleAdd}>Add to Cart</button>
                <div className="detail--wrapper">
                    <ul>
                        <li>
                            <div className="detail--header _1" onClick={handdleClick}>PRODUCT INFO &nbsp;<ion-icon name={iconName}></ion-icon></div>  
                            <p className="detail-content">
                                I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
                            </p>
                        </li>
                        <li>
                            <div className="detail--header _2" onClick={handdleClick}>RETURN & REFUND POLICY &nbsp;<ion-icon name={iconName2}></ion-icon></div>  
                            <p className="detail-content">
                                I'm a Return and Refund policy. I'm a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                            </p>
                        </li>
                        <li>
                            <div className="detail--header _3" onClick={handdleClick}>SHIPPING INFO &nbsp;<ion-icon name={iconName3}></ion-icon></div>  
                            <p className="detail-content">
                                I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}