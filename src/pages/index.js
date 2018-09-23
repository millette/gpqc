// npm
import React from 'react'
import { Link } from 'gatsby'

export default (props) => {
  return (
    <div>
      <ul>
        <li><Link to='/by/lic/'>Licenses</Link></li>
        <li><Link to='/by/lng/'>Languages</Link></li>
        <li><Link to='/nowhere/'>Nowhere</Link></li>
      </ul>
    </div>
  )
}
