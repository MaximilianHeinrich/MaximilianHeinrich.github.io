import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import bmw from '@md/projects/BMW.en.md?raw';
import allianz from '@md/projects/Allianz.de.md?raw';
import { base } from '$app/paths';

import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import { loadProjectMd } from '$lib/md/loadProjectMd';

const lang = get(locale);

const gh = (file: string) => `${base}/imgs/${file}`;

export const items: Array<Project> = [
	{
		slug: 'cfa-bmw',
		color: '#5e95e3',
		description: bmw,
		shortDescription: 'projects.bmw.shortDescription',
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
		type: 'projects.bmw.type',
		screenshots: [
			{
				label: 'Preview',
				src: gh('insight.png')
			}
		]
	},
	{
		slug: 'cfa-allianz',
		color: '#5e95e3',
		description: allianz,
		shortDescription: 'projects.allianz.shortDescription',
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
		type: 'projects.allianz.type',
		screenshots: [
			{
				label: 'Preview',
				src: gh('insight.png')
			}
		]
	}
];

export const title = 'nav.projects';
