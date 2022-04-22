import React from 'react'
import ReactDOM from 'react-dom'
import QuickReview from './quick-review'
import ProdcutDetail from './product-detail'

export default function Item({id, category, img, name, price, sell}) {

    function handdleClick(e){
        e.stopPropagation()
        document.querySelector(".quick-review-wrapper").classList.add('open')
        ReactDOM.render(<QuickReview 
            img={img}
            name={name}
            price={price}
            id={id}
        />, document.querySelector(".quick-review-wrapper"))
    }

    function handdleDirection(e){
        ReactDOM.render(
            <ProdcutDetail
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

    return (
        <div className={"carosel--item "+id} onClick={handdleDirection}>
            {sell > 10 ? <span>Best Seller</span> : ''}
            <img src={img} alt=""/>
            <div className="attachment" onClick={handdleClick}>Quick review</div> 
            <div className="carousel--item--info">
                <h3>{name}</h3>
                <span>${price}</span>
            </div>
        </div>
    )
}