import dynamic from 'next/dynamic'
import fetch from "isomorphic-unfetch"

// layouts
const TwoColumnPromotion = dynamic(() => import('../layouts/TwoColumnPromotion'))
const SingleColumnPromotion = dynamic(() => import('../layouts/SingleColumnPromotion'))

// components
const Nav = dynamic(() => import('../components/Nav'))
const Tile = dynamic(() => import('../components/Tile'))


export function getLayout(layout, data) {
  switch (layout) {
    case "layouts/TwoColumnPromotion":
      return <TwoColumnPromotion data={data} />
    case "layouts/SingleColumnPromotion":
      return <SingleColumnPromotion data={data} />
  }
  return <></>
}

export function getComponent(name, datapath, props = {}) {
  switch (name) {
    case "components/Nav":
      return <Nav {...props} datapath={datapath} />
    case "components/Tile":
      return <Tile {...props} datapath={datapath} />
  }
  return <></>
}

export async function fetchData(url, req) {
  const baseUrl = req ? `http://${req.headers.host}` : '';
  const res = await fetch(baseUrl + url)
  return await res.json()
}
