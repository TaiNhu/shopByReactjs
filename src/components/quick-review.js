import { cartItems } from "../utils/cart-items"
import CartItem from "./cart-item"
import ReactDOM from 'react-dom'
import CartContent from "./cart-content"
import sum from "../utils/sum"
import ProductDetail from "./product-detail"

export default function QuickReview({img, name, price, id}){

    function handdleClick(){
        document.querySelector('.quick-review-wrapper').classList.remove('open') 
    }

    function redirective(){
        document.querySelector('.quick-review-wrapper').classList.remove('open') 
        ReactDOM.render(
            <ProductDetail
                id={id}
                img={img}
                price={price}
                name={name}
            />
        , document.querySelector(".article"))
        document.querySelector(".article").style.WebkitAnimation = 'none'
        setTimeout(() => {
            document.querySelector(".article").style.WebkitAnimation = ''
        }, 10)

    }

    function handdleAdd(){
        document.querySelector('.quick-review-wrapper').classList.remove('open') 
        document.querySelector('.cart-background').classList.add("open")
        var amount = parseInt(document.querySelector(".info-wrapper>input[type='number']").value)
        var isDuplication = false
        for(var i = 0; i < cartItems.length; i++){
            if(id === cartItems[i].props.id){
                isDuplication = true
            }
        }
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
        <div className="quick-view--background">
            <button className="close-button" onClick={handdleClick}>X</button>
            <div className="content-wrapper">
                <img src={img} alt=""/>
                <div className="info-wrapper">
                    <h3 className="name">{name}</h3>
                    <h4 className="price">${price}</h4>
                    <small>SKU: {id}</small>
                    <label htmlFor='number'>Quantity:</label>
                    <input type='number' min='1' id='number' defaultValue='1'/>
                    <button className="add-to-cart" onClick={handdleAdd}>Add to Cart</button>
                    <a href="#" id='view-more' onClick={redirective}>View More Detail</a>
                </div>
            </div>
        </div>
    )
} 