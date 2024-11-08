<script>
	import '$lib/fonts/gordita/stylesheet.css';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '$lib/fonts/bootstrap-icons-1.10.2/font.css';
	import '$lib/css/style.css';
	import '$lib/css/responsive.css';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			window.jQuery = Jq;
			 await import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	});
</script>

<slot></slot>
