import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './provider/AuthProvider'
const ProtectedRoute = ({ children, ...props }) => {
  const { user } = useAuth()

  if (user) {
    return <Route {...props}> {children} </Route>
  }

  return <Redirect to='/home' />
}

export default ProtectedRoute
