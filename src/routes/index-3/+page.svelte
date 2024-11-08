<script>
	import { niceSelect } from '$lib/js/custom.js';
	import Footer from './../../lib/Components/Footers/Footer.svelte';
	import JobPortel from '$lib/Components/JobSection/JobPortel.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Features3 from '../../lib/Components/Features/Features3.svelte';
	import { onMount } from 'svelte';
	import HeroBanner3 from '../../lib/Components/Banners/HeroBanner3.svelte';
	import Category3 from '../../lib/Components/Category/Category3.svelte';
	import Category1 from '../../lib/Components/Category/Category1.svelte';
	import FancyBanner2 from '../../lib/Components/Banners/FancyBanner2.svelte';
	import FancyBanner3 from '../../lib/Components/Banners/FancyBanner3.svelte';
	import Feedack3 from '../../lib/Components/Feedback/Feedack3.svelte';
	import Features4 from '../../lib/Components/Features/Features4.svelte';
	import Category4 from '../../lib/Components/Category/Category4.svelte';

	// Props
	let isPreloading = true;
	let isSticky = false;
	onMount(() => {
		niceSelect();
		const handleScroll = () => (isSticky = window.scrollY >= 100);
		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<header class={`theme-main-menu sticky-menu ${isSticky ? 'fixed' : ''}`}>
			<div class="inner-content position-relative">
				<div class="top-header">
					<div class="d-flex align-items-center justify-content-between">
						<div class="logo order-lg-0">
							<a href="/index" class="d-flex align-items-center">
								<img src="/assets/images/logo/logo_04.png" alt="" />
							</a>
						</div>
						<!-- logo -->
						<form
							action="#"
							class="header-search position-relative d-none d-sm-block ms-lg-5 ms-md-3 order-lg-1"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_21.svg"
								alt=""
								class="lazy-img icon"
							/>
							<input type="text" placeholder="Search here.." />
							<select class="nice-select lg">
								<option value="1">Talents</option>
								<option value="2">Jobs</option>
							</select>
						</form>
						<div class="right-widget ms-auto ms-xl-5 order-lg-3">
							<ul class="d-flex align-items-center style-none">
								<li>
									<a
										href="/!#"
										class="fw-500 login-btn-two"
										data-bs-toggle="modal"
										data-bs-target="#loginModal">Login</a
									>
								</li>
								<li class="d-none d-lg-block ms-4">
									<a href="/signup" class="btn-five">Register</a>
								</li>
							</ul>
						</div>
						<!--/.right-widget-->
						<nav class="navbar navbar-expand-lg p0 ms-3 ms-lg-auto order-lg-2">
							<button
								class="navbar-toggler d-block d-lg-none"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav">
									<li class="d-block d-lg-none">
										<div class="logo">
											<a href="/index" class="d-block"
												><img src="/assets/images/logo/logo_04.png" alt="" width="100" /></a
											>
										</div>
									</li>
									<li class="d-sm-none xs-mb-20">
										<form action="#" class="header-search position-relative">
											<img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/icon/icon_21.svg"
												alt=""
												class="lazy-img icon"
											/>
											<input type="text" placeholder="Search here.." />
											<select class="nice-select lg">
												<option value="1">Talents</option>
												<option value="2">Jobs</option>
											</select>
										</form>
									</li>
									<li class="nav-item dropdown d-lg-none">
										<a
											class="nav-link dropdown-toggle"
											href="/!#"
											role="button"
											data-bs-toggle="dropdown"
											data-bs-auto-close="outside"
											aria-expanded="false">Browse Categories</a
										>
										<ul class="dropdown-menu">
											<li><a href="/job-grid-v3" class="dropdown-item">Design & Creative</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">It & Development</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Trending</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Web & Mobile Dev</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Writing</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Sales & Marketing</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Music & Audio</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Video & Animation</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">AI Services</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Photography</a></li>
											<li><a href="/job-grid-v3" class="dropdown-item">Programming & Tech</a></li>
										</ul>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link" href="/job-list-v2" role="button">Find Job</a>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link" href="/candidates-v2" role="button">Find Talents</a>
									</li>
									<li class="nav-item dropdown">
										<a
											class="nav-link dropdown-toggle"
											href="/!#"
											role="button"
											data-bs-toggle="dropdown"
											data-bs-auto-close="outside"
											aria-expanded="false">Pages</a
										>
										<ul class="dropdown-menu">
											<li><a href="/about-us" class="dropdown-item"><span>About Us</span></a></li>
											<li><a href="/pricing" class="dropdown-item"><span>Pricing</span></a></li>
											<li><a href="/faq" class="dropdown-item"><span>Faq's</span></a></li>
											<li><a href="/signup" class="dropdown-item"><span>Register</span></a></li>
											<li><a href="/404" class="dropdown-item"><span>404 Error</span></a></li>
										</ul>
									</li>
									<li class="d-lg-none mt-5">
										<a href="/signup" class="btn-five w-100">Register</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<!--/.top-header-->
			</div>
			<!-- /.inner-content -->
		</header>
		<!-- /.theme-main-menu -->
		<nav class="category-menu d-none d-lg-block">
			<ul class="style-none nav-item d-flex align-items-center justify-content-between">
				<li><a href="/job-grid-v3">Design & Creative</a></li>
				<li><a href="/job-grid-v3">It & Development</a></li>
				<li><a href="/job-grid-v3">Trending</a></li>
				<li><a href="/job-grid-v3">Web & Mobile Dev</a></li>
				<li><a href="/job-grid-v3">Writing</a></li>
				<li><a href="/job-grid-v3">Sales & Marketing</a></li>
				<li><a href="/job-grid-v3">Music & Audio</a></li>
				<li><a href="/job-grid-v3">Video & Animation</a></li>
				<li class="dropdown">
					<a
						href="/!#"
						class="dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">More</a
					>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a class="dropdown-item" href="/job-grid-v3">AI Services</a></li>
						<li><a class="dropdown-item" href="/job-grid-v3">Photography</a></li>
						<li><a class="dropdown-item" href="/job-grid-v3">Programming & Tech</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<HeroBanner3 />
		<Category3 />
		<Category1 addonClasses={'position-relative'}>
			<div slot="container" class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-8">
						<div class="title-three">
							<h2 class="fw-600 color-blue">Explore the marketplace.</h2>
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
					<!-- /.card-style-one -->
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
					<!-- /.card-style-one -->
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
					<!-- /.card-style-one -->
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
					<!-- /.card-style-one -->
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
					<!-- /.card-style-one -->
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
					<!-- /.card-style-one -->
				</div>
				<!-- /.card-wrapper -->
				<div class="text-center mt-40 d-lg-none">
					<a href="/job-grid-v2" class="btn-six">Explore all fields</a>
				</div>
			</div>
		</Category1>
		<Features3 addonClasses={'position-relative pt-225 xl-pt-200 lg-pt-150 md-pt-100'}>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-lg-5 order-lg-last ms-auto">
						<div use:useAnimation class="wow fadeInRight">
							<div class="title-two">
								<div class="sub-title">Why choose us?</div>
								<h2 class="fw-600 color-blue">World of talent at your fingertips</h2>
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
												It only takes 5 minutes. Set-up is smooth and simple, with fully
												customisable page design to reflect your brand.
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
												customisable page design to reflect your brand.
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
												customisable page design to reflect your brand.
											</p>
										</div>
									</div>
								</div>
							</div>
							<!-- /.accordion-style-one -->
							<a href="candidates-v4.html" class="btn-five mt-45 lg-mt-20">Learn More</a>
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
		<FancyBanner2 />
		<FancyBanner3 />
		<Feedack3 />
		<Features4 />
		<Category4 />
		<div class="footer-with-bg">
			<JobPortel addonClasses={'pt-70 lg-pt-40 pb-65 lg-pb-40'}>
				<div slot="btn-group" class="col-lg-5">
					<ul class="btn-group style-none d-flex justify-content-center justify-content-lg-end">
						<li class="me-2">
							<a href="/job-list-v2" class="btn-seven border6">Looking for job?</a>
						</li>
						<li class="ms-2"><a href="/signup" class="btn-five border6">Post a job</a></li>
					</ul>
				</div>
			</JobPortel>
			<Footer>
				<div slot="bottom-footer" class="bottom-footer bg-white">
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
								!
							</div>
							<div class="col-lg-4 order-lg-1 mb-15">
								<ul
									class="d-flex style-none bottom-nav justify-content-center justify-content-lg-start"
								>
									<li><a href="contact.html">Privacy & Terms.</a></li>
									<li><a href="contact.html"> Contact Us</a></li>
								</ul>
							</div>
							<div class="col-lg-4 order-lg-2">
								<p class="text-center mb-15">Copyright @2023 jobi inc.</p>
							</div>
						</div>
					</div>
				</div>
			</Footer>
		</div>
		<BackToTop />
		<Model1 />
	{/if}
</div>
