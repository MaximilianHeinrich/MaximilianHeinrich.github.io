<script></script>

<style>
    .legal-box {
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-color: var(--main-hover);
        border: 1px solid var(--border);
        border-radius: 8px 0 0 8px;
        padding: 12px 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        z-index: 999;
        box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
    }

    .legal-word {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--tertiary-text);
        font-size: 0.75rem;
        letter-spacing: 1px;
        transition: color 0.3s ease;
    }

    .legal-word:hover {
        color: var(--accent-text-hover);
    }

    .letter {
        line-height: 1em;
    }

    @media (max-width: 768px) {
        .legal-box {
            padding: 8px 4px;
            left: 4px;
            gap: 16px;
            border-radius: 6px;
            font-size: 0.65rem;
        }

        .legal-word {
            font-size: 0.65rem;
        }
    }
</style>

<div class="legal-box">
	<a href="/imprint" class="legal-word" aria-label="Imprint">
		<span class="letter">I</span>
		<span class="letter">m</span>
		<span class="letter">p</span>
		<span class="letter">r</span>
		<span class="letter">i</span>
		<span class="letter">n</span>
		<span class="letter">t</span>
	</a>

	<a href="/privacy" class="legal-word" aria-label="Privacy">
		<span class="letter">P</span>
		<span class="letter">r</span>
		<span class="letter">i</span>
		<span class="letter">v</span>
		<span class="letter">a</span>
		<span class="letter">c</span>
		<span class="letter">y</span>
	</a>
</div>
