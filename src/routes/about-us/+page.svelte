<script>
	import HowToWork from './../../lib/Components/HowToWork/HowToWork.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Features3 from './../../lib/Components/Features/Features3.svelte';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import Features1 from '../../lib/Components/Features/Features1.svelte';
	import Feedack1 from '../../lib/Components/Feedback/Feedack1.svelte';
	import Countup from 'svelte-countup?client';
	import { onMount } from 'svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { Fancybox } from '@fancyapps/ui?client';
	// Props
	let isPreloading = true;

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

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<Header>
			<div slot="right-widget" class="right-widget ms-auto order-lg-3">
				<ul class="d-flex align-items-center style-none">
					<li class="d-none d-md-block">
						<a href="/dashboard/employer-dashboard-submit-job" class="job-post-btn tran3s"
							>Post Job</a
						>
					</li>
					<li>
						<a href="#!" class="login-btn-one" data-bs-toggle="modal" data-bs-target="#loginModal"
							>Login</a
						>
					</li>
					<li class="d-none d-md-block ms-4">
						<a href="/candidates-v1" class="btn-one">Hire Top Talents</a>
					</li>
				</ul>
			</div>
			<!--/.right-widget-->
		</Header>
		<InnerBanner1>
			<div slot="row" class="row">
				<div class="col-xl-6 m-auto text-center">
					<div class="title-two">
						<h2 class="text-white">About us</h2>
					</div>
					<ul class="style-none d-flex justify-content-center page-pagination mt-15">
						<li><a href="/index">Home</a></li>
						<li><i class="bi bi-chevron-right"></i></li>
						<li>About</li>
					</ul>
				</div>
			</div>
		</InnerBanner1>
		<Features3 addonClasses={'position-relative pt-100 lg-pt-80 md-pt-50'}>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-xxl-11 m-auto">
						<div class="row">
							<div class="col-lg-5">
								<div class="title-one mt-30 md-mb-40">
									<h2 class="fw-500">We’ve been helping customer globally.</h2>
								</div>
							</div>
							<div class="col-lg-6 ms-auto">
								<div use:useAnimation class="wow fadeInRight">
									<div
										class="accordion accordion-style-one color-two ps-xxl-5 ms-xxl-4"
										id="accordionOne"
									>
										<div class="accordion-item">
											<div class="accordion-header" id="headingOne">
												<button
													class="accordion-button"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Who we are?
												</button>
											</div>
											<div
												id="collapseOne"
												class="accordion-collapse collapse show"
												aria-labelledby="headingOne"
												data-bs-parent="#accordionOne"
											>
												<div class="accordion-body">
													<p>
														Our founders Dustin Moskovitz and Justin lorem Rosenstein met while
														leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet
														consectetur adipisicing elit.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<div class="accordion-header" id="headingTwo">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													What’s our goal
												</button>
											</div>
											<div
												id="collapseTwo"
												class="accordion-collapse collapse"
												aria-labelledby="headingTwo"
												data-bs-parent="#accordionOne"
											>
												<div class="accordion-body">
													<p>
														Our founders Dustin Moskovitz and Justin lorem Rosenstein met while
														leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet
														consectetur adipisicing elit.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<div class="accordion-header" id="headingThree">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseThree"
													aria-expanded="false"
													aria-controls="collapseThree"
												>
													Our vision
												</button>
											</div>
											<div
												id="collapseThree"
												class="accordion-collapse collapse"
												aria-labelledby="headingThree"
												data-bs-parent="#accordionOne"
											>
												<div class="accordion-body">
													<p>
														Our founders Dustin Moskovitz and Justin lorem Rosenstein met while
														leading Engineering teams at Facebook quesi. Lorem ipsum dolor sit, amet
														consectetur adipisicing elit.
													</p>
												</div>
											</div>
										</div>
									</div>
									<!-- /.accordion-style-one -->
								</div>
							</div>
						</div>

						<div
							class="video-post d-flex align-items-center justify-content-center mt-100 lg-mt-50 mb-50 lg-mb-30"
						>
							<a
								class="fancybox rounded-circle video-icon tran3s text-center"
								data-fancybox=""
								href="https://www.youtube.com/embed/aXFSJTjVjw0"
							>
								<i class="bi bi-play"></i>
							</a>
						</div>
						<div class="border-bottom pb-50 lg-pb-10">
							<div class="row">
								<div class="col-sm-4">
									<div use:useAnimation class="counter-block-one mt-25 text-center wow fadeInUp">
										<h2 class="main-count fw-500">
											<span class="counter"><Countup duration={1500} value={7} /></span>million
										</h2>
										<p>Completed Jobs</p>
									</div>
									<!-- /.counter-block-one -->
								</div>
								<div class="col-sm-4">
									<div
										use:useAnimation
										class="counter-block-one mt-25 text-center wow fadeInUp"
										data-wow-delay="0.2s"
									>
										<h2 class="main-count fw-500">
											<span class="counter"><Countup duration={1500} value={30} /></span>k+
										</h2>
										<p>Worldwide Client</p>
									</div>
									<!-- /.counter-block-one -->
								</div>
								<div class="col-sm-4">
									<div
										use:useAnimation
										class="counter-block-one mt-25 text-center wow fadeInUp"
										data-wow-delay="0.35s"
									>
										<h2 class="main-count fw-500">
											<span class="counter"><Countup duration={1500} value={13} /></span>billion
										</h2>
										<p>Dollar Payout</p>
									</div>
									<!-- /.counter-block-one -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Features3>
		<Features1
			addSectionClasses={'position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80 pb-180 xl-pb-150'}
		/>
		<HowToWork />
		<Feedack1 />
		<JobPortel addonClasses={'top-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
