import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { t } from 'svelte-i18n';

export const title = 'Home';

export const name = 'Maximilian Andreas';

export const lastName = 'Heinrich';

export const description =
	'High school student based in Germany exploring finance, economics, and capital markets. I focus on analyzing companies through financial statements, valuation fundamentals, and market dynamics.\n' +
	'\n' +
	'I am developing a structured, analytical approach to interpreting data, identifying key value drivers, and forming investment perspectives, with a strong emphasis on continuous learning.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/maxhei'
	},
	{
		platform: Platform.Email,
		link: 'email@maximilianheinrich.com'
	},
	{
		platform: Platform.Portfolio,
		link: '/'
	}
];

export const skills = getSkills('java', 'c++', 'kotlin', 'spring', 'ktor', 'postgres', 'mysql', 'mongodb', 'redis', 'json', 'yaml');
