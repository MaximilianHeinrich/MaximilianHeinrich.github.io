import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Gymnasium',
		description: '',
		location: 'Königsbrunn',
		logo: Assets.GymKoe,
		name: '',
		organization: 'Gymnasium Königsbrunn',
		period: {
			from: new Date(2014, 8, 15),
			to: new Date()
		},
		shortDescription: '',
		slug: 'gymnasium',
		subjects: ['Computer Science', 'English', 'Math', 'German', '...']
	},
	{
		degree: 'A-Level',
		description: '',
		location: 'Königsbrunn',
		logo: Assets.GymKoe,
		name: '',
		organization: 'Gymnasium Königsbrunn',
		period: { from: new Date(2027, 3) },
		shortDescription: '',
		slug: 'a-level',
		subjects: ['Java', 'Computer Science', 'Math', 'German', 'English', 'Economy and law']
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];
