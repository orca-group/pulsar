<script lang="ts">
  import { onMount } from 'svelte'

  onMount(() => {
      document.querySelector('textarea').addEventListener('keydown', function (e) {
        if (e.key.toLowerCase() === 'tab') {
          e.preventDefault()

          const start = this.selectionStart
          const end = this.selectionEnd

          // set textarea value to: text before caret + tab + text after caret
          this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end)

          // move caret to right position
          this.selectionStart = this.selectionEnd = start + 1;
        }
    })
  })
</script>

<main>
  <div id="line-numbers">&gt;</div>
  <textarea spellcheck="false"></textarea>
</main>
