<script lang="ts">
	import { title, groupByCategory } from '@data/skills';
	import { resolveAsset } from '$lib/data/assets';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import LegalLinks from '@components/Legal/Legal.svelte';
	import Credits from '@components/Credits/Credits.svelte';

	import { isDark } from '$lib/data/assets';

	import { t } from 'svelte-i18n';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;
		result = groupByCategory(query.trim().toLowerCase());
	};
</script>

<SearchPage title={$t('nav.skillset')} on:search={onSearch}>
	{#if result.length === 0}

		<div class="p-10 flex flex-col items-center gap-3 text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-4xl opacity-50" />
			<p class="text-xs tracking-[0.2em] uppercase font-light">
				No matching records found
			</p>
		</div>

	{:else}

		<div class="flex flex-col gap-12 mt-8">

			{#each result as group (group.category.slug)}

				<section class="flex flex-col gap-6">

					<!-- CATEGORY HEADER -->
					<div class="flex items-center gap-4">

						<div class="w-10 h-px bg-[var(--border)] opacity-40" />

						<div class="flex flex-col">
							<p class="text-[11px] tracking-[0.25em] uppercase text-[var(--accent-text)]">
								{group.category.name}
							</p>

							<p class="text-[10px] text-[var(--accent-text)] opacity-60 tracking-wide">
								Skill Registry · {group.items.length} entries
							</p>
						</div>

						<div class="flex-1 h-px bg-[var(--border)] opacity-20" />

					</div>

					<!-- GRID -->
					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

						{#each group.items as skill (skill.slug)}

							<Card
								classes={[
									"relative",
									"cursor-default",
									"border",
									"border-[var(--border)]/60",
									"bg-[var(--card-bg)]",
									"rounded-md",
									"p-4",

									// ✨ motion system (restored + upgraded)
									"transform-gpu",
									"transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
									"hover:-translate-y-[2px]",
									"hover:shadow-md",
									"hover:border-[var(--accent-text)]/25"
								]}
								bgImg={resolveAsset(skill.logo, $isDark)}
								color={skill.color}
							>

								<div class="flex flex-col gap-2">

									<div class="w-8 h-8 opacity-80 grayscale" />

									<p class="text-[12px] tracking-wide text-[var(--tertiary-text)]">
										{$t(skill.name)}
									</p>

								</div>

							</Card>

						{/each}

					</div>

				</section>

			{/each}

		</div>

	{/if}
</SearchPage>

<LegalLinks />
<Credits />