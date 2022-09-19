import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../../redux/actions/auth';
import { removeError, setError } from '../../redux/actions/ui';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector( state => state.ui );

  const [ formValues ] = useForm({
    name: 'Francisco Guerrero',
    email: 'guerrero.nfsmw@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = () => {
    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
  }
  /**
   * Para validar formularios se debe instalar la siguiente dependencia:
   * npm i validator
   */
  const isFormValid = () => {
    if(name.trim().length === 0){
      dispatch(setError('Name is required'));
      return false;
    }else if(!validator.isEmail( email )){
      dispatch(setError('Email is not valid'));
      return false;
    }else if(password !== password2 && password.length < 5){
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div>
        <h1>RegisterScreen</h1>
        <hr />
        { !loading && <button onClick={handleRegister}>Register</button>}
        <hr />
        { msgError && <p>{ msgError }</p>}
    </div>
  )
}
