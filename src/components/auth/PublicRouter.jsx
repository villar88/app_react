import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const PublicRouter = ({isAuthenticated}) => {
    return !isAuthenticated ? <Outlet/> : <Navigate to={'/dashboard'}/>
}

PublicRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}