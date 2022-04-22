import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase, ref, set, child, get } from "firebase/database"
import React from 'react'
import ReactDOM from 'react-dom'
import Item from "../components/item";
import { items, productAmount, setItems, setProductAmount } from "../utils/product-items"
import { filterKeyword, setFilterKeyword } from '../utils/filter-keyword'
import Products from "../components/prodcuts"
import { setUser, user } from "../utils/user"
import AnimationForFilter from "../utils/animation-for-filter"
import { setSite } from "../utils/directive"
import render from "../utils/render"
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
function init() {
    const firebaseConfig = { apiKey: "AIzaSyA_XBXsCvBzMTi8nWgWyCmaUZ2dmDaqDRk", authDomain: "adaleneclone-c61da.firebaseapp.com", databaseURL: "https://adaleneclone-c61da-default-rtdb.firebaseio.com", projectId: "adaleneclone-c61da", storageBucket: "adaleneclone-c61da.appspot.com", messagingSenderId: "996738155842", appId: "1:996738155842:web:e03c3a44161d0d2a93b4db", measurementId: "G-NKJ8KWJ50Y" };
    // Initialize Firebase 
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

init()

setUser(JSON.parse(sessionStorage.getItem("user") || '{}'))

function checkUser(url, username, password, isRemember) {
    get(child(ref(getDatabase()), url))
        .then((data) => {
            var isLogin = false
            for (var i = 0; i < data.val().length; i++) {
                if (data.val()[i].username === username && data.val()[i].password === password) {
                    setUser(data.val()[i])
                    if (isRemember) {
                        sessionStorage.setItem("user", JSON.stringify(user))
                    }
                    isLogin = true
                    break
                }
            }
            if (isLogin) {
                alert("thanh cong")
                setSite("home")
                render()
                const loginEl = document.querySelectorAll(".login--header")
                loginEl.forEach((v) => v.querySelector('span').textContent = `${user?.name || 'Login'}`)
            } else {
                alert("that bai")
            }
            return 0;
        })
        .catch((error) => {
            console.log(error)
        })
}

function getData(url) {
    get(child(ref(getDatabase()), url))
        .then((data) => {
            setItems(Object.entries(data.val()).map((v, i) => {
                if (v[1].sell > 10) {
                    var data = {
                        id: v[0],
                        ...v[1]
                    }
                    return (
                        <Item
                            {...data}
                        />
                    )
                }
            }))
            ReactDOM.render(items, document.querySelector('.carousel--items'))
            return 0;
        })
        .catch((error) => {
            console.log(error)
        })
}

function getFullData(url, parent) {
    get(child(ref(getDatabase()), url))
        .then((data) => {
            setProductAmount(Object.entries(data.val()).length)
            setItems(Object.entries(data.val()).map((v, i) => {
                if (i >= 0 && i < 4) {
                    var data = {
                        id: v[0],
                        ...v[1]
                    }
                    return (
                        <Item
                            {...data}
                        />
                    )
                }
            }))
            Products.amountOfPagination()
            ReactDOM.render(items, document.querySelector(`.${parent}`))
            return 0;
        })
        .catch((error) => {
            console.log(error)
        })
}

function getDataByFilter2(category, value, url = "products", parent = "products", pageNumber = 1) {
    setFilterKeyword([category, value])
    if (category.match('Collection')) {
        get(child(ref(getDatabase()), url))
            .then((data) => {
                setItems(Object.entries(data.val()).map((v, i) => {
                    if (v[1].category === value || value === 'all') {
                        var data = {
                            id: v[0],
                            ...v[1]
                        }
                        return (
                            <Item {...data} />
                        )
                    }
                }).filter(x => x !== undefined))
                setProductAmount(items.length)
                Products.amountOfPagination()
                pagination(pageNumber)
                if (items.filter(x => x !== undefined).length === 0) {
                    setItems([
                        <p style={{ 'text-align': 'center', 'font-size': '2em', 'font-family': 'Poppins' }}>No Results.</p>
                    ])
                }
                ReactDOM.render(items, document.querySelector(".products"))
                return items;
            })
            .catch((error) => {
                return []
            })
    } if (category.match('Price')) {
        get(child(ref(getDatabase()), url))
            .then((data) => {
                setItems(Object.entries(data.val()).map((v, i) => {
                    if ((parseFloat(v[1].price) >= parseFloat(value.split(',')[0]) && parseFloat(v[1].price) <= parseFloat(value.split(',')[1])) || value === 'all') {
                        var data = {
                            id: v[0],
                            ...v[1]
                        }
                        return (
                            <Item {...data} />
                        )
                    }
                }).filter(x => x !== undefined))
                setProductAmount(items.length)
                Products.amountOfPagination()
                pagination(pageNumber)
                if (items.filter(x => x !== undefined).length === 0) {
                    setItems([
                        <p style={{ 'text-align': 'center', 'font-size': '2em', 'font-family': 'Poppins' }}>No Results.</p>
                    ])
                }
                ReactDOM.render(items, document.querySelector(".products"))
                return items
            })
            .catch((error) => {
                return []
            })
    }
    return items;
}

function registrationUser(user){
    get(child(ref(getDatabase()), "Account"))
        .then((data) => {
            if((data.val().filter(x => x.username === user.username)).length < 1){
                set(ref(getDatabase(), 'Account/' + data.val().length), user);
                alert("Registration success")
            }else{
                alert("User name is exist")
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function pagination(pageNumber) {
    setItems(items.filter((v, i) => {
        return i >= (parseInt(pageNumber) * 4 - 4) && i < (parseInt(pageNumber) * 4)
    }))
    ReactDOM.render(items, document.querySelector(`.products`))
}


export { getData, getFullData, getDataByFilter2, pagination, checkUser, registrationUser }