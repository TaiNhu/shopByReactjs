import Article from './components/article'
import { getData, getFullData } from './firebase/connect';
import { setSite } from './utils/directive'
import render from './utils/render'
import { cartItems } from './utils/cart-items'
import { user, setUser } from './utils/user'

function App() {
    return (
        <Article />
    );
}

const navEl = document.querySelector("nav")
const aEl = document.querySelectorAll("a[href='#home']")
const cart = document.querySelector(".cart-background")
const aShop = document.querySelectorAll("a[href='#shop']")
const loginEl = document.querySelectorAll(".login--header")

loginEl.forEach((v) => v.querySelector('span').textContent = `${user?.name || 'Login'}`)

loginEl.forEach((v) => {
    v.addEventListener("click", (e) => {
        if (!user?.username) {
            setSite("login")
            render()
            if(window.innerWidth < 801){
                navEl.classList.remove('open')
                navEl.style.display = 'none'
            }
        } else {
            setUser(undefined);
            window.location.reload()
            sessionStorage.removeItem("user")
        }
    })

})
aEl.forEach((v) => {
    v.addEventListener("click", (e) => {
        setSite('home')
        render()
        if (window.innerWidth < 800) {
            navEl.classList.remove('open')
            navEl.style.display = 'none'
        }
    })
})

aShop.forEach((v, i) => {
    v.addEventListener("click", (e) => {
        setSite('products')
        render()
        if (window.innerWidth < 800) {
            navEl.classList.remove('open')
            navEl.style.display = 'none'
        }
    })
})

cart.addEventListener("click", (e) => {
    if (e.target === cart) {
        if (cart.classList.contains('open')) {
            cart.classList.remove("open")
            var amount = document.querySelector('button.cart>span')
            var sum = 0
            var amounts = document.querySelectorAll(".cart--info-item>.number>span")
            amounts = [...amounts]
            for (var i = 0; i < amounts.length; i++) {
                sum += parseInt(amounts[i].textContent)
            }
            amount.textContent = sum
        }
    }
})

getData('products')
getFullData('products', 'products')


export default App;
