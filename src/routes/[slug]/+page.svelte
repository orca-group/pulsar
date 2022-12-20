<script lang="ts">
  import Book from '$lib/components/icons/Book.svelte';
  import Home from '$lib/components/icons/Home.svelte';
  import Octocat from '$lib/components/icons/Octocat.svelte';
  import Spacebin from '$lib/components/icons/Spacebin.svelte';

  interface Data {
    lines: number[];
    code: string;
  }

  /** @type {import('./$types').PageData} */
  export let data: Data;
</script>

<header>
  <Spacebin />
  <a id="home" href="/" aria-label="Home">
    <Home />
  </a>
  <a id="github" href="https://github.com/spacebin-org" aria-label="Spacebin Github">
    <Octocat />
  </a>
  <a id="wiki" href="https://docs.spaceb.in" aria-label="Spacebin Documentation">
    <Book />
  </a>
</header>

<main>
  <div id="line-numbers">
    {#each data.lines as _, i}
      <div>{i + 1}</div>
    {/each}
  </div>

  <pre><code>{data.code}</code></pre>
</main>
