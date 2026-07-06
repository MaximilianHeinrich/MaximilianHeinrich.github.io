export async function loadProjectMd(slug: string, lang: string | null | undefined) {
	console.log(`Loading project markdown for slug: ${slug}, lang: ${lang}`);
	return import(`./projects/${slug}.${lang}.md?raw`).then((m) => m.default);
}
