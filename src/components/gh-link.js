// npm
import React from 'react'

export default ({ to, children }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={`https://github.com/${to}`}
  >
    {children}
  </a>
)
