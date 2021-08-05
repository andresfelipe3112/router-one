import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: '/store', state: { goBackTo: '/home' } }}>
            Store
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/home', state: { ref: 'Promicion 20%' } }}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
