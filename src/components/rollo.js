// npm
import React from 'react'

// self
import { External } from '../components'
import logo from '../images/logo.png'

const style = {
  marginTop: '-2rem',
  float: 'right',
  width: '4rem'
}

export default () => (
  <div>
    A <External to='http://dev.rollodeqc.com/'>RoLLodeQc</External> project by{' '}
    <External to='http://robin.millette.info/'>Robin Millette</External>
    <External to='http://dev.rollodeqc.com/'>
      <img style={style} src={logo} alt='Logo RoLLodeQc' />
    </External>
  </div>
)
