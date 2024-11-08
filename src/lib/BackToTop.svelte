<script>
	import { onMount } from 'svelte';

	let isVisible = false;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handleScroll() {
		isVisible = window.scrollY > 200; // Adjust this value as needed	
    
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<button class={`scroll-top ${isVisible ? 'visible' : ''}`}  on:click={scrollToTop}>
	<i class="bi bi-arrow-up-short"></i>
</button>

<style>
	.scroll-top {
		width: 35px;
		height: 35px;
		line-height: 35px;
		position: fixed;
		bottom: 20px;
		right: 5px;
		z-index: 99;
		text-align: center;
		color: #fff;
		font-size: 25px;
		cursor: pointer;
		border-radius: 50%;
		background: #00bf58;
		transition: all 0.3s ease-in-out;
     display: none;
	}
	.scroll-top.visible {
		display: block;
	}
	.scroll-top:after {
		position: absolute;
		z-index: -1;
		content: '';
		top: 100%;
		left: 5%;
		height: 10px;
		width: 90%;
		opacity: 1;
		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 80%);
	}
</style>
