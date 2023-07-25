import React, { useContext,useImperativeHandle,useState, useRef, useEffect} from "react";
import { FormContext } from "../providers/FormContext";
import './Input.css'

function Input ({type,name,id,placeholder,checkOnBlur,label},ref) {
    const {formInput, setFormInput} = useContext(FormContext);
    const [text, setText] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [shake, setShake] = useState(false);

    const localRef = useRef(null);

    useEffect(() => {
        setIsValid(true)
        setShake(false)
    },[text])

    useImperativeHandle(ref, () => {
        return {
            focus: () => localRef.current.focus(),
            setInvalid: () => setIsValid(false),
            isShake: () => setShake(true)
        }
    }, []);

    return (
        <>
            <input 
                className={`${(!isValid) ? "error-input" : ""} ${(shake) ? "shake" : ""}`}
                type={type}
                name={name} 
                id={id} 
                placeholder={placeholder}
                value={text}
                onBlur={checkOnBlur}
                onChange={(e) => {
                    setText(e.target.value)
                    setFormInput({...formInput, [label]: e.target.value})
                }}
                ref={localRef}
            />
            <p className="invalid">{(!isValid) ? `${label} is invalid` : ''}</p>
        </>
    )
}


export default React.forwardRef(Input);