import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import java from '../md/languages/Java.md?raw';
import cpp from '../md/languages/C++.md?raw';
import kotlin from '../md/languages/Kotlin.md?raw';
import javascript from '../md/languages/JavaScript.md?raw';
import spring from '../md/languages/Spring.md?raw';
import ktor from '../md/languages/Ktor.md?raw';
import psql from '../md/languages/PostgreSQL.md?raw';
import mysql from '../md/languages/MySQL.md?raw';
import mongodb from '../md/languages/MongoDB.md?raw';
import redis from '../md/languages/Redis.md?raw';
import json from '../md/languages/JSON.md?raw';
import yaml from '../md/languages/Yaml.md?raw';
import bash from '../md/tools/Bash.md?raw';
import git from '../md/tools/Git.md?raw';
import jenkins from '../md/tools/Jenkins.md?raw';
import kubernetes from '../md/tools/Kubernetes.md?raw';
import postman from '../md/tools/Postman.md?raw';
import nmap from '../md/tools/NMap.md?raw';
import linux from '../md/tools/Linux.md?raw';
import maven from '../md/tools/Maven.md?raw';
import gradle from '../md/tools/Gradle.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:
		java,
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c++',
		color: 'blue',
		description:
		cpp,
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description:
		kotlin,
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description:
		javascript,
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'steelblue',
		description:
		psql,
		logo: Assets.PostgreSQL,
		name: 'PostgeSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'astral',
		description:
		mysql,
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'limegreen',
		description:
		mongodb,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
		redis,
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'json',
		color: 'grey',
		description:
		json,
		logo: Assets.JSON,
		name: 'JSON',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'yaml',
		color: 'black',
		description:
		yaml,
		logo: Assets.Yaml,
		name: 'Yaml',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'spring',
		color: 'green',
		description:
		spring,
		logo: Assets.Spring,
		name: 'Spring',
		category: 'framework'
	}),
	defineSkill({
		slug: 'ktor',
		color: 'hopbush',
		description:
		ktor,
		logo: Assets.Ktor,
		name: 'Ktor',
		category: 'framework'
	}),
	defineSkill({
		slug: 'bash',
		color: 'grey',
		description:
		bash,
		logo: Assets.Bash,
		name: 'Bash',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:
		git,
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description:
		jenkins,
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'kubernets',
		color: 'dodgerblue',
		description:
		kubernetes,
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'postman',
		color: 'coral',
		description:
		postman,
		logo: Assets.Postman,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'nmap',
		color: 'midnightpurple',
		description:
		nmap,
		logo: Assets.NMap,
		name: 'NMap',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Maven',
		color: 'vermilion',
		description:
		maven,
		logo: Assets.Maven,
		name: 'Maven',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Gradle',
		color: 'deepteal',
		description:
		gradle,
		logo: Assets.Gradle,
		name: 'Gradle',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Linux',
		color: 'yellow',
		description:
		linux,
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devops'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
