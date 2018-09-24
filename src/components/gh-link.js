// npm
import React from 'react'

// self
import { External } from '../components'

export default ({ to, children }) => (
  <External to={`https://github.com/${to}`}>{children}</External>
)
