import { register, init, locale, getLocaleFromNavigator } from 'svelte-i18n';
import { browser } from '$app/environment';

// ----------------------
// 1. Register messages
// ----------------------
register('en', () => import('./en.json'));
register('de', () => import('./de.json'));

// ----------------------
// 2. Storage helpers
// ----------------------
function getStoredLocale(): string | null {
	return browser ? localStorage.getItem('lang') : null;
}

function setStoredLocale(value: string) {
	if (!browser) return;
	localStorage.setItem('lang', value);
}

// ----------------------
// 3. Detect locale (client only)
// ----------------------
function detectLocale(): string {
	const stored = getStoredLocale();
	if (stored) return stored;

	const navLang = getLocaleFromNavigator();
	if (navLang?.startsWith('de')) return 'de';

	return 'en';
}

// ----------------------
// 4. INIT (IMPORTANT: MUST BE STATIC)
// ----------------------
init({
	fallbackLocale: 'en',
	initialLocale: 'en' // 🚨 critical: never dynamic here
});

// ----------------------
// 5. Apply detected locale AFTER init (client only)
// ----------------------
if (browser) {
	locale.set(detectLocale());
}

// ----------------------
// 6. Persist locale changes
// ----------------------
locale.subscribe((value) => {
	if (!browser) return;
	if (value) setStoredLocale(value);
});
