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
				slidesToShow: 4,
				slidesToScroll: 2,
				autoplay: false,
				autoplaySpeed: 3000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
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

<section class="expert-section-one position-relative mt-180 xl-mt-150 md-mt-100">
	<div class="container position-relative">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-6">
				<div class="title-one">
					<h2 class="main-font">Top Experts</h2>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="d-flex justify-content-lg-end">
					<a href="/candidates-v2" class="btn-six d-none d-lg-inline-block">Explore all</a>
				</div>
			</div>
		</div>

		<SlickSlider {settings} classes="expert-slider-two pt-70 lg-pt-40">
			<div class="item">
				<div class="card-style-eight">
					<div class="img-meta mb-20">
						<img src="/assets/images/assets/img_30.jpg" alt="" class="m-auto" />
					</div>
					<a href="/candidate-profile-v2" class="name fw-500 tran3s">Rashed kabir</a>
					<div class="post">UI Designer</div>
				</div>
				<!-- /.card-style-eight -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-eight">
					<div class="img-meta mb-20">
						<img src="/assets/images/assets/img_31.jpg" alt="" class="m-auto" />
					</div>
					<a href="/candidate-profile-v2" class="name fw-500 tran3s">Angelina Jolie </a>
					<div class="post">Finance</div>
				</div>
				<!-- /.card-style-eight -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-eight">
					<div class="img-meta mb-20">
						<img src="/assets/images/assets/img_32.jpg" alt="" class="m-auto" />
					</div>
					<a href="/candidate-profile-v2" class="name fw-500 tran3s">Zubayer Hasan</a>
					<div class="post">Developer</div>
				</div>
				<!-- /.card-style-eight -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-eight">
					<div class="img-meta mb-20">
						<img src="/assets/images/assets/img_33.jpg" alt="" class="m-auto" />
					</div>
					<a href="/candidate-profile-v2" class="name fw-500 tran3s">Maria Gomez</a>
					<div class="post">Marketing Expert</div>
				</div>
				<!-- /.card-style-eight -->
			</div>
			<!-- /.item -->
			<div class="item">
				<div class="card-style-eight">
					<div class="img-meta mb-20">
						<img src="/assets/images/assets/img_32.jpg" alt="" class="m-auto" />
					</div>
					<a href="/candidate-profile-v2" class="name fw-500 tran3s">Elizabeth Foster</a>
					<div class="post">UI/UX Designer</div>
				</div>
				<!-- /.card-style-eight -->
			</div>
			<!-- /.item -->
		</SlickSlider>
		<div class="text-center mt-40 d-lg-none">
			<a href="/candidates-v2" class="btn-six">Explore all</a>
		</div>
	</div>
</section>
