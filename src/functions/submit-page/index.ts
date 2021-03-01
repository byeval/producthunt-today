import fetch from 'node-fetch'
import {
  startOfToday,
  startOfYesterday,
  endOfYesterday,
  endOfToday,
} from 'date-fns'
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
  timeout: 30000
})

const PH_API = 'https://api.oneshoot.me/v1/graphql'

function getDuration() {
  const now = new Date()
  const hour = now.getHours()

  if (hour < 15) {
    return {
      postedBefore: endOfYesterday(),
      postedAfter: startOfYesterday(),
    }
  }

  return {
    postedBefore: endOfToday(),
    postedAfter: startOfToday(),
  }
}

const data = {
  operationName: 'getPosts',
  variables: {
    after: null,
    featured: true,
    ...getDuration(),
  },
  query: `
    query getPosts(
      $after: String = null
      $featured: Boolean = true
      $postedBefore: DateTime = null
      $postedAfter: DateTime = null
    ) {
      posts(
        after: $after
        featured: $featured
        postedBefore: $postedBefore
        postedAfter: $postedAfter
      ) {
        edges {
          node {
            id
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
}

exports.main = async function graphql() {
  try {
    const res = await fetch(PH_API, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const {
      data: { posts },
    } = await res.json()

    if (posts) {
      const pages = posts.edges
        .map((item: any) => item.node.id)
        .map((id: string) => ({
          path: 'pages/item/index',
          query: `id=${id}`,
        }))

      await cloud.openapi.search.submitPages({ pages })
    }
  } catch (err) {
    console.log(err)
  }
}
