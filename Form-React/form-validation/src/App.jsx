import './App.css'
import Form from './components/Form/Form'
import { FormContext } from './components/providers/FormContext'
import { useState } from 'react'


function App() {
  const[formInput, setFormInput] = useState({email:"", password:""});
  return (
    <>
      <FormContext.Provider value={{formInput, setFormInput}}>
        <Form/>
      </FormContext.Provider>
    </>
  )
}

export default App;
