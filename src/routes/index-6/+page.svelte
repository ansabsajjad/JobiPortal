<script>
	import FancyBanner5 from './../../lib/Components/Banners/FancyBanner5.svelte';
	import Features2 from './../../lib/Components/Features/Features2.svelte';
	import Blog1 from './../../lib/Components/Blogs/Blog1.svelte';
	import Features1 from './../../lib/Components/Features/Features1.svelte';
	import JobListing from './../../lib/Components/JobSection/JobListing.svelte';
	import Category3 from './../../lib/Components/Category/Category3.svelte';
	import HeroBanner6 from './../../lib/Components/Banners/HeroBanner6.svelte';
	import Header from '$lib/Header.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import SlickSlider from '../../lib/Components/Slider/SlickSlider.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Category5 from '../../lib/Components/Category/Category5.svelte';
	import FancyBanner3 from '../../lib/Components/Banners/FancyBanner3.svelte';
	import Feedack5 from '../../lib/Components/Feedback/Feedack5.svelte';
	import Footer from '../../lib/Components/Footers/Footer.svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { Fancybox } from '@fancyapps/ui?client';
	import { niceSelect } from '$lib/js/custom.js';
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
			addonClasses={'menu-overlay menu-style-two sticky-menu'}
			isCategoryShow={false}
			navbarClasses={'navbar-expand-lg p0 ms-3 ms-lg-5 order-lg-1'}
		>
			<div slot="logo" class="logo order-lg-0">
				<a href="/index" class="d-flex align-items-center">
					<img src="/assets/images/logo/logo_06.png" alt="" />
				</a>
			</div>
			<div slot="sidebarLogo" class="logo">
				<a href="/index" class="d-block"
					><img src="/assets/images/logo/logo_06.png" alt="" width="100" /></a
				>
			</div>
			<!-- logo -->
			<div slot="right-widget" class="right-widget ms-auto ms-lg-0 order-lg-2">
				<ul class="d-flex align-items-center style-none">
					<li>
						<a
							href="#!"
							class="fw-500 login-btn-three tran3s"
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
		</Header>
		<HeroBanner6 />
		<div class="partner-logos bg-color border-0 pt-45 pb-45 ps-3 pe-3">
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
		<Category5 addSectionClasses={'position-relative mt-85 md-mt-60'}>
			<div slot="container" class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-8">
						<div class="title-four text-center text-lg-start">
							<h2>Most Demanding Categories.</h2>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="d-flex justify-content-lg-end">
							<a href="/job-grid-v3" class="btn-six dark d-none d-lg-inline-block"
								>Explore all fields</a
							>
						</div>
					</div>
				</div>
				<div
					class="card-wrapper d-flex flex-wrap justify-content-center justify-content-lg-between pt-50 lg-pt-30"
				>
					<div use:useAnimation class="card-style-seven text-center mt-15 wow fadeInUp">
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #EAFBFD;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_31.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">UI/UX Design</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
					<div
						use:useAnimation
						class="card-style-seven text-center mt-15 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #FFFAEC;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_32.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Development</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
					<div
						use:useAnimation
						class="card-style-seven text-center mt-15 wow fadeInUp"
						data-wow-delay="0.15s"
					>
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #FFEBFB;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_33.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Marketing</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
					<div
						use:useAnimation
						class="card-style-seven text-center mt-15 wow fadeInUp"
						data-wow-delay="0.16s"
					>
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #E8F7E9;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_34.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Telemarketing</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
					<div
						use:useAnimation
						class="card-style-seven text-center mt-15 wow fadeInUp"
						data-wow-delay="0.17s"
					>
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #F7F5FF;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_35.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Accounting</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
					<div
						use:useAnimation
						class="card-style-seven text-center mt-15 wow fadeInUp"
						data-wow-delay="0.18s"
					>
						<a
							href="/job-grid-v2"
							class="wrapper d-flex align-items-center"
							style="background: #FFF3EA;"
						>
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_36.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Editing</div>
						</a>
					</div>
					<!-- /.card-style-seven -->
				</div>
				<!-- /.card-wrapper -->
				<div class="text-center mt-40 d-lg-none">
					<a href="/job-grid-v3" class="btn-six dark">Explore all fields</a>
				</div>
			</div>
		</Category5>
		<Category3 addSectionClasses={'pt-140 lg-pt-100'}>
			<div slot="title" class="title-one mb-60 lg-mb-40">
				<h2 class="main-font color-blue">Trending Job</h2>
			</div>
		</Category3>
		<JobListing
			addSectionClasses={'mt-160 lg-mt-100 sm-mt-80'}
			jobListingWrapperClasses={'mt-60 md-mt-40'}
			jobListClass={'position-relative border-style mb-20'}
		>
			<div slot="title" class="title-one">
				<h2 class="main-font color-blue">New job listing</h2>
			</div>
		</JobListing>
		<FancyBanner3 addSectionClasses={'mt-150 lg-mt-100'}>
			<div
				slot="container"
				class="bg-wrapper pt-85 lg-pt-50 pb-80 lg-pb-50 position-relative wow fadeInUp"
			>
				<div class="container">
					<div class="row">
						<div class="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
							<div use:useAnimation class="text-wrapper p0 mb-50 md-mb-20 wow fadeInRight">
								<a
									class="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center"
									data-fancybox=""
									href="/https://www.youtube.com/embed/aXFSJTjVjw0"
								>
									<i class="bi bi-play-fill"></i>
								</a>
								<div class="title-one mt-25 mb-25 lg-mb-20">
									<h2 class="text-white main-font">
										Let’s get started It’s <span style="color: #FFD500;">simple.</span>
									</h2>
								</div>
								<p class="text-white text-md">
									Get access to our top 1% talent as well as a complete set of hybrid workforce
									management tools.
								</p>
							</div>
						</div>
					</div>

					<div class="row gx-xl-5 justify-content-between">
						<div class="col-lg-4 d-flex">
							<div use:useAnimation class="card-style-nine w-100 d-flex mt-20 wow fadeInUp">
								<div class="icon rounded-circle d-flex align-items-center justify-content-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images//icon/icon_37.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="ps-4 text d-flex flex-column">
									<div class="text-lg mb-10">It’s take 2 minutes to open an account.</div>
									<a href="#!" class="fw-500 text-uppercase">Open Acount</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 d-flex">
							<div
								use:useAnimation
								class="card-style-nine w-100 d-flex mt-20 wow fadeInUp"
								data-wow-delay="0.2s"
							>
								<div class="icon rounded-circle d-flex align-items-center justify-content-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images//icon/icon_38.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="ps-4 text d-flex flex-column">
									<div class="text-lg mb-10">Find talents or search your desire work.</div>
									<a href="#!" class="fw-500 text-uppercase">Apply job or hire</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 d-flex">
							<div
								use:useAnimation
								class="card-style-nine w-100 d-flex mt-20 wow fadeInUp"
								data-wow-delay="0.35s"
							>
								<div class="icon rounded-circle d-flex align-items-center justify-content-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images//icon/icon_39.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="ps-4 text d-flex flex-column">
									<div class="text-lg mb-10">Get work done quickly with jobi gatweay.</div>
									<a href="#!" class="fw-500 text-uppercase">Payment Method</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FancyBanner3>
		<Features1 addSectionClasses={'position-relative pt-180 xl-pt-150 lg-pt-100'}>
			<div slot="row" class="row">
				<div class="col-lg-5">
					<div use:useAnimation class="wow fadeInLeft">
						<div class="title-two">
							<div class="sub-title">Why choose us?</div>
							<h2 class="main-font color-blue">World of talent at your fingertips</h2>
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
						<a href="/candidates-v3" class="btn-five mt-45 lg-mt-20">Learn More</a>
					</div>
				</div>
				<div class="col-lg-6 col-md-11 ms-auto me-auto me-lg-0">
					<div class="img-data position-relative md-mt-50">
						<div class="row">
							<div class="col-md-6 col-sm-8 col-10">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images//assets/img_37.jpg"
									alt=""
									class="lazy-img img01"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-5">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images//assets/img_38.jpg"
									alt=""
									class="lazy-img img02 mt-35"
								/>
							</div>
							<div class="col-md-6 col-7">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images//assets/img_04.jpg"
									alt=""
									class="lazy-img img01 mt-35"
								/>
							</div>
						</div>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images//assets/screen_01.png"
							alt=""
							class="lazy-img shapes screen01 wow fadeInRight"
						/>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images//assets/screen_02.png"
							alt=""
							class="lazy-img shapes screen02 wow fadeInUp"
						/>
						<img
							use:useAnimation
							src="/assets/images/lazy.svg"
							data-src="/assets/images//assets/screen_03.png"
							alt=""
							class="lazy-img shapes screen03 wow fadeInUp"
						/>
					</div>
				</div>
			</div>
		</Features1>
		<Feedack5 />
		<Blog1 addSectionClasses={'mt-160 xl-mt-150 lg-mt-100'}>
			<div slot="container" class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-xl-7">
							<div class="title-one mb-30 lg-mb-10">
								<h2 class="main-font color-blue">Jobi Guides</h2>
							</div>
						</div>
					</div>

					<div class="row gx-xxl-5">
						<div class="col-lg-4 col-md-6">
							<article use:useAnimation class="blog-meta-one mt-35 xs-mt-20 wow fadeInUp">
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_04.jpg"
											alt=""
											class="lazy-img w-100 tran4s"
										/></a
									>
								</figure>
								<div class="post-data mt-30 lg-mt-20">
									<div><a href="/blog-details" class="date">23 Apr, 2022</a></div>
									<a href="/blog-details" class="mt-10 mb-5"
										><h4 class="tran3s blog-title">Challenge yourself and win the future.</h4></a
									>
									<p class="mb-20">
										This response is important for our ability to learn from mistakes, but words…
									</p>
									<a href="/blog-details" class="read-more"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_42.svg"
											alt=""
											class="lazy-img"
										/></a
									>
								</div>
							</article>
							<!-- /.blog-meta-one -->
						</div>
						<div class="col-lg-4 col-md-6">
							<article
								use:useAnimation
								class="blog-meta-one mt-35 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_05.jpg"
											alt=""
											class="lazy-img w-100 tran4s"
										/></a
									>
								</figure>
								<div class="post-data mt-30 lg-mt-20">
									<div><a href="/blog-details" class="date">14 March, 2022</a></div>
									<a href="/blog-details" class="mt-10 mb-5"
										><h4 class="tran3s blog-title">
											Designer’s checklist for every UX/UI project.
										</h4></a
									>
									<p class="mb-20">
										This response is important for our ability to learn from mistakes, but words…
									</p>
									<a href="/blog-details" class="read-more"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_42.svg"
											alt=""
											class="lazy-img"
										/></a
									>
								</div>
							</article>
							<!-- /.blog-meta-one -->
						</div>
						<div class="col-lg-4 d-none d-lg-block">
							<article
								use:useAnimation
								class="blog-meta-one mt-35 wow fadeInUp"
								data-wow-delay="0.19s"
							>
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_06.jpg"
											alt=""
											class="lazy-img w-100 tran4s"
										/></a
									>
								</figure>
								<div class="post-data mt-30 lg-mt-20">
									<div><a href="/blog-details" class="date">07 Feb, 2023</a></div>
									<a href="/blog-details" class="mt-10 mb-5"
										><h4 class="tran3s blog-title">
											Make more productive work flow in few steps.
										</h4></a
									>
									<p class="mb-20">
										This response is important for our ability to learn from mistakes, but words…
									</p>
									<a href="/blog-details" class="read-more"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/icon/icon_42.svg"
											alt=""
											class="lazy-img"
										/></a
									>
								</div>
							</article>
							<!-- /.blog-meta-one -->
						</div>
					</div>

					<div class="text-center explore-btn sm-mt-50">
						<a href="/blog-v1" class="btn-six">Explore More</a>
					</div>
				</div>
			</div>
		</Blog1>
		<Features2
			addSectionClasses={'position-relative pt-180 xl-pt-150 lg-pt-100 pb-180 xl-pb-150 lg-pb-120'}
		/>
		<FancyBanner5 addSectionClasses={'bg-image position-relative pt-100 lg-pt-60 pb-100 lg-pb-60'}>
			<div slot="container" class="container">
				<div class="position-relative">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="title-one text-center text-lg-start">
								<h2 class="main-font text-white">Complete job portal for everyone.</h2>
							</div>
						</div>
						<div class="col-lg-5 ms-auto">
							<p class="text-lg text-white mb-35 lg-mb-20 md-mt-20 text-center text-lg-start">
								Find your dream job & earn from all world the leading brands.
							</p>
							<ul
								class="btn-group style-none d-flex justify-content-center justify-content-lg-start"
							>
								<li class="me-2 ms-2 ms-lg-0">
									<a href="/job-list-v1" class="btn-seven border6">Looking for job?</a>
								</li>
								<li class="ms-2 ms-2 ms-lg-0">
									<a href="/candidates-v2" class="btn-five border6">Start Hiring</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</FancyBanner5>
		<Footer addFooterClasses={'bg-two white-version'} addTitleClasses={'text-white'}>
			<div slot="logo">
				<div class="logo mb-15">
					<a href="/index" class="d-flex align-items-center">
						<img src="/assets/images/logo/logo_06.png" alt="" />
					</a>
				</div>
				<!-- logo -->
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/shape/shape_32.svg"
					alt=""
					class="lazy-img mt-80 sm-mt-30 sm-mb-20"
				/>
			</div>
			<div slot="bottom-footer" class="bottom-footer mt-50 lg-mt-20">
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
							<p class="text-center text-white opacity-50 mb-15">Copyright @2023 jobi inc.</p>
						</div>
					</div>
				</div>
			</div>
		</Footer>
		<BackToTop />
		<Model1 />
	{/if}
</div>
