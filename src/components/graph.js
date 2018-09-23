// npm
import React from 'react'
import VegaLite from 'react-vega-lite'

export default ({ values }) => {
  const spec = {
    width: 300,
    height: 300,
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
          op: 'mean',
          order: 'descending',
          field: 'personnes'
        },
        title: 'el-title-2',
        field: 'label',
        type: 'nominal'
      },
      x: {
        title: 'Projets',
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
