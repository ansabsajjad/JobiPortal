<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import SlickSlider from '../Slider/SlickSlider.svelte';

	let settings;

	onMount(async () => {
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			settings = {
				dots: true,
				arrows: false,
				lazyLoad: 'ondemand',
				centerPadding: '0px',
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 300000,
				asNavFor: '.feedback-slider-three-a',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1
						}
					}
				]
			};
		}
	});
</script>

<div class="slider-wrapper">
	<SlickSlider {settings} classes="feedback-slider-three-b">
		<div class="item"><img src="/assets/images/assets/img_34.jpg" alt="" /></div>
		<div class="item"><img src="/assets/images/assets/img_35.jpg" alt="" /></div>
		<div class="item"><img src="/assets/images/assets/img_34.jpg" alt="" /></div>
		<div class="item"><img src="/assets/images/assets/img_35.jpg" alt="" /></div>
	</SlickSlider>
</div>
