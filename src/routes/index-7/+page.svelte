<script>
	import { niceSelect } from '$lib/js/custom.js';
	import Blog1 from './../../lib/Components/Blogs/Blog1.svelte';
	import Faq from './../../lib/Components/Faq/Faq.svelte';
	import TopCompany from './../../lib/Components/TopCompany.svelte';
	import HowToWork2 from './../../lib/Components/HowToWork/HowToWork2.svelte';
	import HeroBanner7 from './../../lib/Components/Banners/HeroBanner7.svelte';
	import Header from '$lib/Header.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import SlickSlider from '../../lib/Components/Slider/SlickSlider.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Footer from '../../lib/Components/Footers/Footer.svelte';
	import Category2 from '../../lib/Components/Category/Category2.svelte';
	import Features1 from '../../lib/Components/Features/Features1.svelte';
	import Feedack from '../../lib/Components/Feedback/Feedack.svelte';
	import FancyBanner6 from '../../lib/Components/Banners/FancyBanner6.svelte';

	let settings;
	onMount(async () => {
		niceSelect();
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			settings = {
				dots: false,
				arrows: false,
				lazyLoad: 'ondemand',
				centerPadding: '0px',
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3500,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 3
						}
					}
				]
			};
		}
	});
	// Props
	let isPreloading = true;
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<Header
			topHeaderClasses={'d-flex align-items-center justify-content-between'}
			addonClasses={'menu-overlay sticky-menu'}
			isCategoryShow={false}
			navbarClasses={'navbar-expand-lg p0 ms-3 ms-lg-5 order-lg-1'}
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
			<!-- logo -->
			<div slot="right-widget" class="right-widget ms-auto ms-lg-0 order-lg-2">
				<ul class="d-flex align-items-center style-none">
					<li>
						<a
							href="#!"
							class="fw-500 login-btn-three dark-style tran3s"
							data-bs-toggle="modal"
							data-bs-target="#loginModal">Login/Sign up</a
						>
					</li>
					<li class="d-none d-md-block ms-3">
						<a href="/dashboard/employer-dashboard-submit-job" class="btn-five">Post a job</a>
					</li>
				</ul>
			</div>
			<li slot="sidebar-btn" class="d-md-none mt-5">
				<a href="/dashboard/employer-dashboard-submit-job" class="btn-five w-100">Post a job</a>
			</li>
			<!--/.right-widget-->
		</Header>
		<HeroBanner7 />
		<div class="partner-logos border-0 pt-45 pb-45 ps-3 pe-3">
			<SlickSlider {settings} classes="partner-slider">
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_03.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_04.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_05.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_06.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_07.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_08.png" alt="" />
					</div>
				</div>
				<div class="item">
					<div class="logo d-flex align-items-center">
						<img src="/assets/images/logo/media_05.png" alt="" />
					</div>
				</div>
			</SlickSlider>
		</div>
		<Category2
			addSectionClasses={'bg-color position-relative mt-45 md-mt-10 pt-150 xl-pt-130 lg-pt-80 pb-170 xl-pb-130 lg-pb-70'}
		>
			<div slot="container">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-sm-8">
							<div class="title-three">
								<h2 class="main-font">Most Demanding Categories.</h2>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="d-none d-sm-flex justify-content-sm-end mt-15">
								<a href="job-grid-v2.html" class="btn-six">All Categories</a>
							</div>
						</div>
					</div>
					<div class="card-wrapper row mt-80 lg-mt-20">
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_12.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Design & <br />Development.</div>
									<div class="total-job">2340 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_13.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Customer Marketing <br />& Sales.</div>
									<div class="total-job">1560 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_14.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Business <br />Marketing.</div>
									<div class="total-job">2210 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_15.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Business <br />Development.</div>
									<div class="total-job">980 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_16.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Programing & <br />Code</div>
									<div class="total-job">1687 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_17.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Video Edition <br />& 3D work</div>
									<div class="total-job">758 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
								<a href="job-grid-v2.html" class="d-block">
									<div class="icon tran3s d-flex align-items-center justify-content-center">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_18.svg"
											alt=""
											class="lazy-img"
										/>
									</div>
									<div class="title tran3s fw-500 text-lg">Art & <br />Animation.</div>
									<div class="total-job">1452 vacancy</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
							<div
								class="card-style-four bg-color tran3s w-100 mt-30 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<a href="job-grid-v2.html" class="d-block">
									<div class="title text-white">13k+</div>
									<div class="text-lg text-white">Job already posted</div>
									<div class="d-flex align-items-center justify-content-end mt-50">
										<img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/shape/shape_22.svg"
											alt=""
											class="lazy-img"
										/>
										<div class="icon tran3s d-flex align-items-center justify-content-center ms-5">
											<img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/icon/icon_19.svg"
												alt=""
												class="lazy-img"
											/>
										</div>
									</div>
								</a>
							</div>
							<!-- /.card-style-four -->
						</div>
					</div>
					<!-- /.card-wrapper -->
					<div class="text-center d-sm-none mt-50">
						<a href="job-grid-v2.html" class="btn-six">All Categories</a>
					</div>
				</div>
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/shape/shape_24.svg"
					alt=""
					class="lazy-img shapes shape_01"
				/>
			</div>
		</Category2>
		<HowToWork2 addSectionClasses={'position-relative pt-130 lg-pt-80'}>
			<div slot="container" class="container">
				<div class="title-one text-center mb-70 lg-mb-30">
					<h2 class="main-font">How it’s Work?</h2>
				</div>

				<div class="border-bottom">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-70 lg-pb-20 wow fadeInUp"
							>
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_43.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 lg-mt-20 mb-10">
									Create Account
								</div>
								<p>It’s very easy to open an account and start your journey.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-70 lg-pb-20 arrow-style wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_44.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 lg-mt-20 mb-10">
									Complete your profile.
								</div>
								<p>Complete your profile with all the info to get attention of client.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-70 lg-pb-20 wow fadeInUp"
								data-wow-delay="0.19s"
							>
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_45.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 lg-mt-20 mb-10">
									Apply job or hire.
								</div>
								<p>Apply & get your preferable jobs with all the requirments and get it.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
					</div>
				</div>
			</div>
		</HowToWork2>
		<Features1 addSectionClasses={'position-relative pt-150 lg-pt-100'}>
			<div slot="row" class="row align-items-center">
				<div class="col-lg-5 order-lg-last">
					<div use:useAnimation class="wow fadeInRight">
						<div class="title-two">
							<div class="sub-title">Why choose us?</div>
							<h2 class="main-font">World of talent at your fingertips</h2>
						</div>
						<div class="accordion accordion-style-one color-two mt-40" id="accordionOne">
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
										Seamless Search
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
											It only takes 5 minutes. Set-up is smooth and simple, with fully customisable
											page design to reflect your brand.
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
										Hire top talents
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
											It only takes 5 minutes. Set-up is smooth and simple, with fully customisable
											page design to reflect your brand.
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
										Protected payments, every time
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
											It only takes 5 minutes. Set-up is smooth and simple, with fully customisable
											page design to reflect your brand.
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- /.accordion-style-one -->
						<a href="/candidates-v2" class="btn-five mt-45 md-mt-30">Learn More</a>
					</div>
				</div>
				<div class="col-lg-7 col-md-11 m-auto order-lg-first">
					<div class="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
						<div class="row">
							<div class="col-md-6 col-sm-8 col-10">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_37.jpg"
									alt=""
									class="lazy-img img01"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-5">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_38.jpg"
									alt=""
									class="lazy-img img02 mt-35"
								/>
							</div>
							<div class="col-md-6 col-7">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_04.jpg"
									alt=""
									class="lazy-img img01 mt-35"
								/>
							</div>
						</div>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_01.png"
							alt=""
							class="lazy-img shapes screen01 wow fadeInRight"
						/>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_02.png"
							alt=""
							class="lazy-img shapes screen02 wow fadeInUp"
						/>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_03.png"
							alt=""
							class="lazy-img shapes screen03 wow fadeInUp"
						/>
					</div>
				</div>
			</div>
		</Features1>
		<TopCompany />
		<Feedack addSectionClasses={'pt-120 lg-pt-100'}>
			<div slot="title" class="col-lg-6 col-md-7">
				<div class="title-one mb-65 md-mb-50">
					<h2 class="main-font">Trusted by leading startups.</h2>
				</div>
			</div>
		</Feedack>
		<Faq addSectionClasses={'position-relative mt-180 xl-mt-150 lg-mt-80'}>
			<div slot="container" class="container">
				<div class="title-one text-center">
					<h2 class="main-font">Questions & Answers</h2>
				</div>
				<div class="mt-60 lg-mt-30">
					<div class="row">
						<div class="col-xxl-11 m-auto">
							<div class="accordion accordion-style-two" id="accordionTwo">
								<div class="accordion-item">
									<div class="accordion-header" id="FheadingOneF">
										<button
											class="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#FcollapseOne"
											aria-expanded="false"
											aria-controls="FcollapseOne"
										>
											How does the free trial work?
										</button>
									</div>
									<div
										id="FcollapseOne"
										class="accordion-collapse collapse"
										aria-labelledby="FheadingOne"
										data-bs-parent="#accordionTwo"
									>
										<div class="accordion-body">
											<p>
												Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur.
											</p>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="FheadingTwo">
										<button
											class="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#FcollapseTwo"
											aria-expanded="false"
											aria-controls="FcollapseTwo"
										>
											How do you find different criteria in your process?
										</button>
									</div>
									<div
										id="FcollapseTwo"
										class="accordion-collapse collapse"
										aria-labelledby="FheadingTwo"
										data-bs-parent="#accordionTwo"
									>
										<div class="accordion-body">
											<p>
												Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur.
											</p>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="FheadingThree">
										<button
											class="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#FcollapseThree"
											aria-expanded="false"
											aria-controls="FcollapseThree"
										>
											What do you look for in a founding team?
										</button>
									</div>
									<div
										id="FcollapseThree"
										class="accordion-collapse collapse show"
										aria-labelledby="FheadingThree"
										data-bs-parent="#accordionTwo"
									>
										<div class="accordion-body">
											<p>
												Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur.
											</p>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="FheadingFour">
										<button
											class="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#FcollapseFour"
											aria-expanded="false"
											aria-controls="FcollapseFour"
										>
											Do you recommend Pay as you go or Pre pay?
										</button>
									</div>
									<div
										id="FcollapseFour"
										class="accordion-collapse collapse"
										aria-labelledby="FheadingFour"
										data-bs-parent="#accordionTwo"
									>
										<div class="accordion-body">
											<p>
												Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur.
											</p>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="FheadingFive">
										<button
											class="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#FcollapseFive"
											aria-expanded="false"
											aria-controls="FcollapseFive"
										>
											What do I get for $0 with my plan?
										</button>
									</div>
									<div
										id="FcollapseFive"
										class="accordion-collapse collapse"
										aria-labelledby="FheadingFive"
										data-bs-parent="#accordionTwo"
									>
										<div class="accordion-body">
											<p>
												Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
												cillum dolore eu fugiat nulla pariatur.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- /.accordion-style-two -->
						</div>
					</div>
				</div>
				<!-- ./bg-wrapper -->
				<div use:useAnimation class="text-center mt-50 lg-mt-30 wow fadeInUp">
					<div class="btn-eight fw-500">
						Don’t find the answer? We can help. <a href="/faq">Click here</a>
					</div>
				</div>
			</div>
		</Faq>
		<Blog1 addSectionClasses={'mt-160 xl-mt-130 lg-mt-100'}>
			<div slot="container" class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-xl-7">
							<div class="title-one mb-20 lg-mb-10">
								<h2 class="main-font">Jobi Guides</h2>
							</div>
						</div>
					</div>

					<div class="row gx-xl-5">
						<div class="col-sm-6">
							<article use:useAnimation class="blog-meta-two mt-35 xs-mt-20 wow fadeInUp">
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_09.jpg"
											alt=""
											class="lazy-img w-100 tran4s"
										/></a
									>
									<a href="/blog-details" class="tags fw-500">Soltuion</a>
								</figure>
								<div class="post-data mt-35 lg-mt-20">
									<div class="date">
										<span class="fw-500 text-dark">Featured -</span>
										<a href="/blog-details">18 Jul 2018</a>
									</div>
									<a href="/blog-details"
										><h4 class="tran3s blog-title">
											Print, publishing qui visual ux quis layout mockups.
										</h4></a
									>
									<a href="/blog-details" class="continue-btn tran3s d-flex align-items-center">
										<span class="fw-500 me-2">Continue Reading</span>
										<i class="bi bi-arrow-right"></i>
									</a>
								</div>
							</article>
							<!-- /.blog-meta-two -->
						</div>
						<div class="col-sm-6">
							<article class="blog-meta-two mt-35 wow fadeInUp" data-wow-delay="0.1s">
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_10.jpg"
											alt=""
											class="lazy-img w-100 tran4s"
										/></a
									>
									<a href="/blog-details" class="tags fw-500">DESIGN</a>
								</figure>
								<div class="post-data mt-35 lg-mt-20">
									<div class="date"><a href="/blog-details">16 Jul 2018</a></div>
									<a href="/blog-details"
										><h4 class="tran3s blog-title">
											Designer’s Checklist for Every UX/UI Project.
										</h4></a
									>
									<a href="/blog-details" class="continue-btn tran3s d-flex align-items-center">
										<span class="fw-500 me-2">Continue Reading</span>
										<i class="bi bi-arrow-right"></i>
									</a>
								</div>
							</article>
							<!-- /.blog-meta-two -->
						</div>
					</div>

					<div class="text-center explore-btn sm-mt-50">
						<a href="/blog-v1" class="btn-six">Explore More</a>
					</div>
				</div>
			</div>
		</Blog1>
		<FancyBanner6 />
		<Footer>
			<div slot="logo">
				<div class="logo mb-15">
					<a href="/index" class="d-flex align-items-center">
						<img src="/assets/images/logo/logo_04.png" alt="" />
					</a>
				</div>
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/shape/shape_28.svg"
					alt=""
					class="lazy-img mt-80 sm-mt-30 sm-mb-20"
				/>
				<!-- logo -->
			</div>
			<div slot="newsletter" class="col-lg-4 mb-20 footer-newsletter">
				<h5 class="footer-title">Newsletter</h5>
				<p>Join & get important new regularly</p>
				<form action="#" class="d-flex border-style">
					<input type="email" placeholder="Enter your email*" />
					<button>Send</button>
				</form>
				<p class="note">We only send interesting and relevant emails.</p>
			</div>
			<div slot="bottom-footer" class="bottom-footer">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-4 order-lg-3 mb-15">
							<ul
								class="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon"
							>
								<li><a href="#!"><i class="bi bi-whatsapp"></i></a></li>
								<li><a href="#!"><i class="bi bi-dribbble"></i></a></li>
								<li><a href="#!"><i class="bi bi-google"></i></a></li>
								<li><a href="#!"><i class="bi bi-instagram"></i></a></li>
							</ul>
						</div>
						<div class="col-lg-4 order-lg-1 mb-15">
							<ul
								class="d-flex style-none bottom-nav justify-content-center justify-content-lg-start"
							>
								<li><a href="/contact">Privacy & Terms.</a></li>
								<li><a href="/contact"> Contact Us</a></li>
							</ul>
						</div>
						<div class="col-lg-4 order-lg-2">
							<p class="text-center mb-15">Copyright @2023 jobi inc.</p>
						</div>
					</div>
				</div>
			</div>
		</Footer>
		<BackToTop />
		<Model1 />
	{/if}
</div>
