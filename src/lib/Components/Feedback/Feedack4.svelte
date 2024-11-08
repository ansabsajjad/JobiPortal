<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import SlickSlider from '../Slider/SlickSlider.svelte';
	import FeedbackSliderB from './FeedbackSlider-B.svelte';

	let settings;

	onMount(async () => {
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			settings = {
				dots: false,
				arrows: true,
				prevArrow: window.$('.prev_d'),
				nextArrow: window.$('.next_d'),
				lazyLoad: 'ondemand',
				centerPadding: '0px',
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				fade: true,
				autoplaySpeed: 300000,
				asNavFor: '.feedback-slider-three-b'
			};
			
		}
	});
</script>

<section class="feedback-section-four position-relative mt-180 xl-mt-150 lg-mt-100">
	<div class="container">
		<div class="row">
			<div class="col-xl-5 col-lg-6 ms-auto order-lg-last">
				<div class="title-one ps-xxl-5">
					<h2 class="main-font">Our Customer Feedback</h2>
				</div>
			</div>
			<div class="col-xxl-7 col-lg-6 order-lg-first">
				<div class="bg-wrapper position-relative me-xxl-4 md-mt-40 md-mb-40">
					<div class="icon d-flex align-items-center justify-content-center rounded-circle">
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/icon/icon_30.svg"
							alt=""
							class="lazy-img"
						/>
					</div>

					<SlickSlider {settings} classes="feedback-slider-three-a">
						<div class="item">
							<p>“The best service I've ever received is from Jobi, and highly recommended.”</p>
							<div class="name text-md text-white">
								Zubayer Al Hasan, <span class="opacity-50">Dhaka</span>
							</div>
						</div>
						<div class="item">
							<p>“The best service I've ever received is from Jobi, and highly recommended.”</p>
							<div class="name text-md text-white">
								Angelina Jolie, <span class="opacity-50">Dhaka</span>
							</div>
						</div>
						<div class="item">
							<p>“The best service I've ever received is from Jobi, and highly recommended.”</p>
							<div class="name text-md text-white">
								Rashed kabir, <span class="opacity-50">Dhaka</span>
							</div>
						</div>
						<div class="item">
							<p>“The best service I've ever received is from Jobi, and highly recommended.”</p>
							<div class="name text-md text-white">
								Maria Gomez, <span class="opacity-50">Dhaka</span>
							</div>
						</div>
					</SlickSlider>
					<ul
						class="slider-arrows d-flex justify-content-between justify-content-lg-center style-none"
					>
						<li class="prev_d slick-arrow"><i class="bi bi-arrow-left"></i></li>
						<li class="next_d slick-arrow"><i class="bi bi-arrow-right"></i></li>
					</ul>
				</div>
				<!-- /.bg-wrapper -->
			</div>
		</div>
		<FeedbackSliderB/>
	</div>
</section>
