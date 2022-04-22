import React from 'react'
import { checkUser } from '../firebase/connect'
import { setSite } from '../utils/directive'
import render from '../utils/render'

class Login extends React.Component {

    constructor() {
        super()
    }

    directionTo(e){
        e.preventDefault()
        setSite('registration') 
        render()
    }

    handdleClick(e){
        e.preventDefault()
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var isRemember = document.getElementById('remember').checked
        checkUser("Account", username, password, isRemember)
    }

    render() {
        return (
            <>
            <div className="login-wrapper">
                <div className="center"> 
                    <h1>Login</h1> 
                    <form> 
                        <div className="txt_field"> 
                            <input type="text" id="username" required/> <span></span> 
                            <label>Username</label> 
                        </div> 
                        <div className="txt_field"> 
                            <input type="password" id="password" required/> <span></span> <label>Password</label> 
                        </div> 
                        <input type='checkbox' id='remember' /> <label for='remember'>Remember me?</label>
                        <div className="signup_link"><a href="#" onClick={this.directionTo}>Signup</a> 
                        </div> 
                        <button id="submit" onClick={this.handdleClick}>Login</button>  
                    </form> 
                </div>
            </div>
            </>
        )
    }

}

export default Login