<script context="module" lang="ts">
  export async function preload(page) {
    const { document: slug } = page.params

    const resp = await this.fetch(
      `https://api.spaceb.in/api/v1/documents/${slug}`
    )
    const code = await resp.json()

    return { code: code.payload.content }
  }
</script>

<script lang="ts">
  export let code
</script>

<main>
  <div id="line-numbers">&gt;</div>
  <pre><code>{code}</code></pre>
</main>
