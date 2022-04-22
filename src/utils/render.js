import { site } from './directive'
import ReactDOM from 'react-dom'
import Article from '../components/article'
import CartContent from '../components/cart-content'
import Products from '../components/prodcuts'
import { getData, getFullData } from '../firebase/connect'
import Login from '../components/login'
import Registration from '../components/registration'

export default function render(){
    if(site === 'home'){
        ReactDOM.render(<Article />, document.querySelector(".article"))
    } else if(site === 'products'){
        ReactDOM.render(<Products />, document.querySelector('.article'))
    } else if (site === 'login'){
        ReactDOM.render(<Login />, document.querySelector('.article'))
    } else if (site === 'registration'){
        ReactDOM.render(<Registration />, document.querySelector(".article"))
    }
    getData('products')
    getFullData('products', 'products')
    ReactDOM.render(<CartContent />, document.querySelector(".cart--wrapper"))
    document.querySelector(".article").style.WebkitAnimation = 'none'
    setTimeout(() => {
        document.querySelector(".article").style.WebkitAnimation = ''
    }, 10)
}
