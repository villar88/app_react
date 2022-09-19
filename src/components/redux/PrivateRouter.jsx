import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRouter = ({isAuthenticated}) => {
    const location = useLocation();
    localStorage.setItem('lastPath', location.pathname);
    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}