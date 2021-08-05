import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import ProductPage from './ProductPage'

const Catalog = () => {
  const { path } = useRouteMatch()

  const productos = [
    { id: 1, name: 'mesita' },
    { id: 2, name: 'gel para pelo' },
    { id: 3, name: 'RTX 3090' }
  ]
  const list = productos.map(item => (
    <li key={item.id}>
      {' '}
      <Link to={`${path}/${item.id}`}>{item.name}</Link>{' '}
    </li>
  ))

  return (
    <div>
      <Switch>
        <Route path={`${path}/:productId`}>
          <ProductPage />
        </Route>
        <Route path={path}>
          <h3>Catalogo de productos</h3>
          <ul>{list}</ul>
        </Route>
      </Switch>
    </div>
  )
}

export default Catalog
