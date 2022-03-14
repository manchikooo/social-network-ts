import React from 'react';
import {Formik, Form} from "formik";

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
             <div>
                 <input placeholder='login'/>
             </div>
             <div>
                 <input placeholder='password'/>
             </div>
             <div>
                 <input type='checkbox'/>
             </div>
             <div>
                 <button>Login</button>
             </div>
            </form>
        </div>
    );
};

export const LoginForm = () => {

    const initialValues = {
        email: '',
        password: '',
    }


    return (
        <div>

        </div>
    )
}
