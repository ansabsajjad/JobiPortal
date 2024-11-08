<script>
	import { useAnimation } from '$lib/js/animations.js';
	import JobPortel from '$lib/Components/JobSection/JobPortel.svelte';
	import Blog2 from './../../lib/Components/Blogs/Blog2.svelte';
	import Category2 from '../../lib/Components/Category/Category2.svelte';
	import HowToWork2 from './../../lib/Components/HowToWork/HowToWork2.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import HeroBanner2 from './../../lib/Components/Banners/HeroBanner2.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Features1 from '../../lib/Components/Features/Features1.svelte';
	import Features3 from '../../lib/Components/Features/Features3.svelte';
	import Footer1 from '../../lib/Components/Footers/Footer1.svelte';
	import Feedack2 from '../../lib/Components/Feedback/Feedack2.svelte';
	import Countup from 'svelte-countup?client';
	import { onMount } from 'svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { Fancybox } from '@fancyapps/ui?client';
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

	// Props
	let isPreloading = true;
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<Header
			addonClasses={'menu-overlay sticky-menu'}
			navbarClasses={'navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-2'}
			topHeaderClasses={'d-flex align-items-center justify-content-between'}
			isCategoryShow={false}
		>
			<div slot="logo" class="logo order-lg-0">
				<a href="/index" class="d-flex align-items-center">
					<img src="/assets/images/logo/logo_04.png" alt="" />
				</a>
			</div>

			<div slot="sidebarLogo" class="logo">
				<a href="/index" class="d-block"
					><img src="/assets/images/logo/logo_04.png" alt="" width="100" /></a
				>
			</div>

			<div slot="right-widget" class="right-widget ms-auto ms-lg-0 order-lg-3">
				<ul class="d-flex align-items-center style-none">
					<li>
						<a
							href="#!"
							class="fw-500 text-dark"
							data-bs-toggle="modal"
							data-bs-target="#loginModal">Login</a
						>
					</li>
					<li class="d-none d-md-block ms-4">
						<a href="/signup" class="btn-five">Register</a>
					</li>
				</ul>
			</div>

			<li slot="sidebar-btn" class="d-md-none mt-5">
				<a href="/signup" class="btn-five w-100">Register</a>
			</li>
			<!--/.right-widget-->
		</Header>
		<HeroBanner2 />
		<HowToWork2 />
		<Features1 addSectionClasses={'position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80'}>
			<div slot="row">
				<div class="row align-items-center">
					<div class="col-lg-5 order-lg-last">
						<div use:useAnimation class="ps-lg-4 wow fadeInRight">
							<div class="title-one">
								<h2 class="fw-600">Get the job <br /> of your dreams quickly.</h2>
							</div>
							<p class="mt-40 md-mt-20 mb-40 md-mb-20 text-md">
								AInciddnt ut labore et dolor magna aliu. enim ad mim venam, quis nostru
							</p>
							<ul class="list-style-one style-none">
								<li>Seamless searching</li>
								<li>Protected payments, every time</li>
								<li>Wide rang of job categories</li>
							</ul>
							<a href="/about-us" class="btn-five border6 mt-70 md-mt-30">Learn More</a>
						</div>
					</div>
					<div class="col-lg-7 col-md-8 m-auto order-lg-first">
						<div class="img-data position-relative me-xl-5 md-mt-20">
							<div class="row align-items-center gx-xl-5">
								<div class="col-6">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/assets/img_11.jpg"
										alt=""
										class="lazy-img mt-35 md-mt-20 wow fadeInLeft"
										use:useAnimation
									/>
								</div>
								<div class="col-6">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/assets/img_12.jpg"
										alt=""
										class="lazy-img mt-35 md-mt-20 wow fadeInDown"
										use:useAnimation
									/>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/assets/img_13.jpg"
										alt=""
										class="lazy-img mt-35 md-mt-20 wow fadeInUp"
										use:useAnimation
									/>
								</div>
							</div>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_06.svg"
								alt=""
								class="lazy-img shapes shape_02"
							/>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_21.svg"
								alt=""
								class="lazy-img shapes shape_03"
							/>
							<a
								class="fancybox rounded-circle video-icon tran3s text-center"
								data-fancybox=""
								href="/https://www.youtube.com/embed/aXFSJTjVjw0"
							>
								<i class="bi bi-play-fill"></i>
							</a>
						</div>
					</div>
				</div>

				<div class="border-bottom pb-50 lg-pb-20 mt-90 lg-mt-30">
					<div class="row justify-content-center">
						<div class="col-sm-4">
							<div use:useAnimation class="counter-block-one mt-25 text-center wow fadeInUp">
								<div class="main-count fw-500 text-dark">
									<span class="counter"><Countup duration={1500} value={7} /></span>million
								</div>
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
								<div class="main-count fw-500 text-dark">
									<span class="counter"><Countup duration={1500} value={30} /></span>k+
								</div>
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
								<div class="main-count fw-500 text-dark">
									<span class="counter"><Countup duration={1500} value={13} /></span>billion
								</div>
								<p>Dollar Payout</p>
							</div>
							<!-- /.counter-block-one -->
						</div>
					</div>
				</div>
				<!-- /.border-bottom -->
			</div>
		</Features1>
		<Category2 />
		<Features3 />
		<Feedack2 />
		<Blog2 />
		<JobPortel addonClasses={'top-border pt-60 lg-pt-40 pb-65 lg-pb-40'}>
			<div slot="btn-group" class="col-lg-5">
				<ul class="btn-group style-none d-flex justify-content-center justify-content-lg-end">
					<li class="me-2">
						<a href="/job-list-v1" class="btn-seven border6">Looking for job?</a>
					</li>
					<li class="ms-2"><a href="/signup" class="btn-five border6">Post a job</a></li>
				</ul>
			</div>
		</JobPortel>
		<Footer1 />
		<BackToTop />
		<Model1 />
	{/if}
</div>
