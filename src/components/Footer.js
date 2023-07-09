import React from 'react'
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer>
        <hr />
        <h1 style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>Copyright &#169; iCoder Blog | {date} - {date + 1}</h1>
      </footer>
    </>
  )
}

export default Footer