import { Link } from 'react-router-dom'

const Home = () => {
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
