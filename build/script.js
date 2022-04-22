const openBtn = document.querySelector(".menu")
const closeBtn = document.querySelector("nav .strip--button")
const navEl = document.querySelector("nav")
const carousel = document.querySelector(".carousel--items")
const carouselItem = document.querySelector(".carousel--items>.carosel--item")
const containerEl = document.querySelector(".container")
const cartBtn = document.querySelector("button.cart")
const cart = document.querySelector(".cart-background")
const cartContent = document.querySelector('.cart--content>.cart--items')
const cartClose = document.querySelector(".cart--close-icon")

cartClose.addEventListener("click", (v) => {
    cart.classList.toggle("open")
})

cart.addEventListener("click", (v) => {
    if(v.target == cart) {
        cart.classList.toggle("open")
    }
})

cartBtn.addEventListener("click", (v) => {
    if (cart.classList.contains('open')) {
        cart.classList.remove("open")
    } else if (!cart.classList.contains('open')) {
        cart.classList.add('open')
    }
})
openBtn.addEventListener("click", (v) => {
    openBtn.classList.toggle("active")
    if (!navEl.classList.contains("open")) {
        navEl.classList.add('open')
        navEl.style.display = 'flex'
    } else {
        navEl.classList.remove('open')
        setTimeout(() => {
            navEl.style.display = 'none'
        }, 480)
    }
})
let windowY = 0;
window.addEventListener("scroll", (e) => {
    if (window.innerWidth > 800) {
        if (window.scrollY == 0) {
            containerEl.style.position = 'static'
            windowY = window.scrollY
        }
        else if ((window.scrollY - windowY) < -70) {
            containerEl.style.position = 'fixed'
            containerEl.style.zIndex = '100'
            containerEl.style.width = '100%'
            containerEl.style.background = 'white'
            containerEl.style.top = '0'
            windowY = window.scrollY
        } else if ((window.scrollY - windowY) > 70) {
            containerEl.style.position = 'static'
            windowY = window.scrollY
        }
    }
})
window.addEventListener("resize", (e) => {
    if (window.innerWidth < 800) {
        containerEl.style.position = 'static'
        navEl.style.display = 'none'
    } else {
        navEl.style.display = 'flex'
    }
})
setTimeout(() => { document.querySelector("html").scrollTop = 0 }, 0)
