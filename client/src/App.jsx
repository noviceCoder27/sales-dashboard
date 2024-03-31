import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import ProtectedRoutes from '../utils/ProtectedRoutes'
import ProductList from './pages/ProductList'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path = "/dashboard" element = {<ProtectedRoutes><Dashboard /></ProtectedRoutes>}/>
        <Route path = "/auth" element = {<Auth />} />
        <Route path = "/list" element = {<ProtectedRoutes><ProductList /></ProtectedRoutes>} />
      </Routes>
    </Router>
  )
}

export default App
