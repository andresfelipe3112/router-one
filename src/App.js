import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Home'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/store'>
          Store <br />
          Hola mundo!
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
