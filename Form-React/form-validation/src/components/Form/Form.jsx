import './form.css'
import Input from '../Input/Input';
import { useContext, useRef } from 'react';
import { FormContext } from '../providers/FormContext';

import validateMail from '../../helpers/validateMail';
import validatePassword from '../../helpers/validatePassword';

function Form() {

    const {formInput} = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleInvalidEmail();
        handleInvalidPassword();
    }

    const handleInvalidEmail = () => {
        if(!validateMail(formInput.email)) {
            emailRef.current.isShake();
            emailRef.current.setInvalid();
        }
    }

    const handleInvalidPassword = () => {
        if(!validatePassword(formInput.password)) {
            passwordRef.current.isShake();
            passwordRef.current.setInvalid();
        }
    }

    return (
        <form className='form-wrapper' onSubmit={handleFormSubmit}noValidate>
            <h1>Form Application</h1>

            <div className="mail-wrapper wrapper">
                <label htmlFor="mail">Mail</label>
                <Input
                 type='email' 
                 name="mail" 
                 id="mail" 
                 placeholder='Mail'
                 label="email"
                 ref={emailRef}
                 checkOnBlur={handleInvalidEmail}
                />
            </div>

            <div className='password-wrapper wrapper'>
                <label htmlFor="password">Password</label>
                <Input
                 type='password' 
                 name="password" 
                 id="password" 
                 placeholder='Password'
                 label = "password"
                 ref={passwordRef}
                 checkOnBlur={handleInvalidPassword}
                />
            </div>
            
            <div className='submit-btn'>
                <button type='submit' >
                    Submit
                </button>
            </div>
        
        </form>
    )
}

export default Form;