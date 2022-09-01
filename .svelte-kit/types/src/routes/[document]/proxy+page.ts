// @ts-nocheck
import { PULSAR_INSTANCE } from '$env/static/public'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ routeId }) {
  console.log(routeId)
  const { document: slug } = data.params

  if (slug.length !== 8) {
    throw new Error(
      `Document ID is not long enough; is ${slug.length}, must be 8`
    )
  }

  const resp: Response = await fetch(
    `${PULSAR_INSTANCE}/api/v1/documents/${slug}`
  )
  const code = await resp.json()

  if (resp.status === 500 || 404 && code.error === 'record not found') {
    throw new Error(`Could not find document '${slug}'.`)
  }

  const lines = code.payload.content.split('\n')

  return { code: code.payload.content, lines }
}
