<script></script>

<style>
    .legal-footer {
        position: fixed;
        bottom: 8px;
        left: 12px;
        display: flex;
        gap: 10px;
        font-size: 0.65rem;
        color: var(--tertiary-text);
        opacity: 0.2;
        z-index: 50;
        transition: opacity 0.2s ease;
    }

    .legal-footer:hover {
        opacity: 0.4;
    }

    .legal-link {
        text-decoration: none;
        color: inherit;
        transition: color 0.2s ease;
    }

    .legal-link:hover {
        color: var(--secondary-text);
    }

    @media (max-width: 768px) {
        .legal-footer {
            font-size: 0.6rem;
            bottom: 6px;
            left: 8px;
            opacity: 0.35;
        }
    }
</style>

<div class="legal-footer">
	<a href="/imprint" class="legal-link">Imprint</a>
	<span>·</span>
	<a href="/privacy" class="legal-link">Privacy</a>
</div>