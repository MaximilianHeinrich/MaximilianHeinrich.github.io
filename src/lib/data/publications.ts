import Assets from './assets';
import { getLanguages } from './languages';
import type { Publication } from '../types';
import { base } from '$app/paths';

export const items: Array<Publication> = [
	{
		slug: 'quantum-physics',
		color: '#5e95e3',
		description: '',
		shortDescription:
			'Diese Arbeit beleuchtet die Rolle des Zufalls in der Kryptographie und entwickelt einen quantenphysikalischen Ansatz zur Erzeugung echter Zufallszahlen.',
		links: [{ to: 'https://maximilian.software/quantum-physics/arbeiten/zufallsgenerator/index.html', label: 'Website' }],
		logo: Assets.MdBook,
		name: 'Zufallsgenerator',
		period: {
			from: new Date(2025, 1, 6)
		},
		language: getLanguages('ger'),
		type: 'Paper',
		screenshots: []
	}
];

export const title = 'Projects';
