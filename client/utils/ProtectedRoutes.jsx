import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const [cookies] = useCookies(['accessToken']);
    return cookies?.accessToken ? children :   <Navigate to = "/auth" />
}

export default ProtectedRoutes
