// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { Rollo, Source } from '../components'

export default () => (
  <div>
    <Link to='/by/lic/'>Licenses</Link> <Link to='/by/lng/'>Languages</Link>
    <br />
    <Source />
    <Rollo />
  </div>
)
