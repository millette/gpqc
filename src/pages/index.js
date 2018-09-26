// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { Rollo, Source, Head } from '../components'

export default () => (
  <div>
    <Head />
    <Link to='/by/lic/'>Licenses</Link> <Link to='/by/lng/'>Languages</Link>
    <br />
    <Source />
    <Rollo />
  </div>
)
