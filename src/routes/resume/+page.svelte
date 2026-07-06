<script>
	import { data } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import LegalLinks from '@components/Legal/Legal.svelte';
	import Credits from '@components/Credits/Credits.svelte';
	import TabTitle from '@components/TabTitle.svelte';

	import { t } from 'svelte-i18n';
</script>

<TabTitle title={$t('nav.resume')} />

<CommonPage title={$t('nav.resume')}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>
<LegalLinks />
<Credits />

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
