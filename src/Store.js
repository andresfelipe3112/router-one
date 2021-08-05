import { useEffect } from 'react'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import Catalog from './Catalog'
import StoreNavBar from './StoreNavBar'

const Store = () => {
  const { path } = useRouteMatch()
  const { state } = useLocation()
  const history = useHistory()
  const isLoggedIn = false
  useEffect(() => {
    setTimeout(() => {
      if (state.goBackTo) {
        history.push(state.goBackTo)
      }
    }, 3 * 1000)
  }, [state])

  return (
    <div>
      <StoreNavBar />
      <Switch>
        <Route path={`${path}/catalog`}>
          <Catalog />
        </Route>
        <Route path={`${path}/cart`}>Carrito de compras</Route>
        <Route path={path}>Store</Route>
      </Switch>
    </div>
  )
}

export default Store
