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
				prevArrow: window.$('.prev_e'),
				nextArrow: window.$('.next_e'),
				centerPadding: '0px',
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					},
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

<section class="related-job-section pt-90 lg-pt-70 pb-120 lg-pb-70">
	<div class="container">
		<div class="position-relative">
			<div class="title-three text-center text-md-start mb-55 lg-mb-40">
				<h2 class="main-font">Related Jobs</h2>
			</div>

			<SlickSlider {settings} classes="related-job-slider">
				<div class="item">
					<div class="job-list-two style-two position-relative">
						<a href="/job-details-v2" class="logo"
							><img src="/assets/images/logo/media_22.png" alt="" class="m-auto" /></a
						>
						<a
							href="/job-details-v2"
							class="save-btn text-center rounded-circle tran3s"
							title="Save Job"><i class="bi bi-bookmark-dash"></i></a
						>
						<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
						<div>
							<a href="/job-details-v2" class="title fw-500 tran3s"
								>Lead designer & expert in maya 3D</a
							>
						</div>
						<div class="job-salary"><span class="fw-500 text-dark">$300-$450</span> / Week</div>
						<div class="d-flex align-items-center justify-content-between mt-auto">
							<div class="job-location"><a href="/job-details-v2">USA, California</a></div>
							<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
					<!-- /.job-list-two -->
				</div>
				<div class="item">
					<div class="job-list-two style-two position-relative">
						<a href="/job-details-v2" class="logo"
							><img src="/assets/images/logo/media_23.png" alt="" class="m-auto" /></a
						>
						<a
							href="/job-details-v2"
							class="save-btn text-center rounded-circle tran3s"
							title="Save Job"><i class="bi bi-bookmark-dash"></i></a
						>
						<div><a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a></div>
						<div>
							<a href="/job-details-v2" class="title fw-500 tran3s"
								>Developer & expert in c++ & java.</a
							>
						</div>
						<div class="job-salary"><span class="fw-500 text-dark">$10-$15</span> / Hour</div>
						<div class="d-flex align-items-center justify-content-between mt-auto">
							<div class="job-location"><a href="/job-details-v2">USA, Alaska</a></div>
							<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
					<!-- /.job-list-two -->
				</div>
				<div class="item">
					<div class="job-list-two style-two position-relative">
						<a href="/job-details-v2" class="logo"
							><img src="/assets/images/logo/media_24.png" alt="" class="m-auto" /></a
						>
						<a
							href="/job-details-v2"
							class="save-btn text-center rounded-circle tran3s"
							title="Save Job"><i class="bi bi-bookmark-dash"></i></a
						>
						<div><a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a></div>
						<div>
							<a href="/job-details-v2" class="title fw-500 tran3s"
								>Marketing specialist in SEO & Affiliate.
							</a>
						</div>
						<div class="job-salary"><span class="fw-500 text-dark">$40k</span> / Yearly</div>
						<div class="d-flex align-items-center justify-content-between mt-auto">
							<div class="job-location"><a href="/job-details-v2">AUS, Sydney</a></div>
							<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
					<!-- /.job-list-two -->
				</div>
				<div class="item">
					<div class="job-list-two style-two position-relative">
						<a href="/job-details-v2" class="logo"
							><img src="/assets/images/logo/media_25.png" alt="" class="m-auto" /></a
						>
						<a
							href="/job-details-v2"
							class="save-btn text-center rounded-circle tran3s"
							title="Save Job"><i class="bi bi-bookmark-dash"></i></a
						>
						<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
						<div>
							<a href="/job-details-v2" class="title fw-500 tran3s"
								>Lead & Product & Web Designer.</a
							>
						</div>
						<div class="job-salary"><span class="fw-500 text-dark">$2k-3k</span> / Month</div>
						<div class="d-flex align-items-center justify-content-between mt-auto">
							<div class="job-location"><a href="/job-details-v2">UAE, Dubai</a></div>
							<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
					<!-- /.job-list-two -->
				</div>
			</SlickSlider>

			<ul
				class="slider-arrows slick-arrow-one color-two d-flex justify-content-center style-none sm-mt-20"
			>
				<li class="prev_e slick-arrow"><i class="bi bi-arrow-left"></i></li>
				<li class="next_e slick-arrow"><i class="bi bi-arrow-right"></i></li>
			</ul>
		</div>
	</div>
</section>
