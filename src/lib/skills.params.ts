import Assets from './data/assets';
import type { Skill } from './types';
import java from './md/languages/Java.md?raw';
import cpp from './md/languages/C++.md?raw';
import kotlin from './md/languages/Kotlin.md?raw';
import spring from './md/languages/Spring.md?raw';
import ktor from './md/languages/Ktor.md?raw';
import psql from './md/languages/PostgreSQL.md?raw';
import mysql from './md/languages/MySQL.md?raw';
import mongodb from './md/languages/MongoDB.md?raw';
import redis from './md/languages/Redis.md?raw';
import json from './md/languages/JSON.md?raw';
import yaml from './md/languages/Yaml.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'java',
		color: 'orange',
		description:
		java,
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'c++',
		color: 'blue',
		description:
		cpp,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'kotlin',
		color: 'purple',
		description:
		kotlin,
		logo: Assets.Kotlin,
		name: 'Kotlin'
	}),
	s({
		slug: 'spring',
		color: 'green',
		description:
		spring,
		logo: Assets.Spring,
		name: 'Spring'
	}),
	s({
		slug: 'ktor',
		color: 'hopbush',
		description:
		ktor,
		logo: Assets.Ktor,
		name: 'Ktor'
	}),
	s({
		slug: 'postgres',
		color: 'steelblue',
		description:
		psql,
		logo: Assets.PostgreSQL,
		name: 'PostgeSQL'
	}),
	s({
		slug: 'mysql',
		color: 'astral',
		description:
			mysql,
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'mongodb',
		color: 'limegreen',
		description:
			mongodb,
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description:
			redis,
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'json',
		color: 'grey',
		description:
			json,
		logo: Assets.JSON,
		name: 'JSON'
	}),
	s({
		slug: 'yaml',
		color: 'black',
		description:
			yaml,
		logo: Assets.Yaml,
		name: 'Yaml'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
