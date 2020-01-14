import React from 'react'
import { getComponent } from '../utils'

const SingleColumnPromotion = (props) => {
  const { data } = props;

  return (
    <>
      <header>
        {getComponent(data.header.component)}
      </header>

      <h2>{data.heading}</h2>

      <div className="container">
          {data.section1.map((c, i) => getComponent(c.component, c.datapath, c.data))}
      </div>

      <div className="container">
          {data.section2.map((c, i) => getComponent(c.component, c.datapath, c.data))}
      </div>

      <style jsx>{`
        h2 {
          text-align: center
        }
        .container {
          max-width: 1024px;
          margin: auto;
          text-align: center;
        }
    `}</style>
    </>
  )
}

export default SingleColumnPromotion
