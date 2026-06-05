import { items } from '@data/skills';

export function entries() {
	return items.map((i) => ({ slug: i.slug }));
}

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = items.find((item) => {
			return item.slug === params.slug;
		});

		return { skill };
	}
}
