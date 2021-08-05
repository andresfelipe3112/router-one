import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const { hash, pathname, search, state, key } = useLocation()
  console.log(hash, pathname, search, state, key)
  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to='/store'>Learn React</Link>
        </header>
      </div>
    </div>
  )
}

export default Home
