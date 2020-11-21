<script context="module" lang="ts">
  export async function preload(page) {
    const { document: slug } = page.params

    const resp: Response = await this.fetch(
      `http://127.0.0.1:9000/api/v1/documents/${slug}`
    )

    const code = await resp.json()
    const lines = code.payload.content.split('\n')

    return { code: code.payload.content, lines }
  }
</script>

<script lang="ts">
  export let code
  export let lines
</script>

<main>
  <div id="line-numbers">
    {#each lines as _, i}
      <div>{i + 1}</div>
    {/each}
  </div>

  <pre><code>{code}</code></pre>
</main>
