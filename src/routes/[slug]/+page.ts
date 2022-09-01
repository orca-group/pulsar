import { PULSAR_INSTANCE } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ params }: any) {
	const slug = params.slug;

	if (slug.length !== 8) {
		throw new Error(`Document ID is not long enough; is ${slug.length}, must be 8`);
	}

	const resp: Response = await fetch(`${PULSAR_INSTANCE}/documents/${slug}`);
	const code = await resp.json();

	if (resp.status === 500 || (404 && code.error === 'record not found')) {
		throw new Error(`Could not find document '${slug}'.`);
	}

	const lines = code.payload.content.split('\n');

	return { code: code.payload.content, lines };
}
