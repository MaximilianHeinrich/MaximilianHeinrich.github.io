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
	defineSkillCategory({ name: 'Equity & Company Analysis', slug: 'equity-analysis' }),
	defineSkillCategory({ name: 'Valuation & Investment Logic', slug: 'valuation-investment-logic' }),
	defineSkillCategory({ name: 'Market & Data Interpretation', slug: 'market-data-interpretation' }),
	defineSkillCategory({ name: 'Structured Problem Solving', slug: 'structured-problem-solving' }),
	defineSkillCategory({ name: 'Professional Strengths', slug: 'professional-strengths' }),
	defineSkillCategory({ name: 'Tools & Software', slug: 'tools-software' })
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
		slug: 'financial-statements',
		color: 'grey',
		description: '',
		logo: Assets.FileText,
		name: 'Understanding of financial statements (P&L, balance sheet, cash flow)',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'kpi-interpretation',
		color: 'grey',
		description: '',
		logo: Assets.BarChart,
		name: 'Basic KPI interpretation (growth, margins, profitability)',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'peer-comparison',
		color: 'grey',
		description: '',
		logo: Assets.Users,
		name: 'Awareness of peer comparison concepts',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'sector-differences',
		color: 'grey',
		description: '',
		logo: Assets.Building,
		name: 'Introduction to sector differences',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'valuation-basics',
		color: 'grey',
		description: '',
		logo: Assets.Coins,
		name: 'Understanding of valuation basics (multiples conceptually)',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'value-drivers',
		color: 'grey',
		description: '',
		logo: Assets.HorizontalSliders,
		name: 'Awareness of what drives company value',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'dcf-logic',
		color: 'grey',
		description: '',
		logo: Assets.Calculator,
		name: 'Introductory understanding of DCF logic',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'upside-downside-scenarios',
		color: 'grey',
		description: '',
		logo: Assets.Shuffle,
		name: 'Thinking in terms of upside/downside scenarios',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'market-trends-news-impact',
		color: 'grey',
		description: '',
		logo: Assets.Newspaper,
		name: 'Awareness of market trends and news impact',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'price-fundamentals-relationship',
		color: 'grey',
		description: '',
		logo: Assets.Scale,
		name: 'Understanding relationship between price and fundamentals (basic)',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'pattern-observation',
		color: 'grey',
		description: '',
		logo: Assets.Search,
		name: 'Ability to observe patterns in financial data',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'data-interpretation-insights',
		color: 'grey',
		description: '',
		logo: Assets.Brain,
		name: 'Interest in translating data into insights',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'problem-structuring',
		color: 'grey',
		description: '',
		logo: Assets.Excel,
		name: 'Excel / Google Sheets',
		category: 'tools-software'
	}),
	defineSkill({
		slug: 'powerpoint',
		color: 'grey',
		description: '',
		logo: Assets.PowerPoint,
		name: 'PowerPoint',
		category: 'tools-software'
	}),
	defineSkill({
		slug: 'python',
		color: 'grey',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'tools-software'
	}),
	defineSkill({
		slug: 'financial-data-apis',
		color: 'grey',
		description: '',
		logo: Assets.API,
		name: 'Financial Data APIs',
		category: 'tools-software'
	})
] as const;

export const title = 'Skillset';

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
