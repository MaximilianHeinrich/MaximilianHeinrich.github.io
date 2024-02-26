import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import jutils from './md/projects/JUtils.md?raw';
import getmad from './md/projects/GetMad.md?raw';
import urlshorter from './md/projects/URLShorter.md?raw';
import snippets from './md/projects/Snippets.md?raw';
import norisk from './md/projects/Snippets.md?raw'; //TODO: Change
import { base } from '$app/paths';

const gh = (file: string) => `${base}/imgs/${file}`;

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'jutils',
		color: '#5e95e3',
		description:
		jutils,
		shortDescription:
			'Minecraft challenge plugin with Backend for license generation and a sellix hook',
		links: [{ to: 'https://jutils.dasshept.de', label: 'Website' }],
		logo: Assets.JUtils,
		name: 'JUtils',
		period: {
			from: new Date(2022, 2, 22)
		},
		skills: getSkills('java', 'spring', 'json', 'postgres'),
		type: 'Minecraft Plugins',
		screenshots: [
			{
				label: 'Insight',
				src: gh('jutils-insight.png')
			}
		]
	},
	{
		slug: 'getmad',
		color: '#ff3e00',
		description:
		getmad,
		shortDescription:
			'Advanced Minecraft cheat detection',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.GetMad,
		name: 'GetMad',
		period: {
			from: new Date(2021, 11, 13)
		},
		skills: getSkills('java', 'yaml'),
		type: 'Minecraft AntiCheat'
	},
	{
		slug: 'urlshorter',
		color: '#ff3e00',
		description:
		urlshorter,
		shortDescription:
			'URL shorting REST API',
		links: [{ to: 'https://github.com/mcshept/URLShorter', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'URLShorter',
		period: {
			from: new Date(2023, 11, 28)
		},
		screenshots: [
			{
				label: 'Main Page Blank',
				src: gh('shorter-insight1.png')
			},
			{
				label: 'About Page Blank',
				src: gh('shorter-insight2.png')
			},
			{
				label: 'Main Page Example',
				src: gh('shorter-insight3.png')
			},
			{
				label: 'About Page Example',
				src: gh('shorter-insight4.png')
			},
		],
		skills: getSkills('java', 'spring', 'json', 'postgres'),
		type: 'REST API'
	},
	{
		slug: 'snippets',
		color: '#9DB3C8',
		description:
		snippets,
		shortDescription:
			'Snippet storing REST API',
		links: [{ to: 'https://github.com/mcshept/SnippetsUploader', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Snippets Uploader',
		period: {
			from: new Date(2024, 0, 26)
		},
		skills: getSkills('java', 'spring', 'json', 'postgres'),
		type: 'REST API'
	},
	{
		slug: 'norisk',
		color: '#9DB3C8',
		description: 'Currently, there is no set release date. For updates on the current state of the client, check out their discord or NoRisk\'s YouTube channel.',
		shortDescription:
			'Minecraft PvP Client',
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
		name: 'Norisk Client',
		period: {
			from: new Date(2023, 5, 3),
			to: new Date(2024, 0, 5)
		},
		skills: getSkills('java', 'kotlin', 'ktor', 'json'),
		type: 'Minecraft Client'
	}
];

export default MY_PROJECTS;
