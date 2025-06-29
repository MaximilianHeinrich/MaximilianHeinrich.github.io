import Assets from './assets';
import type { Language } from '../types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';

const defineLanguage = <S extends string>(lang: Language<S>): Language<S> => lang;

export const languages = [
	defineLanguage({
		slug: 'ger',
		color: 'orange',
		description: '',
		logo: Assets.German,
		name: 'German'
	}),
	defineLanguage({
		slug: 'eng',
		color: 'blue',
		description: '',
		logo: Assets.English,
		name: 'English'
	}),
] as const;

export const title = 'Languages';

export const getLanguages = (
	...slugs: Array<StringWithAutoComplete<(typeof languages)[number]['slug']>>
): Array<Language> => languages.filter((it) => slugs.includes(it.slug));
