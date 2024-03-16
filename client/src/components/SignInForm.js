import React from "react";
import {Link} from 'react-router-dom';

const SignInForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        /*TODO: call account login api here */
        console.log("Signed in account");
    }

    return(
        <div>
        <body className='form-body'>
         <form className='login-signin-form' onSubmit={handleSubmit}>
                <h2>Welcome Back to Routine It</h2>
                <p>Need to create an account? Sign up <Link to="/signup" className="regular-link">here</Link>.</p>
                <div id="create-account-form-inputs">
                    <label>Email</label>
                    <input type="email" name="email"/>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <input type="submit" value="Sign In" className="button"/>
            </form>
        </body>
    </div>
    )

}

export default SignInForm;