// npm
import React from 'react'

// self
import { GHLink } from '.'

const { repository } = require('../../package.json')

export default () => <GHLink to={repository}>Source</GHLink>
