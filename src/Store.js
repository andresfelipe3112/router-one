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
