import { error } from '@sveltejs/kit';
// eslint-disable-next-line import/extensions
import { PULSAR_INSTANCE } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const { slug } = params;

  if (slug.length !== 8) {
    throw error(400, `Document ID is not long enough; is ${slug.length}, must be 8`);
  }

  const resp: Response = await fetch(`${PULSAR_INSTANCE}/documents/${slug}`);
  const code = await resp.json();

  if (resp.status === 500 || (404 && code.error === 'record not found')) {
    throw error(404, `Could not find document '${slug}'.`);
  }

  const lines = code.payload.content.split('\n');

  return { code: code.payload.content, lines };
}
