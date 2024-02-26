import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';
import { base } from '$app/paths';

export const TITLE_SUFFIX = 'Maximilian Andreas Heinrich';

const gh = (file: string) => `${base}/pdf/${file}`;

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Maximilian',
	lastName: 'HEINRICH',
	description:
		'I’m a back-end developer based from Germany. I can develop fast and secure backend-solutions with Java, Springboot and a database of choice.\n' +
		'\n' +
		'For the last year, I have been programming backends for various applications. Be it licensing or communication systems like BeReal. Since then, I\'ve been on a constant learning curve, and I\'m always up-to-date with new techniques.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/maximilianheinrich' },
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
			link: 'email@maximilian.is-a.dev'
		},
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Résumé',
	item: gh('resume.pdf')
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
