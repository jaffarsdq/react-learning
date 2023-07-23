import { useState , useRef, useEffect} from 'react';
import './form.css'
import validatePassword from '../helpers/validatePassword';
import validateMail from '../helpers/validateMail';

function Form() {

    const exampleRef = useRef('abc');

    console.log(exampleRef);


    const [formValues, setFormValues] = useState({
        mail:"",
        password:""
    })

    
    const handlePasswordValidation = () => {
        const password = formValues.password;
        if(!validatePassword(password)) {
            console.log("password doesn't contain required parameters")
        }
    }

    const handleMailValidation = () => {
        const mail = formValues.mail;
        if(!validateMail(mail)) {
            console.log("mail doesn't contain required parameters")
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleMailValidation();
        handlePasswordValidation();
        console.log(formValues)
        
    }

    return (
        <form className='form-wrapper' onSubmit={handleFormSubmit}>
            <h1>Form Application</h1>

            <div className="mail-wrapper wrapper">
                <label htmlFor="mail">Mail</label>
                <input 
                type='text' 
                name="mail" 
                id="mail" 
                placeholder='Mail'
                value={formValues.mail}
                onChange={(e)=> setFormValues({...formValues,mail: e.target.value})}
                />
            </div>

            <div className='password-wrapper wrapper'>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Password'
                value={formValues.password}
                onChange={(e)=> setFormValues({...formValues,password: e.target.value})}
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