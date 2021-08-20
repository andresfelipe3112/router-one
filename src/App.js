import './App.css'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Store from './Store'
import { useAuth } from './provider/AuthProvider'
import { useEffect } from 'react'
import ProtectedRoute from './ProtectedRoute'

function App () {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <ProtectedRoute path='/store'>
          <Store />
        </ProtectedRoute>
        <Route path='/home'>
          <Home /> {/* La prop especial childrenn */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
