import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { DashboardScreen } from './DashboardScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { UsersScreen } from './UsersScreen';
import { RegisterScreen } from './RegisterScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from '../../redux/actions/auth';
import { startLoadingNotes } from '../../redux/actions/notes';

export const AuthRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * Metodo para mantener la autenticación activa asi se recargue la aplicación.
   */
  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged( auth, async (user) => {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        
        dispatch(startLoadingNotes(user.uid));
      }else{
        setIsLoggedIn(false);
      }

      setChecking(false);
    })
  }, [dispatch, setChecking]);

  if(checking){
    return (
      <h1>Espere un momento por favor...</h1>
    );
  }
  
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />}/>

        <Route element={ <PublicRouter isAuthenticated={isLoggedIn} /> }>
          <Route path="login" element={ <LoginScreen/> }/>
          <Route path="register" element={ <RegisterScreen/> } />
        </Route>
        
        <Route element={ <PrivateRouter isAuthenticated={isLoggedIn}/> }>
          <Route path="dashboard" element={ <DashboardScreen/> }/>
          <Route path="users" element={ <UsersScreen/> }/>
        </Route>

        <Route path="*" element={ <Navigate to={'/'}/> } />
      </Routes>
  )
}
