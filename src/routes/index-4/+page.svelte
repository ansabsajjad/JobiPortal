<script>
	import { niceSelect } from '$lib/js/custom.js';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Features1 from './../../lib/Components/Features/Features1.svelte';
	import Feedack from './../../lib/Components/Feedback/Feedack.svelte';
	import JobListing from './../../lib/Components/JobSection/JobListing.svelte';
	import FancyBanner4 from './../../lib/Components/Banners/FancyBanner4.svelte';
	import Category1 from './../../lib/Components/Category/Category1.svelte';
	import HeroBanner4 from './../../lib/Components/Banners/HeroBanner4.svelte';
	import Header from '$lib/Header.svelte';
	import HowToWork2 from './../../lib/Components/HowToWork/HowToWork2.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Faq from '../../lib/Components/Faq/Faq.svelte';
	import Footer1 from '../../lib/Components/Footers/Footer1.svelte';
	import { onMount } from 'svelte';
	// Props
	let isPreloading = true;
	onMount(() => {
		niceSelect();
	});
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<Header
			addonClasses={'menu-overlay sticky-menu'}
			topHeaderClasses={'d-flex align-items-center justify-content-between'}
			navbarClasses={'navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-1'}
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
			<div slot="right-widget" class="right-widget ms-auto ms-lg-0 order-lg-2">
				<ul class="d-flex align-items-center style-none">
					<li>
						<a
							href="#!"
							class="fw-500 text-dark"
							data-bs-toggle="modal"
							data-bs-target="#loginModal">Login</a
						>
					</li>
					<li class="d-none d-md-block ms-4"><a href="/signup" class="btn-five">Register</a></li>
				</ul>
			</div>
			<li slot="sidebar-btn" class="d-md-none mt-5">
				<a href="/signup" class="btn-five w-100">Register</a>
			</li>
			<!--/.right-widget-->
		</Header>
		<HeroBanner4 />
		<!-- <Category1 addonClasses={'position-relative mt-120 lg-mt-80'}>
			<div slot="container" class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-8">
						<div class="title-three">
							<h2 class="fw-600 color-blue">Most Demanding Categories.</h2>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="d-flex justify-content-lg-end">
							<a href="/job-grid-v2" class="btn-six d-none d-lg-inline-block">Explore all fields</a>
						</div>
					</div>
				</div>
				<div class="card-wrapper row justify-content-center mt-45 lg-mt-30">
					<div class="card-style-one text-center mt-20 wow fadeInUp">
						<a href="/job-grid-v3" class="wrapper active">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_01.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">UI/UX Design</div>
							<div class="total-job">12k+ Jobs</div>
						</a>
					</div>
					
					<div
						use:useAnimation
						class="card-style-one text-center mt-20 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v3" class="wrapper">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_02.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Development</div>
							<div class="total-job">8k+ Jobs</div>
						</a>
					</div>
				
					<div
						use:useAnimation
						class="card-style-one text-center mt-20 wow fadeInUp"
						data-wow-delay="0.15s"
					>
						<a href="/job-grid-v3" class="wrapper">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_03.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Marketing</div>
							<div class="total-job">10k+ Jobs</div>
						</a>
					</div>
				
					<div
						use:useAnimation
						class="card-style-one text-center mt-20 wow fadeInUp"
						data-wow-delay="0.16s"
					>
						<a href="/job-grid-v3" class="wrapper">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_04.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Telemarketing</div>
							<div class="total-job">6k+ Jobs</div>
						</a>
					</div>
				
					<div
						use:useAnimation
						class="card-style-one text-center mt-20 wow fadeInUp"
						data-wow-delay="0.17s"
					>
						<a href="/job-grid-v3" class="wrapper">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_05.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Editing</div>
							<div class="total-job">7k+ Jobs</div>
						</a>
					</div>
					
					<div
						use:useAnimation
						class="card-style-one text-center mt-20 wow fadeInUp"
						data-wow-delay="0.18s"
					>
						<a href="/job-grid-v3" class="wrapper">
							<div class="icon d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_06.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title fw-500">Accounting</div>
							<div class="total-job">17k+ Jobs</div>
						</a>
					</div>
					
				</div>
				
				<div class="text-center mt-40 d-lg-none">
					<a href="/job-grid-v2" class="btn-six">Explore all fields</a>
				</div>
			</div>
		</Category1> -->




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


		<!-- <FancyBanner4 /> -->
		<JobListing />
		<!-- <Feedack /> -->
		<!-- <Features1 addSectionClasses={'position-relative pt-180 xl-pt-150 lg-pt-100'}> 
			<div slot="row" class="row align-items-center">
				<div class="col-lg-5 order-lg-last">
					<div use:useAnimation class="ps-lg-4 wow fadeInRight">
						<div class="title-one">
							<div class="sub-title">Looking for an expert?</div>
							<h2 class="text-dark">Find top talents from jobi.</h2>
						</div>
						<div class="accordion accordion-style-one mt-25" id="accordionOne">
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
											page design to reflect your brand. It only takes 5 minutes.
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
										<p>Practice what you learned on realistic lorem quis test questions testing.</p>
									</div>
								</div>
							</div>
						</div>
						
						<a href="/candidates-v2" class="btn-seven border6 mt-70 lg-mt-40">Find Talents</a>
					</div>
				</div>
				<div class="col-lg-7 col-md-8 m-auto order-lg-first">
					<div class="img-data position-relative me-xl-5 md-mt-20">
						<div class="row align-items-center">
							<div class="col-6">
								<img
									use:useAnimation
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_11.jpg"
									alt=""
									class="lazy-img mt-35 md-mt-20 wow fadeInLeft"
								/>
							</div>
							<div class="col-6">
								<img
									use:useAnimation
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_12.jpg"
									alt=""
									class="lazy-img mt-35 md-mt-20 wow fadeInDown"
								/>
								<img
									use:useAnimation
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_13.jpg"
									alt=""
									class="lazy-img mt-35 md-mt-20 wow fadeInUp"
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
					</div>
				</div>
			</div>
		</Features1>-->
		
		<!-- <JobPortel addonClasses={'top-border pt-60 lg-pt-40 pb-65 lg-pb-40'}>
			<div slot="btn-group" class="col-lg-5">
				<ul class="btn-group style-none d-flex justify-content-center justify-content-lg-end">
					<li class="me-2">
						<a href="/job-list-v1" class="btn-seven border6">Looking for job?</a>
					</li>
					<li class="ms-2"><a href="/signup" class="btn-five border6">Post a job</a></li>
				</ul>
			</div>
		</JobPortel> -->
		<Faq />
		<Footer1 />
		<BackToTop />
		<Model1 />
	{/if}
</div>
