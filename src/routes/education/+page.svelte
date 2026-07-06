<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';

	import { items, title } from '@data/education';
	import type { Education } from '$lib/types';

	import LegalLinks from '@components/Legal/Legal.svelte';
	import Credits from '@components/Credits/Credits.svelte';

	import { isDark, resolveAsset } from '$lib/data/assets';

	import { t } from 'svelte-i18n';

	let search = '';
	let result: Array<Education> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search.toLowerCase();

		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) ||
				it.name.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.subjects.some((sub) => sub.toLowerCase().includes(s))
			);
		});
	};

	const formatMonthYear = (date: Date | string) => {
		const d = new Date(date);
		return d.toLocaleDateString('en-US', {
			month: 'short',
			year: 'numeric'
		});
	};

	const formatPeriod = (from: Date, to?: Date, expected?: Date) => {
		const start = formatMonthYear(from);

		if (to) return `${start} – ${formatMonthYear(to)}`;
		if (expected) return `${start} – Est. ${formatMonthYear(expected)}`;

		return start;
	};
</script>

<SearchPage on:search={onSearch} {search} title={$t('nav.education')}>
	<div class="mt-12 flex flex-col gap-7 w-full max-w-4xl mx-auto">

		{#if result.length === 0}
			<div class="p-10 flex flex-col items-center gap-3 text-[var(--accent-text)]">
				<UIcon icon="i-carbon-search-locate" classes="text-4xl opacity-60" />
				<p class="text-sm tracking-wide font-light uppercase">
					No matching records found
				</p>
			</div>

		{:else}

			{#each result as education (education.slug)}
				<div class="relative group">

					<Card classes={[
						"relative",
						"pl-14",
						"pr-8",
						"py-8",
						"border",
						"border-[var(--border)]",
						"bg-[var(--card-bg)]",
						"rounded-lg",

						"transform-gpu",
						"transition-transform duration-200 ease-out",

						"group-hover:-translate-y-0.5",

						"group-hover:shadow-md"
						]}>

						<!-- HEADER -->
						<div class="flex justify-between items-start gap-6 mb-6">

							<!-- left: logo + org + degree -->
							<div class="flex items-start gap-4">

								<img
									src={resolveAsset(education.logo, $isDark)}
									alt={$t(education.organization)}
									class="h-10 w-10 rounded-md grayscale opacity-80 bg-white/5 p-1"
								/>

								<div class="flex flex-col gap-1">
									<div class="text-[11px] tracking-[0.22em] uppercase text-[var(--accent-text)]">
										{$t(education.organization)}
									</div>

									<div class="text-[17px] font-light tracking-tight leading-snug">
										{$t(education.degree)}
									</div>
								</div>

							</div>

							<!-- right: location -->
							<div class="text-[11px] text-[var(--accent-text)] font-light whitespace-nowrap pt-1">
								{$t(education.location)}
							</div>

						</div>

						<!-- METADATA -->
						<div
							class="flex flex-col gap-3 text-[11px] text-[var(--accent-text)] mb-7 pt-3 border-t border-[var(--border)]/40">

							<div class="flex justify-between py-0.5">
								<span class="uppercase tracking-wide">Period</span>
								<span class="text-right">
									{formatPeriod(
										education.period.from,
										education.period.to,
										education.period.expected
									)}
								</span>
							</div>

							<div class="flex justify-between py-0.5">
								<span class="uppercase tracking-wide">{$t("education.classification")}</span>
								<span class="text-right">{$t(education.classification)}</span>
							</div>

						</div>

						<!-- SUBJECTS -->
						<div class="flex flex-wrap gap-2.5">
							{#each education.subjects as subject}
								<span
									class="text-[11px] uppercase tracking-wide px-2.5 py-1 border border-[var(--border)] text-[var(--accent-text)] rounded-sm">
									{$t(subject)}
								</span>
							{/each}
						</div>

					</Card>
				</div>
			{/each}

		{/if}
	</div>
</SearchPage>

<LegalLinks />
<Credits />