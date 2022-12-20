/// <reference types="@sveltejs/kit" />

declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

declare module '$env/static/public' {
  export const PULSAR_INSTANCE: string;
}
