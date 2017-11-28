import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import LoginJSX from './LoginJSX'

export const Header = ({session, handleLogin}) => {
  let loginMessageJSX = (!session.isLoggedIn && session.loginToken === 'invalid')
    ? <p>Invalid Login</p>
    : null

  return (
    <div>
      <h1>React Redux Starter Kit</h1>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='route--active'>
        Counter
      </Link>
      {' · '}
      <Link to='/dashboard' activeClassName='route--active'>
        Dashboard
      </Link>
      {!session.isLoggedIn && <LoginJSX handleLogin={handleLogin} />}
      {loginMessageJSX}
    </div>
  )
}

export default Header
