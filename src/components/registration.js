import React from 'react'
import "../css/registration.css"
import { registrationUser } from '../firebase/connect'

export default class Registration extends React.Component {

    constructor(props){
        super(props)
    }

    registration(e){
        e.preventDefault();
        var user = {
            username: document.querySelector(".registration-form__user-name").value,
            name: document.querySelector(".registration-form__full-name").value,
            password: document.querySelector(".registration-form__password").value
        }
        registrationUser(user)
    }

    render(){
        return (
            <div className='registration-wrapper'>
                <h3>Registration</h3>
                <form className="registration-form">
                    <input type="text" placeholder='User name' className='registration-form__user-name' required/>
                    <input type="text" placeholder='Full name' className='registration-form__full-name' required/>
                    <input type="password" placeholder='Password' className='registration-form__password' required/>
                    <button onClick={this.registration}>Registration</button>
                </form> 
            </div>
        )
    }

}