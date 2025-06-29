<script lang="ts">
	import { items, title } from '@data/publications';
	import * as languages from '@data/languages';
	import { onMount } from 'svelte';

	import type { Publication, Language } from '$lib/types';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import PublicationCard from '@components/PublicationCard/PublicationCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import LegalLinks from '@components/Legal/Legal.svelte';

	interface LanguageFilter extends Language {
		isSelected?: boolean;
	}

	// Only include filters that are used in at least one publication
	let filters: Array<LanguageFilter> = languages.languages.filter((lang) => {
		return items.some((publication) =>
			publication.language.some((used) => used.slug === lang.slug)
		);
	});

	let search = '';
	let displayed: Array<Publication> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((lang) => {
			if (lang.slug === slug) {
				lang.isSelected = !isSelected(slug);
			}
			return lang;
		});
	};

	$: {
		displayed = items.filter((publication) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				publication.language.some((lang) =>
					filters.some((filter) => filter.isSelected && filter.slug === lang.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				publication.name.toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;
		if (query) {
			const queryParams = new URLSearchParams(location.search);
			const item = queryParams.get('item');
			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="projects-filters">
		{#each filters as lang}
			<Chip
				active={lang.isSelected}
				classes="text-0.8em"
				on:click={() => onSelected(lang.slug)}
			>
				{lang.name}
			</Chip>
		{/each}
	</div>

	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5">
			{#each displayed as publication}
				<PublicationCard publication={publication} />
			{/each}
		</div>
	{/if}
</SearchPage>

<LegalLinks />

<style lang="scss">
  .projects-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
