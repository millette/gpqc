// npm
import React from 'react'
import { Helmet } from 'react-helmet'

// self
const { name, description } = require('../../package.json')

const url = `https://millette.github.io/${name}/`
const sitename = 'Québec GitHub Projects'
const t1 = 'Québec GitHub Projects'
const img = `${url}/icons/icon-512x512.png`

// {isBlogPost ? <meta property="og:type" content="article" /> : null}
// export default (props) => (
export default ({ subtitle }) => {
  const title = subtitle ? `${t1} - ${subtitle}` : t1
  return (
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:site' content='@RoLLodeQc' />
      <meta name='twitter:card' content={img} />
      <meta name='twitter:creator' content='@RoLLodeQc' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={img} />
      <meta property='og:url' content={url} />
      <meta name='og:site_name' content={sitename} />
      <meta name='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={img} />
    </Helmet>
  )
}
