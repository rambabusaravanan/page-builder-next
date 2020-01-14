import React from 'react'
import { getComponent } from '../utils'

const TwoColumnPromotion = (props) => {
  const { data } = props;

  return (
    <>
      <header>
        {getComponent(data.header.component)}
      </header>

      <h2>{data.heading}</h2>

      <div className="container">
        <div className="column column-left">
          {data.columnLeft.map((c, i) => getComponent(c.component, c.datapath, c.data))}
        </div>

        <div className="column column-right">
          {data.columnRight.map((c, i) => getComponent(c.component, c.datapath, c.data))}
        </div>
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
        }
        .container {
          max-width: 1024px;
          margin: auto;
        }
        .column {
          display: inline-block;
          vertical-align: top;
        }
        .column-left {
          width: 70%;
        }
        .column-right {
          width: 30%;
        }
    `}</style>
    </>
  )
}

export default TwoColumnPromotion
