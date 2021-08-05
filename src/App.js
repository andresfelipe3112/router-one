import './App.css'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Store from './Store'

function App () {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path='/store'>
          <Store />
        </Route>
        <Route path='/home'>
          <Home /> {/* La prop especial children  */}
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
