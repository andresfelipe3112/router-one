import { Link, useHistory, useLocation } from 'react-router-dom'
import { useAuth } from './provider/AuthProvider'

const Home = () => {
  const history = useHistory()
  const { signIn } = useAuth()
  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          <button
            onClick={() => {
              signIn(() => {
                history.push('/store')
              })
            }}
          >
            Login
          </button>
          <Link to='/store'>Learn React</Link>
        </header>
      </div>
    </div>
  )
}

export default Home
