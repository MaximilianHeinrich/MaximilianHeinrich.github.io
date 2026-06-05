import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import jutils from '../md/projects/JUtils.md?raw';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/imgs/${file}`;

export const items: Array<Project> = [
	{
		slug: 'cfa-bmw',
		color: '#5e95e3',
		description: jutils,
		shortDescription:
			'Equity research on BMW AG covering financials, valuation, and peer comparison.',
		// links: [{ to: '/pdf/bmw.pdf', label: 'Download', newTab: true }],
		links: [{ to: '', label: 'Download', newTab: true }],
		logo: Assets.Report,
		name: 'BMW AG',
		period: {
			from: new Date(2026, 5, 1)
		},
		skills: getSkills(
			'financial-statements',
			'kpi-interpretation',
			'valuation-basics',
			'peer-comparison'
		),
		type: 'Equity Research Report',
		screenshots: [
			{
				label: 'Preview',
				src: gh('jutils-insight.png')
			}
		]
	},
	{
		slug: 'cfa-allianz',
		color: '#5e95e3',
		description: jutils,
		shortDescription:
			'Equity research on Allianz SE covering financials, valuation, and peer comparison.',
		// links: [{ to: '/pdf/allianz.pdf', label: 'Download', newTab: true }],
		links: [{ to: '', label: 'Download', newTab: true }],
		logo: Assets.Report,
		name: 'Allianz SE',
		period: {
			from: new Date(2026, 5, 1)
		},
		skills: getSkills(
			'financial-statements',
			'kpi-interpretation',
			'valuation-basics',
			'peer-comparison'
		),
		type: 'Equity Research Report',
		screenshots: [
			{
				label: 'Preview',
				src: gh('jutils-insight.png')
			}
		]
	}
];

export const title = 'Projects';
