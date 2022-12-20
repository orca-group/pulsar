<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { PULSAR_INSTANCE } from '$env/static/public';
  import Book from '$lib/components/icons/Book.svelte';
  import Octocat from '$lib/components/icons/Octocat.svelte';
  import Save from '$lib/components/icons/Save.svelte';
  import Spacebin from '$lib/components/icons/Spacebin.svelte';

  onMount(() => {
    // Fix tab key in textarea
    document.querySelector('textarea')?.addEventListener('keydown', function (e) {
      if (e.key.toLowerCase() === 'tab') {
        e.preventDefault();

        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Set textarea value to: text before caret + tab + text after caret
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

        // Move caret to right position
        this.selectionStart = this.selectionEnd = start + 1;
      }
    });

    const saveButton = document.querySelector('button#save');

    saveButton?.addEventListener('click', async function (e) {
      const textarea = document.querySelector('textarea');

      if (textarea?.value !== '') {
        const resp: Response = await window.fetch(`${PULSAR_INSTANCE}/documents/`, {
          method: 'POST',
          body: JSON.stringify({
            content: textarea?.value,
            extension: 'txt',
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const body = await resp.json();

        if (resp.status === 201 && body.payload.id) {
          await goto(`/${body.payload.id}`);
        }
      }
    });
  });
</script>

<header>
  <Spacebin />
  <button id="save" aria-label="Save Document">
    <Save />
  </button>
  <a id="github" href="https://github.com/spacebin-org" aria-label="Spacebin Github">
    <Octocat />
  </a>
  <a id="wiki" href="https://docs.spaceb.in" aria-label="Spacebin Documentation">
    <Book />
  </a>
</header>

<main>
  <div id="line-numbers">
    <div>&gt;</div>
  </div>

  <textarea id="textarea" spellcheck={false} />
</main>
