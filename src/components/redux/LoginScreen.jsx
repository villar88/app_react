import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../redux/actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const navigate = useNavigate(); 
  const lastPath = localStorage.getItem('lastPath') || '/dashboard';

  const [ formValues ] = useForm({
    email: 'guerrero.nfsmw@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = () => {

    dispatch(startLoginEmailPassword(email, password))

    navigate(lastPath);
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        { !loading && <button onClick={handleLogin}>Login</button>}
        <button onClick={handleGoogleLogin}>Autenticación con google</button>
    </div>
  )
}
