import { register, init, locale, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('de', () => import('./de.json'));

function getStoredLocale(): string | null {
	if (typeof localStorage === 'undefined') return null;
	return localStorage.getItem('lang');
}

function setStoredLocale(value: string) {
	if (typeof window === 'undefined') return;
	localStorage.setItem('lang', value);
	console.log('value changed: ', value)
	console.log('stored: ', getStoredLocale())
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
	initialLocale: detectLocale()
});

locale.subscribe((value) => {
	if (value) setStoredLocale(value);
	console.log('locale changed:', value);
});
