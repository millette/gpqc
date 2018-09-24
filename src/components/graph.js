// npm
import React from 'react'
import VegaLite from 'react-vega-lite'

export default ({ title, whole }) => {
  const values = whole.map(label => ({
    personnes: 1,
    label
  }))

  const spec = {
    width: 350,
    height: 450,
    config: {
      autosize: 'pad'
    },
    mark: 'bar',
    encoding: {
      color: {
        sort: 'ascending',
        field: 'label',
        type: 'nominal',
        legend: false
      },
      y: {
        sort: {
          op: 'count',
          order: 'descending',
          field: 'personnes'
        },
        title,
        field: 'label',
        type: 'nominal'
      },
      x: {
        title: 'Projets',
        aggregate: 'count',
        field: 'personnes',
        type: 'quantitative'
      }
    }
  }

  return (
    <div>
      <h2>Graph</h2>
      <VegaLite spec={spec} data={{ values }} />
    </div>
  )
}
