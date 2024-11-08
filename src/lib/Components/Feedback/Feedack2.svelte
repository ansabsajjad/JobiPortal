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
				responsive: [
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

<section class="feedback-section-two position-relative pt-65 lg-pt-20 mt-180 xl-mt-150 md-mt-30">
	<div class="container position-relative">
		<div class="row">
			<div class="col-lg-4">
				<div class="title-one mt-50">
					<div class="sub-title">TESTIMONIAL</div>
					<h2 class="fw-600">Clients loves jobi.</h2>
				</div>
				<div class="fw-500 rating-title mt-80 lg-mt-40 mb-5">A+ Rating</div>
				<p>Avg rating 4.8 makes us best market place.</p>
			</div>

			<div class="col-lg-8 ms-auto">
				<div class="slider-wrapper ms-lg-5">
					<SlickSlider {settings} classes="row feedback-slider-two">
						<div class="item">
							<div class="feedback-block-two">
								<div class="review fw-500">Impressive!</div>
								<ul class="style-none d-flex rating">
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
								</ul>
								<blockquote class="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark">
									“This is absolutely unique and clean design that I'm looking for. Also, the code
									quality is great!”
								</blockquote>
								<div
									class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20"
								>
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/assets/img_14.jpg"
											alt=""
											class="author-img rounded-circle"
										/>
										<div class="ms-3">
											<div class="name fw-500 text-dark">Zubayer Al Hasan</div>
											<span class="opacity-50">Dhaka</span>
										</div>
									</div>
									<img src="/assets/images/shape/shape_26.svg" alt="" class="quote-icon" />
								</div>
							</div>
							<!-- /.feedback-block-two -->
						</div>
						<div class="item">
							<div class="feedback-block-two">
								<div class="review fw-500">Nice work!</div>
								<ul class="style-none d-flex rating">
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
								</ul>
								<blockquote class="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark">
									“This is absolutely unique and clean design that I'm looking for. Also, the code
									quality is great!”
								</blockquote>
								<div
									class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20"
								>
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/assets/img_15.jpg"
											alt=""
											class="author-img rounded-circle"
										/>
										<div class="ms-3">
											<div class="name fw-500 text-dark">Zubayer Al Hasan</div>
											<span class="opacity-50">Dhaka</span>
										</div>
									</div>
									<img src="/assets/images/shape/shape_26.svg" alt="" class="quote-icon" />
								</div>
							</div>
							<!-- /.feedback-block-two -->
						</div>
						<div class="item">
							<div class="feedback-block-two">
								<div class="review fw-500">Impressive!</div>
								<ul class="style-none d-flex rating">
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
								</ul>
								<blockquote class="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark">
									“This is absolutely unique and clean design that I'm looking for. Also, the code
									quality is great!”
								</blockquote>
								<div
									class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20"
								>
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/assets/img_14.jpg"
											alt=""
											class="author-img rounded-circle"
										/>
										<div class="ms-3">
											<div class="name fw-500 text-dark">Zubayer Al Hasan</div>
											<span class="opacity-50">Dhaka</span>
										</div>
									</div>
									<img src="/assets/images/shape/shape_26.svg" alt="" class="quote-icon" />
								</div>
							</div>
							<!-- /.feedback-block-two -->
						</div>
						<div class="item">
							<div class="feedback-block-two">
								<div class="review fw-500">Nice work!</div>
								<ul class="style-none d-flex rating">
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
									<li><a href="#!"><i class="bi bi-star-fill"></i></a></li>
								</ul>
								<blockquote class="mt-40 lg-mt-20 mb-50 lg-mb-30 text-md text-dark">
									“This is absolutely unique and clean design that I'm looking for. Also, the code
									quality is great!”
								</blockquote>
								<div
									class="block-footer d-flex align-items-center justify-content-between pt-35 lg-pt-20"
								>
									<div class="d-flex align-items-center">
										<img
											src="/assets/images/assets/img_15.jpg"
											alt=""
											class="author-img rounded-circle"
										/>
										<div class="ms-3">
											<div class="name fw-500 text-dark">Zubayer Al Hasan</div>
											<span class="opacity-50">Dhaka</span>
										</div>
									</div>
									<img src="/assets/images/shape/shape_26.svg" alt="" class="quote-icon" />
								</div>
							</div>
							<!-- /.feedback-block-two -->
						</div>
					</SlickSlider>
				</div>
			</div>
		</div>
	</div>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/shape/shape_27.svg"
		alt=""
		class="lazy-img shapes shape_01"
	/>
</section>
