import React, { useContext } from 'react'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardScreen } from './DashboardScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { UsersScreen } from './UsersScreen';

export const AuthRouter = () => {
  const { user } = useContext(AuthContext);
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />}/>

        <Route element={ <PublicRouter isAuthenticated={user.logged} /> }>
          <Route path="login" element={ <LoginScreen/> }/>
        </Route>
        
        <Route element={ <PrivateRouter isAuthenticated={user.logged}/> }>
          <Route path="dashboard" element={ <DashboardScreen/> }/>
          <Route path="users" element={ <UsersScreen/> }/>
        </Route>

        <Route path="*" element={ <Navigate to={'/'}/> } />
      </Routes>
  )
}
