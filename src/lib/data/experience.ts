import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'dasshept',
		company: 'DasShept',
		description: 'DasShept has been around since 2022.\n' +
			'                contact was through the Mine-Build.de (now Fynncraft.de) server network. There\n' +
			'                we worked side by side on many large and small projects. After some time, we came up with\n' +
			'                the idea of DasShept to intensify our friendship and our working relationship. Since then\n' +
			'                one project followed the next, we started with a Fiverr account and sold commissioned work.\n' +
			'                work, along the way we started our challenge plugin JUtils, which we have been working on ever since.\n' +
			'                have been working on ever since. Over time, we started working with personalities like Kenjih. If you would like to\n' +
			'                would like to work with us, please feel free to contact us!\n',
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
		shortDescription: 'Custom Minecraft Solutions for everyone.'
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
];

export const title = 'Experience';
