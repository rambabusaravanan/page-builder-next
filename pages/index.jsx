// import { useRouter } from 'next/router'
import { getLayout, fetchData } from '../utils';

const Post = (props) => {
  // const router = useRouter()
  // const { pathname } = router;
  // const { page } = router.query
  const { page } = props

  const view = getLayout(page.layout, page.data)
  return <>
    {view}

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
    `}</style>
  </>
}

async function getPageJson(route, req) {
  return fetchData('/configs/' + route + '.json', req)
}

Post.getInitialProps = async function ({ req, query }) {
  const page = await getPageJson(query.page, req)

  return { page }
}

export default Post
