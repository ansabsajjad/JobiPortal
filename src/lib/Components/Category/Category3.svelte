<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import SlickSlider from '../Slider/SlickSlider.svelte';

	export let addSectionClasses = 'pt-85 pb-140 lg-pb-100';

	let settings;

	onMount(async () => {
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			settings = {
				dots: false,
				arrows: true,
				lazyLoad: 'ondemand',
				prevArrow: window.$('.prev_d'),
				nextArrow: window.$('.next_d'),
				centerPadding: '0px',
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
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

<section class="category-section-three {addSectionClasses}">
	<div class="container">
		<div class="position-relative">
			<slot name="title">
				<div class="title-two mb-60 lg-mb-40">
					<h2 class="fw-600 color-blue">Trending Services</h2>
				</div>
			</slot>
			<SlickSlider {settings} classes="card-wrapper category-slider-one row">
				<div class="item">
					<div
						class="card-style-six position-relative"
						style="background-image: url(/assets/images/assets/img_16.jpg);"
					>
						<a href="/job-grid-v3" class="w-100 h-100 ps-4 pb-20 d-flex align-items-end">
							<div class="title text-white fw-500 text-lg">WordPress <br />Development.</div>
						</a>
					</div>
					<!-- /.card-style-six -->
				</div>
				<div class="item">
					<div
						class="card-style-six position-relative"
						style="background-image: url(/assets/images/assets/img_17.jpg);"
					>
						<a href="/job-grid-v3" class="w-100 h-100 ps-4 pb-20 d-flex align-items-end">
							<div class="title text-white fw-500 text-lg">Audio & <br /> Video Editing.</div>
						</a>
					</div>
					<!-- /.card-style-six -->
				</div>
				<div class="item">
					<div
						class="card-style-six position-relative"
						style="background-image: url(/assets/images/assets/img_18.jpg);"
					>
						<a href="/job-grid-v3" class="w-100 h-100 ps-4 pb-20 d-flex align-items-end">
							<div class="title text-white fw-500 text-lg">Product & <br /> Branding Design</div>
						</a>
					</div>
					<!-- /.card-style-six -->
				</div>
				<div class="item">
					<div
						class="card-style-six position-relative"
						style="background-image: url(/assets/images/assets/img_19.jpg);"
					>
						<a href="/job-grid-v3" class="w-100 h-100 ps-4 pb-20 d-flex align-items-end">
							<div class="title text-white fw-500 text-lg">Admin & <br /> Customer Support</div>
						</a>
					</div>
					<!-- /.card-style-six -->
				</div>
				<div class="item">
					<div
						class="card-style-six position-relative"
						style="background-image: url(/assets/images/assets/img_18.jpg);"
					>
						<a href="/job-grid-v3" class="w-100 h-100 ps-4 pb-20 d-flex align-items-end">
							<div class="title text-white fw-500 text-lg">Product & <br /> Branding Design</div>
						</a>
					</div>
					<!-- /.card-style-six -->
				</div>
			</SlickSlider>
			<!-- /.card-wrapper -->
			<ul class="slider-arrows slick-arrow-two d-flex justify-content-center style-none sm-mt-20">
				<li class="prev_d slick-arrow"><i class="bi bi-chevron-left"></i></li>
				<li class="next_d slick-arrow"><i class="bi bi-chevron-right"></i></li>
			</ul>
		</div>
	</div>
</section>
