// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { Rollo, Head } from '../components'

const oups = 'Nothing to see here.'

export default () => (
  <div>
    <Head subtitle={oups} />
    <h1>404 Not found</h1>
    <p>{oups}</p>
    <Link to='/'>Home</Link>
    <Rollo />
  </div>
)
