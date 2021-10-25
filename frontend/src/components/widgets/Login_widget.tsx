import firebase from 'firebase/compat/app'
import Router from 'next/router'
import { useEffect } from 'react'

const Login = () => {
  const auth = firebase.auth()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && Router.push('/')
    })
  }, [])
  const handleFormSubmit = async e => {
    const email = e.target.elements.email?.value
    const password = e.target.elements.password?.value
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      alert(err.message)
    }

    console.log(email, password)
  }
  return (
    <div>
      <div>
        <h1>Log in to your account 🔐</h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your Password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
