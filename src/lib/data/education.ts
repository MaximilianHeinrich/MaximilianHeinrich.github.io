import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'education.high-school.degree',
		description: 'education.high-school.description',
		location: 'education.high-school.location',
		logo: Assets.GymKoe,
		name: 'education.high-school.name',
		organization: 'education.high-school.organization',
		period: { from: new Date(2027, 5) },
		shortDescription: 'education.high-school.shortDescription',
		slug: 'a-level',
		subjects: ['education.high-school.subjects'],
		classification: 'education.classification-types.a-level'
	},
	{
		degree: 'education.nyif.degree',
		description: '',
		location: 'education.nyif.location',
		logo: Assets.NYIF,
		name: '',
		organization: 'education.nyif.organization',
		period: { from: new Date(2026, 4) },
		shortDescription: '',
		slug: 'nyif',
		subjects: ['education.nyif.subjects'],
		classification: 'education.classification-types.certification'
	},
	{
		degree: 'education.mit.degree',
		description: '',
		location: 'education.mit.location',
		logo: Assets.MIT,
		name: '',
		organization: 'education.mit.organization',
		period: {
			from: new Date(2026, 4),
			expected: new Date(2026, 7)
		},
		shortDescription: '',
		slug: 'macroeconomics',
		subjects: ['education.mit.subjects'],
		classification: 'education.classification-types.certification'
	}
];

export const title = 'Education';
