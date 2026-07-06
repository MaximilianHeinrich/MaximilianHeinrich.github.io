import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

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
		name: 'skills.financial-statements',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'kpi-interpretation',
		color: 'grey',
		description: '',
		logo: Assets.BarChart,
		name: 'skills.kpi-interpretation',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'peer-comparison',
		color: 'grey',
		description: '',
		logo: Assets.Users,
		name: 'skills.peer-comparison',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'sector-differences',
		color: 'grey',
		description: '',
		logo: Assets.Building,
		name: 'skills.sector-differences',
		category: 'equity-analysis'
	}),
	defineSkill({
		slug: 'valuation-basics',
		color: 'grey',
		description: '',
		logo: Assets.Coins,
		name: 'skills.valuation-basics',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'value-drivers',
		color: 'grey',
		description: '',
		logo: Assets.HorizontalSliders,
		name: 'skills.value-drivers',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'dcf-logic',
		color: 'grey',
		description: '',
		logo: Assets.Calculator,
		name: 'skills.dcf-logic',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'upside-downside-scenarios',
		color: 'grey',
		description: '',
		logo: Assets.Shuffle,
		name: 'skills.upside-downside-scenarios',
		category: 'valuation-investment-logic'
	}),
	defineSkill({
		slug: 'market-trends-news-impact',
		color: 'grey',
		description: '',
		logo: Assets.Newspaper,
		name: 'skills.market-trends-news-impact',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'price-fundamentals-relationship',
		color: 'grey',
		description: '',
		logo: Assets.Scale,
		name: 'skills.price-fundamentals-relationship',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'pattern-observation',
		color: 'grey',
		description: '',
		logo: Assets.Search,
		name: 'skills.pattern-observation',
		category: 'market-data-interpretation'
	}),
	defineSkill({
		slug: 'data-interpretation-insights',
		color: 'grey',
		description: '',
		logo: Assets.Brain,
		name: 'skills.data-interpretation-insights',
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

export const title = 'nav.skillset';

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
