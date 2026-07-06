export async function switchLocaleSmooth(
	setPhase: (p: 'out' | 'in') => void
) {
	// 1. fade OUT
	setPhase('out');

	// wait for fade-out animation
	await new Promise((r) => setTimeout(r, 200));

	// 2. change language AFTER fade-out
	// wait one tick so DOM updates
	await Promise.resolve();

	// 3. fade IN
	setPhase('in');
}