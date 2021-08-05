import { Link, useRouteMatch } from 'react-router-dom'

const StoreNavBar = () => {
  const { url } = useRouteMatch()
  return (
    <nav>
      <ul>
        <li>
          <Link to={`${url}/catalog`}>Catalog</Link>
        </li>
        <li>
          <Link to={`${url}/cart`}>Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default StoreNavBar
