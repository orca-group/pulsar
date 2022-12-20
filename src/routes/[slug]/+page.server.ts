import { PULSAR_INSTANCE } from '$env/static/public';

interface DocumentResponse {
  id: string;
  content: string;
  extension: string;
  created_at: number;
  updated_at: number;
}

interface APIResponse {
  error: string;
  payload: DocumentResponse;
  // Technically API responses also include a status field but since that's being removed we don't care
}

export async function load({ params }) {
  const slug = params.slug;

  // @todo Support other ID lengths by using the /config route
  if (slug.length !== 8) {
    throw new Error(`Document ID is not long enough; is ${slug.length}, must be 8`);
  }

  const resp = await fetch(`${PULSAR_INSTANCE}/documents/${slug}`);
  const code: APIResponse = await resp.json();

  if (resp.status === 500 || (404 && code.error === 'record not found')) {
    throw new Error(`Could not find document '${slug}'.`);
  }

  const lines = code.payload.content.split('\n');

  return { code: code.payload.content, lines };
}
