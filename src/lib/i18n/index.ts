import { register, init, locale, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
import { browser } from '$app/environment';
import en from './en.json';
import de from './de.json';

addMessages('en', en);
addMessages('de', de);

function getStoredLocale(): string | null {
	return browser ? localStorage.getItem('lang') : null;
}

function setStoredLocale(value: string) {
	if (!browser) return;
	localStorage.setItem('lang', value);
}

function detectLocale(): string {
	const stored = getStoredLocale();
	if (stored) return stored;

	const navLang = getLocaleFromNavigator();
	if (navLang?.startsWith('de')) return 'de';

	return 'en';
}

init({
	fallbackLocale: 'en',
	initialLocale: 'de'
});

if (browser) {
	locale.set(detectLocale());
}

locale.subscribe((value) => {
	if (!browser) return;
	if (value) setStoredLocale(value);
});
