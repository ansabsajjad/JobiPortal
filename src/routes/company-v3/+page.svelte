<script>
	import { niceSelect } from '$lib/js/custom.js';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import CompanyProfiles from '../../lib/Components/Section/CompanyProfiles.svelte';
	import { onMount } from 'svelte';
	import CompanyModel from '../../lib/Components/Model/CompanyModel.svelte';

	let isGrid = true;

	// Props
	let isPreloading = true;
	function toggleStyle(style) {
		isGrid = style === 'grid';
	}
	onMount(() => {
		niceSelect();
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
						<h2 class="text-white">Company</h2>
					</div>
					<p class="text-lg text-white mt-30 lg-mt-20">
						Find your desire company and get your dream job
					</p>
				</div>
			</div>
		</InnerBanner1>
		<CompanyProfiles addSectionClasses={'bg-color pt-90 lg-pt-70 pb-160 xl-pb-150 lg-pb-80'}>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-12">
						<div class="wrapper">
							<div
								class="upper-filter d-flex justify-content-between align-items-start align-items-md-center mb-25"
							>
								<div class="d-md-flex align-items-center">
									<button
										type="button"
										class="filter-btn fw-500 tran3s me-3"
										data-bs-toggle="modal"
										data-bs-target="#filterPopUp"
									>
										<i class="bi bi-funnel"></i>
										Filter
									</button>
									<div class="total-job-found md-mt-10">
										All <span class="text-dark fw-500">320</span> company found
									</div>
								</div>
								<div class="d-flex align-items-center">
									<div class="short-filter d-flex align-items-center">
										<div class="text-dark fw-500 me-2">Short:</div>
										<select class="nice-select">
											<option value="0">Latest</option>
											<option value="1">Category</option>
											<option value="2">Job Type</option>
										</select>
									</div>
									<button
										on:click={() => toggleStyle('list')}
										class={`style-changer-btn text-center rounded-circle tran3s ms-2 list-btn ${isGrid ? 'active' : ''}`}
										title="Active List"><i class="bi bi-list"></i></button
									>
									<button
										on:click={() => toggleStyle('grid')}
										class={`style-changer-btn text-center rounded-circle tran3s ms-2 grid-btn ${!isGrid ? 'active' : ''}`}
										title="Active Grid"><i class="bi bi-grid"></i></button
									>
								</div>
							</div>
							<!-- /.upper-filter -->

							<div class={`accordion-box grid-style ${isGrid ? 'show' : ''}`}>
								<div class="row">
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 favourite mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_29.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Payoneer</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">3 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_30.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Medium</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">5 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_31.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Linkedin</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 favourite mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_38.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Radiant</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 favourite mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_39.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Panoroma</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_40.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Colorrib</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 favourite mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_41.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Alpha</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_32.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">MacDonald’s</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_42.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Bootstrap</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_31.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Linkedin</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 favourite mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_38.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Radiant</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
									<div class="col-xl-3 col-lg-4 col-sm-6 d-flex">
										<div class="company-grid-layout border-0 mb-30">
											<a
												href="/company-details.html"
												class="company-logo me-auto ms-auto rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_39.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<h5 class="text-center">
												<a href="/company-details.html" class="company-name tran3s">Panoroma</a>
											</h5>
											<p class="text-center">New York, New York; Seattle, Washington...</p>
											<div class="bottom-line d-flex">
												<a href="/company-details.html">9 Vacancy</a>
												<a href="/company-details.html"><i class="bi bi-bookmark-dash"></i> Save</a>
											</div>
										</div>
										<!-- /.company-grid-layout -->
									</div>
								</div>
							</div>
							<!-- /.accordion-box -->

							<div class={`accordion-box list-style ${isGrid ? '' : 'show'}`}>
								<div class="company-list-layout border-0 favourite mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_30.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Medium</a>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">14+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">3 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_31.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Linkedin</a>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">7 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 favourite mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_39.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s"
															>Panorama Inc</a
														>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">7+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">13 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 favourite mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_29.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Payoneer</a>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">3 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_40.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Colorrib</a>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">20+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">7 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 favourite mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_32.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s"
															>MacDonald’s</a
														>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">40+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">2 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_42.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Bootstrap</a
														>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">8 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
								<div class="company-list-layout border-0 mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-6 col-lg-5">
											<div class="d-flex align-items-xl-center">
												<a href="/company-details.html" class="company-logo rounded-circle"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_41.png"
														alt=""
														class="lazy-img rounded-circle"
													/></a
												>
												<div class="company-data">
													<h5 class="m0">
														<a href="/company-details.html" class="company-name tran3s">Alpha</a>
													</h5>
													<p>New York, Seattle, Washington DC</p>
												</div>
											</div>
										</div>
										<div class="col-xl-3 col-lg-4 col-md-8">
											<div class="d-flex align-items-center md-mt-20">
												<div class="d-flex align-items-center">
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_42.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_43.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/assets/img_44.png"
														alt=""
														class="lazy-img rounded-circle team-img"
													/>
													<div class="team-text">
														<span class="text-md fw-500 text-dark d-block">8+ </span> Team Size
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end md-mt-20"
											>
												<a
													href="/company-details.html"
													class="open-job-btn text-center fw-500 tran3s me-2">10 open job</a
												>
												<a
													href="/company-details.html"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.company-list-layout -->
							</div>
							<!-- /.accordion-box -->

							<div class="pt-50 lg-pt-20 d-sm-flex align-items-center justify-content-between">
								<p class="m0 order-sm-last text-center text-sm-start xs-pb-20">
									Showing <span class="text-dark fw-500">1 to 20</span> of
									<span class="text-dark fw-500">320</span>
								</p>
								<ul
									class="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none"
								>
									<li class="active"><a href="#!!">1</a></li>
									<li><a href="#!!">2</a></li>
									<li><a href="#!!">3</a></li>
									<li><a href="#!!">4</a></li>
									<li>....</li>
									<li class="ms-2">
										<a href="#!!" class="d-flex align-items-center"
											>Last <img src="/assets/images/icon/icon_50.svg" alt="" class="ms-2" /></a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /.col- -->
				</div>
			</div>
		</CompanyProfiles>
		<JobPortel addonClasses={'bottom-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<CompanyModel />
		<Model1 />
	{/if}
</div>
