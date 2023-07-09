import React from 'react'
import ErrorImg from '../images/errorimg.png'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <>
      <div className="errorContainer">
        <img src={ErrorImg} alt="img" />
        <h3>Looking for something?</h3>
        <p>We're sorry! The Web address you entered is not a functioning page on our site.</p>
        <h3>Go to iCoder Blog's <Link to='/'>Home</Link> Page</h3>
      </div>
    </>
  )
}

export default ErrorPage