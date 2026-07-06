import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Maximilian Andreas';

export const lastName = 'Heinrich';

export const description = 'home.description'

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
