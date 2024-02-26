import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'dasshept',
		company: 'Self-employed',
		description: 'Custom Minecraft Solutions for everyone.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: {
			from: new Date(2022, 1),
		},
		skills: getSkills('java', 'spring', 'postgres'),
		name: 'Backend Developer',
		color: 'red',
		links: [
			{
				to: 'https://dasshept.de',
				label: 'Website',
				newTab: true
			}
		],
		logo: Assets.DasShept,
		shortDescription: ''
	},
	{
		slug: 'norisk',
		company: 'Norisk',
		description: 'Currently, there is no set release date. For updates on the current state of the client, check out their discord or NoRisk\'s YouTube channel.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: {
			from: new Date(2023, 5, 3),
			to: new Date(2024, 0, 5)
		},
		skills: getSkills('kotlin', 'java', 'ktor', 'json'),
		name: 'Software Developer',
		color: 'blue',
		links: [
			{
				to: 'https://github.com/NoriskClient',
				label: 'GitHub'
			},
			{
				to: 'https://norisk.gg',
				label: 'Website'
			}
		],
		logo: Assets.NoRisk,
		shortDescription: 'Minecraft PvP Client'
	}
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: ''
	// }
];

export default MY_EXPERIENCES;
