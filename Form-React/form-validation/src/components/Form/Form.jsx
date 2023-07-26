import './form.css'
import Input from '../Input/Input';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../providers/FormContext';

import validateMail from '../../helpers/validateMail';
import validatePassword from '../../helpers/validatePassword';

function Form() {

    const {formInput} = useContext(FormContext);
    const [step, setStep] = useState(0);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null);

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

    if(step == 0) {
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
                     key={1}
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
                     key={2}
                     checkOnBlur={handleInvalidPassword}
                    />
                </div>
                
                <div className="buttons">
                    <div className='submit-btn'>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>

                    <div className='next-btn'>
                        <button type='button' onClick={() => setStep(step+1)} >
                            Next
                        </button>
                    </div>
                </div>
            
            </form>
        )
    } else if(step == 1) {
        return (
            <form className='form-wrapper' onSubmit={handleFormSubmit}noValidate>
                <h1>Form Application</h1>
    
                <div className="mail-wrapper wrapper">
                    <label htmlFor="username">Username</label>
                    <Input
                     type='text' 
                     name="username" 
                     id="username" 
                     placeholder='User name'
                     label="username"
                     ref={usernameRef}
                     key={3}
                     checkOnBlur={handleInvalidEmail}
                    />
                </div>
                
                <div className="buttons">
                    <div className='previous-btn'>
                        <button onClick={() => setStep(step-1)} >
                            Previous
                        </button>
                    </div>


                    <div className='submit-btn'>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>
                
                    <div className='next-btn'>
                        <button onClick={() => setStep(step+1)} >
                            Next
                        </button>
                    </div>
                </div>
            </form>
        )
    } else if(step == 2) {
        return (
            <form className='form-wrapper' onSubmit={handleFormSubmit}noValidate>
                <h1>Form Application</h1>
    
                <div className="mail-wrapper wrapper">
                    <label htmlFor="address">Address</label>
                    <Input
                     type='address' 
                     name="address" 
                     id="address" 
                     placeholder='Address'
                     label="address"
                     ref={addressRef}
                     key={4}
                     checkOnBlur={handleInvalidEmail}
                    />
                </div>

                <div className="buttons">
                    <div className='previous-btn'>
                        <button onClick={() => setStep(step-1)}>
                            Previous
                        </button>
                    </div>
                    
                    <div className='submit-btn'>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>
                </div>
            
            </form>
        )
    }
}

export default Form;