import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Gymnasium',
		description: '',
		location: 'Königsbrunn, Germany',
		logo: Assets.GymKoe,
		name: '',
		organization: 'Gymnasium Königsbrunn',
		period: { from: new Date(2014, 8, 15) },
		shortDescription: '',
		slug: 'gymnasium',
		subjects: ['Computer Science', 'English', 'Math', 'German', '...']
	},
	{
		degree: 'A-Level',
		description: '',
		location: 'Königsbrunn, Germany',
		logo: Assets.GymKoe,
		name: '',
		organization: 'Gymnasium Königsbrunn',
		period: { from: new Date(2027, 3) },
		shortDescription: '',
		slug: 'a-level',
		subjects: ['Java', 'Computer Science', 'Math', 'German', 'English', 'Economy and law']
	}
];

export const title = 'Education';
