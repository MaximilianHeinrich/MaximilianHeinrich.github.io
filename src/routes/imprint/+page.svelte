<script lang="ts">
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { useTitle } from '$lib/utils/helpers';

	const title = 'Imprint';

	const contact = {
		name: 'Maximilian Andreas Heinrich',
		street: 'Lessingstraße 11',
		city: '86343 Königsbrunn',
		phone: '+49 8231 6093861',
		email: 'email@maximilian.software',
		source: 'https://www.e-recht24.de'
	};

</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div
	class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px">
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left">{title}</MainTitle>

		<p
			class="text-[var(--tertiary-text)] text-center md:text-left text-[1.1em] font-extralight leading-relaxed p-y-10px">
			{contact.name}<br />
			{contact.street}<br />
			{contact.city}
		</p>

		<h2 class="text-left text-[1.3em] font-semibold p-t-20px">Contact</h2>
		<p class="text-[var(--tertiary-text)] text-left text-[1.05em] font-light leading-relaxed p-y-5px">
			Telephone:
			<a
				class="decoration-none text-[var(--accent-text)]"
				href={`tel:${contact.phone}`}
			>
				{contact.phone}<br />
			</a>
			E-Mail:
			<a
				class="decoration-none text-[var(--accent-text)]"
				href={`mailto:${contact.email}`}
			>
				{contact.email}
			</a>
		</p>

		<p class="text-[var(--tertiary-text)] text-left text-[0.95em] font-light p-t-15px">
			Source:
			<a
				class="decoration-none text-[var(--accent-text)]"
				href={contact.source}
				rel="noreferrer"
				target="_blank"
			>
				e-recht24.de
			</a>
		</p>
	</div>
</div>