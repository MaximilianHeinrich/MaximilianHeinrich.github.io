<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	export let content = '';

	let container: HTMLDivElement;

	function render() {
		if (!container || !content) return;

		marked.use(gfmHeadingId());
		marked.use(mangle());

		const sanitizer = createSanitizer(window);

		const parsed = marked.parse(content);
		container.innerHTML = sanitizer.sanitize(parsed);

		Prism.highlightAllUnder(container);
	}

	onMount(() => {
		render();
	});

	$: if (content) {
		render();
	}
</script>

<div bind:this={container} class="markdown-container" />