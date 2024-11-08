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
				prevArrow: window.$('.prev_a'),
				nextArrow: window.$('.next_a'),
				centerPadding: '0px',
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					}
				]
			};
		}
	});
</script>

<section class="expert-section-one position-relative mt-180 xl-mt-150 lg-mt-100">
	<div class="container position-relative">
		<div class="row">
			<div class="col-md-7">
				<div class="title-one text-center text-md-start mb-65 md-mb-50">
					<h2>
						Find the best <span class="position-relative"
							>talented <img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_04.svg"
								alt=""
								class="lazy-img shapes shape"
							/></span
						> expert in jobi.
					</h2>
				</div>
			</div>
		</div>

		<SlickSlider {settings} classes="expert-slider-one">
			<div class="item">
				<div class="card-style-three text-center">
					<div class="img-meta mb-40 lg-mb-20">
						<img src="/assets/images/assets/img_05.jpg" alt="" class="m-auto" />
					</div>
					<a href="#!" class="name text-md fw-500 text-dark">Julie Ake</a>
					<div class="post">Product Designer</div>
				</div>
				<!-- /.card-style-three -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-three text-center">
					<div class="img-meta mb-40 lg-mb-20">
						<img src="/assets/images/assets/img_06.jpg" alt="" class="m-auto" />
					</div>
					<a href="#!" class="name text-md fw-500 text-dark">Juan Marko</a>
					<div class="post">Java Developer</div>
				</div>
				<!-- /.card-style-three -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-three text-center">
					<div class="img-meta mb-40 lg-mb-20">
						<img src="/assets/images/assets/img_07.jpg" alt="" class="m-auto" />
					</div>
					<a href="#!" class="name text-md fw-500 text-dark">Elizabeth Foster</a>
					<div class="post">UI/UX Designer</div>
				</div>
				<!-- /.card-style-three -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-three text-center">
					<div class="img-meta mb-40 lg-mb-20">
						<img src="/assets/images/assets/img_08.jpg" alt="" class="m-auto" />
					</div>
					<a href="#!" class="name text-md fw-500 text-dark">Rashed Ka</a>
					<div class="post">Marketing Expert</div>
				</div>
				<!-- /.card-style-three -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-three text-center">
					<div class="img-meta mb-40 lg-mb-20">
						<img src="/assets/images/assets/img_07.jpg" alt="" class="m-auto" />
					</div>
					<a href="#!" class="name text-md fw-500 text-dark">Elizabeth Foster</a>
					<div class="post">UI/UX Designer</div>
				</div>
				<!-- /.card-style-three -->
			</div>
			<!-- /.item -->
		</SlickSlider>
		<ul class="slider-arrows slick-arrow-one d-flex justify-content-center style-none sm-mt-30">
			<li class="prev_a slick-arrow"><i class="bi bi-arrow-left"></i></li>
			<li class="next_a slick-arrow"><i class="bi bi-arrow-right"></i></li>
		</ul>
	</div>
</section>
