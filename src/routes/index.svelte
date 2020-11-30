<script lang="ts">
  import { goto } from '@sapper/app'
  import { onMount } from 'svelte'

  onMount(() => {
    // Fix tab key in textarea
    document.querySelector('textarea').addEventListener('keydown', function (e) {
      if (e.key.toLowerCase() === 'tab') {
        e.preventDefault()

        const start = this.selectionStart
        const end = this.selectionEnd

        // Set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) +
          "\t" + this.value.substring(end)

        // Move caret to right position
        this.selectionStart = this.selectionEnd = start + 1;
      }
    })

    const saveButton = document.querySelector('button#save')

    saveButton.addEventListener('click', async function (e) {
      const textarea = document.querySelector('textarea')

      if (textarea.value !== "") {
        const resp: Response = await window.fetch(
          `http://127.0.0.1:9000/api/v1/documents/`,
          {
            method: 'POST',
            body: JSON.stringify({
              content: textarea.value,
              extension: 'txt'
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        const body = await resp.json()

        if (resp.status === 201 && body.payload.id) {
          await goto(`/${body.payload.id}`)
        }
      }
    })
  })
</script>

<style>
  #line-numbers {
    z-index: 0;
  }
</style>

<main>
  <div id="line-numbers">
    <div>&gt;</div>
    <div>
      <button id="save">S</button>
    </div>
  </div>

  <textarea spellcheck={false}></textarea>
</main>
