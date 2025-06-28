import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Maximilian Andreas';

export const lastName = 'Heinrich';

export const description =
	'I’m a back-end developer based from Germany. I can develop fast and secure backend-solutions with Java, Springboot and a database of choice.\n' +
	'\n' +
	'For the last year, I have been programming backends for various applications. Be it licensing or communication systems like BeReal. Since then, I\'ve been on a constant learning curve, and I\'m always up-to-date with new techniques.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/MaximilianHeinrich' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/maxhei'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.Email,
		link: 'email@maximilian.software'
	}
];

export const skills = getSkills('java', 'c++', 'kotlin', 'spring', 'ktor', 'postgres', 'mysql', 'mongodb', 'redis', 'json', 'yaml');
