// @ts-nocheck
import env from '$env/static/public';
import { error } from '@sveltejs/kit'

/** */
export function load() {
  if (env.PUBLIC_PULSAR_INSTANCE === '') {
    throw error(500, 'PUBLIC_PULSAR_INSTANCE environment variable is not provided.');
  } else {
    return {
      pulsarInstance: env.PUBLIC_PULSAR_INSTANCE,
    }
  }
}
