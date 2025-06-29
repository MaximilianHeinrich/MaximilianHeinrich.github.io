<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Publication } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';

	export let publication: Publication;
	$: months = countMonths(publication.period.from, publication.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	$: period = `${getTimeDiff(
		publication.period.from,
		publication.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	)}`;
	$: from = `${getMonthName(publication.period.from.getMonth())} ${publication.period.from.getFullYear()}`;
	$: to = publication.period.to
		? `${getMonthName(publication.period.to.getMonth())} ${publication.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={publication.color} href={`${base}/publications/${publication.slug}`}>
	<CardLogo alt={publication.name} src={getAssetURL(publication.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={publication.name} />
		<div class="row">
			{#each publication.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
		<p>{publication.type}</p>
		<p>{period}</p>
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"
		>
			{publication.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each publication.language as lang}
			<ChipIcon
				logo={getAssetURL(lang.logo)}
				name={lang.name}
				href={``}
			/>
		{/each}
	</div>
</Card>
