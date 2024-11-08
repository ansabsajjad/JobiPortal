<script>
	import ExpertSection1 from './../../lib/Components/Section/ExpertSection1.svelte';
	import HeroBanner5 from './../../lib/Components/Banners/HeroBanner5.svelte';
	import Header from '$lib/Header.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Footer1 from '../../lib/Components/Footers/Footer1.svelte';
	import Category5 from '../../lib/Components/Category/Category5.svelte';
	import HowToWork2 from '../../lib/Components/HowToWork/HowToWork2.svelte';
	import JobListing2 from '../../lib/Components/JobSection/JobListing2.svelte';
	import Features3 from '../../lib/Components/Features/Features3.svelte';
	import Feedack4 from '../../lib/Components/Feedback/Feedack4.svelte';
	import PartnerSlider from '../../lib/PartnerSlider.svelte';
	import Blog1 from '../../lib/Components/Blogs/Blog1.svelte';
	import FancyBanner5 from '../../lib/Components/Banners/FancyBanner5.svelte';

	// Props
	let isPreloading = true;
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<Header
			addonClasses={'menu-overlay sticky-menu'}
			isCategoryShow={false}
			navbarClasses={'navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1'}
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
		<HeroBanner5 />
		<Category5 />
		<HowToWork2 addSectionClasses={'position-relative pt-160 xl-pt-130 lg-pt-100'}>
			<div slot="container" class="container">
				<div
					class="title-one d-flex align-items-center justify-content-between text-center mb-45 lg-mb-20"
				>
					<span class="line"></span>
					<h2 class="w-100 main-font">How it’s work?</h2>
					<span class="line"></span>
				</div>

				<div class="position-relative">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
							>
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
									<span>01</span>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10">Create Account</div>
								<p>It’s very easy to open an account and start your journey.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
									<span>02</span>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10">Complete your profile.</div>
								<p>Complete your profile with all the info to get attention of client.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								use:useAnimation
								class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
								data-wow-delay="0.19s"
							>
								<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
									<span>03</span>
								</div>
								<div class="title fw-500 text-lg text-dark mt-25 mb-10">Apply job or hire.</div>
								<p>Apply & get your preferable jobs with all the requirments and get it.</p>
							</div>
							<!-- /.card-style-five -->
						</div>
					</div>
				</div>
			</div>
		</HowToWork2>
		<JobListing2 />
		<Features3 addonClasses={'position-relative pt-200 xl-pt-150 md-pt-80'}>
			<div slot="container" class="container">
				<div class="row align-items-center">
					<div class="col-lg-5 order-lg-last ms-auto">
						<div use:useAnimation class="wow fadeInRight">
							<div class="title-one">
								<h2 class="main-font">Find top talents from jobi.</h2>
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
												It only takes 5 minutes. Set-up is smooth and simple, with fully
												customisable page design to reflect your brand. Set-up is smooth and simple,
												with fully customisable.
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
												It only takes 5 minutes. Set-up is smooth and simple, with fully
												customisable page design to reflect your brand. Set-up is smooth and simple,
												with fully customisable.
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
												It only takes 5 minutes. Set-up is smooth and simple, with fully
												customisable page design to reflect your brand. Set-up is smooth and simple,
												with fully customisable.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- /.accordion-style-one -->
							<a href="/candidates-v2" class="btn-five border6 mt-45">Learn More</a>
						</div>
					</div>
					<div class="col-lg-6 order-lg-first">
						<div
							use:useAnimation
							class="img-box position-relative rounded-circle d-flex align-items-center justify-content-center wow fadeInLeft"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/assets/screen_09.png"
								alt=""
								class="lazy-img"
							/>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/assets/screen_08.png"
								alt=""
								class="lazy-img shapes screen_02"
							/>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_25.svg"
								alt=""
								class="lazy-img shapes shape_01"
							/>
						</div>
						<!-- /.big-circle -->
					</div>
				</div>
			</div>
		</Features3>
		<ExpertSection1 />
		<Feedack4 />
		<PartnerSlider />
		<Blog1 addSectionClasses={'mt-160 xl-mt-130 lg-mt-100'}>
			<div slot="container" class="container">
				<div class="position-relative">
					<div class="row">
						<div class="col-xl-7">
							<div class="title-one mb-30 lg-mb-10">
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
											data-src="/assets/images/blog/blog_img_07.jpg"
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
							<article
								use:useAnimation
								class="blog-meta-two mt-35 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<figure class="post-img m0">
									<a href="/blog-details" class="w-100 d-block"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/blog/blog_img_08.jpg"
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
		<FancyBanner5 />
		<Footer1 />
		<BackToTop />
		<Model1 />
	{/if}
</div>
