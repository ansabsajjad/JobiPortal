<script>
	import PartnerSlider from '../Slider/PartnerSlider.svelte';
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
				arrows: true,
				lazyLoad: 'ondemand',
				prevArrow: window.$('.prev_b'),
				nextArrow: window.$('.next_b'),
				centerPadding: '0px',
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000000,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
			};
		}
	});
</script>

<section class="feedback-section-one pt-180 xl-pt-150 lg-pt-100">
	<div class="container position-relative">
		<div class="row">
			<div class="col-lg-5 col-md-6">
				<div class="title-one text-center text-md-start mb-65 md-mb-50">
					<h2>Trusted by leading startups.</h2>
				</div>
			</div>
		</div>

		<SlickSlider {settings} classes="row feedback-slider-one">
			<div class="item">
				<div class="feedback-block-one">
					<div class="logo">
						<img src="/assets/images/logo/media_01.png" alt="" />
					</div>
					<blockquote class="fw-500 mt-50 md-mt-30 mb-50 md-mb-30">
						“Seattle opera simplifies Performance planning with jobi eSignature.”
					</blockquote>
					<div class="name text-dark"><span class="fw-500">Rashed kabir,</span> Lead Designer</div>
					<div
						class="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
					>
						<div class="text-md fw-500 text-dark">4.5 Excellent</div>
						<ul class="style-none d-flex">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star"></i></a></li>
						</ul>
					</div>
				</div>
				<!-- /.feedback-block-one -->
			</div>
			<div class="item">
				<div class="feedback-block-one">
					<div class="logo">
						<img src="/assets/images/logo/media_02.png" alt="" />
					</div>
					<blockquote class="fw-500 mt-50 md-mt-30 mb-50 md-mb-30">
						“How DocuSign CLM helps Celonis scale its global business.”
					</blockquote>
					<div class="name text-dark"><span class="fw-500">Mark Joge,</span> Marketing Chief</div>
					<div
						class="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
					>
						<div class="text-md fw-500 text-dark">4.8 Awesome</div>
						<ul class="style-none d-flex">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
						</ul>
					</div>
				</div>
				<!-- /.feedback-block-one -->
			</div>
			<div class="item">
				<div class="feedback-block-one">
					<div class="logo">
						<img src="/assets/images/logo/media_01.png" alt="" />
					</div>
					<blockquote class="fw-500 mt-50 md-mt-30 mb-50 md-mb-30">
						“Seattle opera simplifies Performance planning with jobi eSignature.”
					</blockquote>
					<div class="name text-dark"><span class="fw-500">Rashed kabir,</span> Lead Designer</div>
					<div
						class="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
					>
						<div class="text-md fw-500 text-dark">4.5 Excellent</div>
						<ul class="style-none d-flex">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star"></i></a></li>
						</ul>
					</div>
				</div>
				<!-- /.feedback-block-one -->
			</div>
		</SlickSlider>
		<ul class="slider-arrows slick-arrow-one d-flex justify-content-center style-none sm-mt-30">
			<li class="prev_b slick-arrow"><i class="bi bi-arrow-left"></i></li>
			<li class="next_b slick-arrow"><i class="bi bi-arrow-right"></i></li>
		</ul>

		<div class="partner-logos pt-150 xl-pt-120 md-pt-80 sm-pt-40 pb-80 md-pb-40">
			<PartnerSlider />
		</div>
		<!-- /.partner-logos -->
	</div>
</section>
