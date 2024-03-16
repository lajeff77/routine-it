import React from 'react';
import {Link} from 'react-router-dom';

const CreateAccountForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        /*TODO: call account creation api here */
        console.log("Created account");
    }

    return (
    <div>
        <body className='form-body'>
         <form className='login-signin-form' onSubmit={handleSubmit}>
                <h2>Sign up for Routine It</h2>
                <p>Already have an account? Login <Link to="/signin" className="regular-link">here</Link>.</p>
                <div id="create-account-form-inputs">
                    <label >First name</label>
                    <input type="text" name="first-name"/>
                    <label >Last name</label>
                    <input type="text" name="last-name"/>
                    <label>Email</label>
                    <input type="email" name="email"/>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <input type="submit" value="Create Account" className="button"/>
            </form>
        </body>
    </div>
    )
}

export default CreateAccountForm;