import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const fakeAuthBackend = {
  signIn: callback => {
    setTimeout(callback, 1000)
  },
  signOut: callback => {
    setTimeout(callback, 1000)
  }
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const signIn = cb => {
    fakeAuthBackend.signIn(() => {
      setUser('Ash Ketchup')
      cb()
    })
  }

  const signOut = cb => {
    fakeAuthBackend.signOut(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signIn,
    signOut
  }
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}> {children} </authContext.Provider>
}

export const useAuth = () => useContext(authContext)
