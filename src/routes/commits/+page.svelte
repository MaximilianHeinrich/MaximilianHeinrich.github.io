<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { onMount } from 'svelte';

	// Define the structure of a commit object
	interface Commit {
		id: number;
		repo: string;
		sha: string;
		authorName: string;
		date: string;
		message: string;
		revoked: boolean;
	}

	let search = '';
	let commits: Commit[] = [];  // Explicitly typed as an array of Commit
	let currentPage = 0;
	let totalPages = 0;

	const blockMap: { [key: string]: string } = {
		'A': '▀', 'B': '█', 'C': '▅', 'D': '▄', 'E': '▆', 'F': '▃', 'G': '▂', 'H': '█',
		'I': '▁', 'J': '▁', 'K': '▅', 'L': '▃', 'M': '█', 'N': '▆', 'O': '█', 'P': '▇',
		'Q': '█', 'R': '▇', 'S': '▃', 'T': '▅', 'U': '▄', 'V': '▆', 'W': '█', 'X': '█',
		'Y': '▅', 'Z': '▀', 'a': '▁', 'b': '█', 'c': '▅', 'd': '▄', 'e': '▆', 'f': '▃',
		'g': '▂', 'h': '█', 'i': '▁', 'j': '▁', 'k': '▅', 'l': '▃', 'm': '█', 'n': '▆',
		'o': '█', 'p': '▇', 'q': '█', 'r': '▇', 's': '▃', 't': '▅', 'u': '▄', 'v': '▆',
		'w': '█', 'x': '█', 'y': '▅', 'z': '▀', '0': '█', '1': '▁', '2': '▃', '3': '▄',
		'4': '▅', '5': '▆', '6': '▇', '7': '█', '8': '█', '9': '█', ' ': ' ',
		'-': '▁', '_': '▄', '.': '▁', ',': '▁', '!': '▁', '?': '▁', '/': '▄', '\\': '▄',
		':': '▁', ';': '▁', '|': '▄', '+': '▄', '=': '▄', '*': '▄', '&': '▄', '%': '▄',
		'@': '▄', '#': '▄', '$': '▄', '^': '▄', '(': '▄', ')': '▄', '[': '▄', ']': '▄',
		'{': '▄', '}': '▄', '<': '▄', '>': '▄', '`': '▄', '~': '▄', '"': '▄', '\'': '▄'
	};


	// Function to replace characters in a string with block characters
	function toBlockString(str: string): string {
		return str.split('').map(char => blockMap[char] || char).join('');
	}

	// Fetches commits from the API
	async function fetchCommits(page = 0) {
		try {
			// const response = await fetch(`https://portfoliocommits.onrender.com/api/v1/commits/get/all?page=${page}&sorted=true`);
			const response = await fetch(`http://localhost:1337/api/v1/commits/get/all?page=${page}&sorted=true`);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();

			// Debugging output to check the fetched data
			console.log('Fetched data:', data);

			commits = data as Commit[];  // Type the fetched data as Commit[]
			// const pagesResponse = await fetch(`https://portfoliocommits.onrender.com/api/v1/commits/get/pages`);
			const pagesResponse = await fetch(`http://localhost:1337/api/v1/commits/get/pages`);
			if (!pagesResponse.ok) {
				throw new Error(`HTTP error! Status: ${pagesResponse.status}`);
			}
			totalPages = await pagesResponse.json(); // Assuming this returns the total number of pages
		} catch (error) {
			console.error('Failed to fetch commits:', error);
		}
	}

	// Handle search functionality (if needed, can be adapted for commits)
	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search.toLowerCase();
		commits = commits.filter(commit =>
			commit.repo.toLowerCase().includes(s) ||
			commit.sha.toLowerCase().includes(s) ||
			commit.authorName.toLowerCase().includes(s) ||
			commit.message.toLowerCase().includes(s)
		);
	};

	// Jump to a specific page
	const goToPage = (page: number) => {
		window.scrollTo(0, 0);

		if (page >= 0 && page <= totalPages) {
			currentPage = page;
			fetchCommits(currentPage);
		}
	};

	// Fetch commits on mount
	onMount(() => {
		fetchCommits(currentPage);
	});
</script>

<SearchPage title="Commits" {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if commits.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find any commits...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each commits as commit, index (commit.id)}
				<div class="relative items-center w-full my-[10px]">
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch">
								{#if commit.revoked}
									<div class="revoked-container">
										<div class="text-[1.3em]">
											Repo: <span class="revoked">{toBlockString(commit.repo)}</span>
										</div>
										<div>
											Commit SHA: <span class="revoked">{toBlockString(commit.sha)}</span>
										</div>
										<div>
											Author: <span class="revoked">{toBlockString(commit.authorName)}</span>
										</div>
										<div>
											Date: <span class="revoked">{toBlockString(new Date(commit.date).toLocaleString())}</span>
										</div>
										<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
											Message: <span class="revoked">{toBlockString(commit.message)}</span>
										</div>
									</div>
								{:else}
									<div class="text-[1.3em]">Repo: {commit.repo}</div>
									<div>Commit SHA: {commit.sha}</div>
									<div>Author: {commit.authorName}</div>
									<div>Date: {new Date(commit.date).toLocaleString()}</div>
									<div class="text-[var(--accent-text)] text-[0.9em] font-200 mb-2">
										Message: {commit.message}
									</div>
								{/if}
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}

		<!-- Pagination Controls -->
		<div class="pagination-controls">
			<button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>Previous</button>
			<span>Page {currentPage + 1} of {totalPages}</span>
			<button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages - 1}>Next</button>
		</div>
	</div>
</SearchPage>

<style>
    .pagination-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        gap: 10px;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    button {
        margin: 0 5px;
        padding: 5px 10px;
        background-color: var(--main);
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: var(--button-hover);
    }

    button:active {
        background-color: var(--button-active);
    }

    .revoked {
        letter-spacing: -1px;
        font-family: monospace;
    }

    .revoked-container {
        filter: blur(1px);
    }
</style>
