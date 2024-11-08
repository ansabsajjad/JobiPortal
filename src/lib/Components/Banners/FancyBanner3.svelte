<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses = 'mt-75 lg-mt-50';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { Fancybox } from '@fancyapps/ui?client';
	import { onMount } from 'svelte';
	onMount(() => {
		Fancybox.bind('[data-fancybox]', {
			arrows: true,
			buttons: [
				'zoom',
				//"share",
				'slideShow',
				//"fullScreen",
				//"download",
				'thumbs',
				'close'
			],
			animationEffect: 'zoom-in-out',
			transitionEffect: 'zoom-in-out'
		});
	});
</script>

<section class="fancy-banner-three {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div use:useAnimation class="bg-wrapper position-relative wow fadeInUp">
				<div class="row">
					<div class="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
						<div use:useAnimation class="text-wrapper wow fadeInRight">
							<a
								class="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center"
								data-fancybox=""
								href="https://www.youtube.com/embed/aXFSJTjVjw0"
							>
								<i class="bi bi-play-fill"></i>
							</a>
							<div class="title-one mt-35 lg-mt-30 mb-30 lg-mb-20">
								<h2 class="fw-600 text-white">
									Let’s get started It’s <span style="color: #00BF58;">simple.</span>
								</h2>
							</div>
							<p class="text-white">
								Get access to our top 1% talent as well as a complete set of hybrid workforce
								management tools.
							</p>
						</div>
					</div>
				</div>

				<div class="bottom-content position-relative">
					<div class="row gx-xxl-5 justify-content-between">
						<div class="col-lg-4">
							<div use:useAnimation class="d-flex mt-20 wow fadeInUp">
								<div
									class="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center"
								>
									1
								</div>
								<div class="ps-4 text">
									<div class="fw-500 text-white text-lg mb-10">
										It’s take 2 minutes to open an account.
									</div>
									<a href="/signup" class="fw-500 text-uppercase">Open Acount</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div use:useAnimation class="d-flex mt-20 wow fadeInUp" data-wow-delay="0.2s">
								<div
									class="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center"
								>
									2
								</div>
								<div class="ps-4 text">
									<div class="fw-500 text-white text-lg mb-10">
										Find talents or search your desire work.
									</div>
									<a href="/signup" class="fw-500 text-uppercase">Apply job or hire</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div use:useAnimation class="d-flex mt-20 wow fadeInUp" data-wow-delay="0.35s">
								<div
									class="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center"
								>
									3
								</div>
								<div class="ps-4 text">
									<div class="fw-500 text-white text-lg mb-10">
										Get work done quickly with jobi gatweay.
									</div>
									<a href="/signup" class="fw-500 text-uppercase">Payment Method</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</slot>
	<!-- /.bg-wrapper -->
</section>
