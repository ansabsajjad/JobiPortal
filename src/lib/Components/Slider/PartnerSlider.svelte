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
				dots: false,
				arrows: false,
				lazyLoad: 'ondemand',
				centerPadding: '0px',
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3500,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 3
						}
					}
				]
			};
		}
	});
</script>

<SlickSlider {settings} classes="partner-slider">
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_03.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_04.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_05.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_06.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_07.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_08.png" alt="" />
		</div>
	</div>
	<div class="item">
		<div class="logo d-flex align-items-center">
			<img src="/assets/images/logo/media_05.png" alt="" />
		</div>
	</div>
</SlickSlider>
