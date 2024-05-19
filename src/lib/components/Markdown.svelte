<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-yaml';
	import 'prismjs/components/prism-http';
	import 'prismjs/components/prism-java';
	import 'prismjs/components/prism-c';
	import 'prismjs/components/prism-cpp';
	import 'prismjs/components/prism-kotlin';
	import 'prismjs/components/prism-sql';
	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-groovy';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	export let content: string;

	onMount(() => {
		marked.use(gfmHeadingId());
		marked.use(mangle());

		const sanitizer = createSanitizer(window);

		if (window) {
			const parsed = marked.parse(content);

			container.innerHTML = sanitizer.sanitize(parsed);

			Prism.highlightAllUnder(container);
		}
	});
</script>

<div bind:this={container} class="markdown-container" />
