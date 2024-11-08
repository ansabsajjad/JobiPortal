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

<section
	class="feedback-section-five position-relative mt-180 xl-mt-150 pt-90 md-pt-60 pb-130 xl-pb-100 md-pb-70"
>
	<div class="container">
		<div class="position-relative">
			<div class="row">
				<div class="col-md-6">
					<div class="title-one mb-55 lg-mb-40">
						<h2 class="main-font text-white">What’s our clients Think of us?</h2>
					</div>
				</div>
			</div>

			<SlickSlider {settings} classes="row feedback-slider-one">
				<div class="item">
					<div class="feedback-block-three position-relative">
						<img src="/assets/images/icon/icon_41.svg" alt="" class="quote-icon" />
						<div class="review fw-500">Impressive!</div>
						<ul class="style-none d-flex rating">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
						</ul>
						<blockquote class="mt-50 lg-mt-20 mb-15 lg-mb-10 text-dark">
							Amazing theme, I'm using it for our internal process & procedures, and it's working
							very well.
						</blockquote>
						<div
							class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-10"
						>
							<div class="d-flex align-items-center">
								<div class="name fw-500 text-dark">Rashed Ka,</div>
								<span class="opacity-50 ps-1">Dhaka</span>
							</div>
							<img
								src="/assets/images/assets/img_14.jpg"
								alt=""
								class="author-img rounded-circle"
							/>
						</div>
					</div>
					<!-- /.feedback-block-three -->
				</div>
				<div class="item">
					<div class="feedback-block-three position-relative">
						<img src="/assets/images/icon/icon_41.svg" alt="" class="quote-icon" />
						<div class="review fw-500">Great work!!</div>
						<ul class="style-none d-flex rating">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
						</ul>
						<blockquote class="mt-50 lg-mt-20 mb-15 lg-mb-10 text-dark">
							Great service, highly recommend. Friendly staff and excellent quality products. Will
							definitely be returning!
						</blockquote>
						<div
							class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-10"
						>
							<div class="d-flex align-items-center">
								<div class="name fw-500 text-dark">Zubayer Al Hasan,</div>
								<span class="opacity-50 ps-1">USA</span>
							</div>
							<img
								src="/assets/images/assets/img_15.jpg"
								alt=""
								class="author-img rounded-circle"
							/>
						</div>
					</div>
					<!-- /.feedback-block-three -->
				</div>
				<div class="item">
					<div class="feedback-block-three position-relative">
						<img src="/assets/images/icon/icon_41.svg" alt="" class="quote-icon" />
						<div class="review fw-500">Impressive!</div>
						<ul class="style-none d-flex rating">
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
							<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
						</ul>
						<blockquote class="mt-50 lg-mt-20 mb-15 lg-mb-10 text-dark">
							Absolutely amazing! The service was impeccable, and the products exceeded my
							expectations. I'll be back!
						</blockquote>
						<div
							class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-10"
						>
							<div class="d-flex align-items-center">
								<div class="name fw-500 text-dark">Rashed Ka,</div>
								<span class="opacity-50 ps-1">Dhaka</span>
							</div>
							<img
								src="/assets/images/assets/img_16.jpg"
								alt=""
								class="author-img rounded-circle"
							/>
						</div>
					</div>
					<!-- /.feedback-block-three -->
				</div>
			</SlickSlider>
			<ul
				class="slider-arrows slick-arrow-one color-two d-flex justify-content-center style-none sm-mt-30"
			>
				<li class="prev_b slick-arrow text-white"><i class="bi bi-arrow-left"></i></li>
				<li class="next_b slick-arrow text-white"><i class="bi bi-arrow-right"></i></li>
			</ul>
		</div>
	</div>
</section>
