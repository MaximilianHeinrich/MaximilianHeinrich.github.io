import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'A-Level',
		description: '',
		location: 'Königsbrunn, Germany',
		logo: Assets.GymKoe,
		name: '',
		organization: 'Gymnasium Königsbrunn',
		period: { from: new Date(2027, 5) },
		shortDescription: '',
		slug: 'a-level',
		subjects: ['Computer Science', 'Math (e.A)', 'German (e.A)', 'English (e.A)', 'Economy and Law']
	},
	{
		degree: 'Certificate for Essential Career Skills for Investment Banking and Finance',
		description: '',
		location: 'edx',
		logo: Assets.NYIF,
		name: '',
		organization: 'New York Institute of Finance',
		period: { from: new Date(2026, 4) },
		shortDescription: '',
		slug: 'nyif',
		subjects: ['Investment Banking']
	},
	{
		degree: 'AP® Microeconomics',
		description: '',
		location: 'edx',
		logo: Assets.MIT,
		name: '',
		organization: 'MIT',
		period: {
			from: new Date(2026, 4),
			expected: new Date(2026, 7)
		},
		shortDescription: '',
		slug: 'macroeconomics',
		subjects: ['Microeconomics']
	}
];

export const title = 'Education';
