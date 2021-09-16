import React from 'react'
import {auth, provider} from '../../firebase'
import './Login.css'

function Login() {
    const loginWithGoogle = async ()=>{
        await auth.signInWithPopup(provider)
            // .then(user => console.log(user))
            // .catch(error => console.log(error))

    }
    return (
        <div className='login'>
                <h2>B R M - Chat</h2>
                <h1>Login</h1>
            <div className="login_container">
                <button onClick={loginWithGoogle}>With Google</button>
            </div>
        </div>
    )
}

export default Login
