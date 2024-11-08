<script>
	import { niceSelect } from '$lib/js/custom.js';
	import FilterModel from './../../lib/Components/Model/FilterModel.svelte';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import JobListing3 from '../../lib/Components/JobSection/JobListing3.svelte';
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
		<Header>
			<div slot="right-widget" class="right-widget ms-auto order-lg-3">
				<ul class="d-flex align-items-center style-none">
					<li class="d-none d-md-block">
						<a href="/dashboard/employer-dashboard-submit-job" class="job-post-btn tran3s"
							>Post Job</a
						>
					</li>
					<li>
						<a href="/!#" class="login-btn-one" data-bs-toggle="modal" data-bs-target="#loginModal"
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
			<div slot="title-two" class="col-xl-6 m-auto text-center">
				<div class="title-two">
					<h2 class="text-white">Job Listing</h2>
				</div>
				<p class="text-lg text-white mt-30 lg-mt-20 mb-35 lg-mb-20">
					We delivered blazing fast & striking work solution
				</p>
			</div>
		</InnerBanner1>
		<JobListing3 addSectionClasses={'bg-color pt-90 lg-pt-80 pb-160 xl-pb-150 lg-pb-80'}>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-12">
						<div class="job-post-item-wrapper">
							<div
								class="upper-filter d-flex justify-content-between align-items-start align-items-sm-center mb-30"
							>
								<div class="d-sm-flex align-items-center">
									<button
										type="button"
										class="filter-btn fw-500 tran3s me-3"
										data-bs-toggle="modal"
										data-bs-target="#filterPopUp"
									>
										<i class="bi bi-funnel"></i>
										Filter
									</button>
									<div class="total-job-found xs-mt-10">
										All <span class="text-dark fw-500">7,096</span> jobs found
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
								</div>
							</div>
							<!-- /.upper-filter -->
							<div class="wrapper">
								<div class="row">
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_22.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Developer & expert in java c++</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$30-$50/hour</li>
															<li>Intermediate</li>
															<li>Spain, Barcelona</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_23.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Marketing Specialist in SEO</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$300-$500/week</li>
															<li>Expert</li>
															<li>USA, New York</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500 part-time"
															>Part Time</a
														>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_24.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Email Marketing & App Integrations</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$1k-$1.5k/month</li>
															<li>Beginner</li>
															<li>USA, Alaska</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500 part-time"
															>Part Time</a
														>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_25.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Developer & expert in java c++</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$30-$50/hour</li>
															<li>Intermediate</li>
															<li>Spain, Barcelona</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_26.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Outbound Call Service Webshop</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$30-$50/hour</li>
															<li>Intermediate</li>
															<li>Spain, Barcelona</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500 part-time"
															>Part Time</a
														>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_33.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Outbound Call Service Webshop</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$30-$50/hour</li>
															<li>Intermediate</li>
															<li>Spain, Barcelona</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_34.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Outbound Call Service Webshop</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$30-$50/hour</li>
															<li>Intermediate</li>
															<li>Spain, Barcelona</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_35.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Build Responsive Website From Scratch</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$20-$25/hourr</li>
															<li>Intermediate</li>
															<li>USA, California</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_36.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>Document typing (easy typing)</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$200-$250/week</li>
															<li>Beginner</li>
															<li>Germany, Hamburg</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500 part-time"
															>Part Time</a
														>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
									<div class="col-lg-6 mb-30">
										<div class="job-list-three d-flex h-100 w-100">
											<div class="main-wrapper h-100 w-100">
												<a
													href="job-details-v2"
													class="save-btn text-center rounded-circle tran3s"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<div class="list-header d-flex align-items-center">
													<a href="/job-details-v2" class="logo"
														><img
															src="/assets/images/lazy.svg"
															data-src="/assets/images/logo/media_37.png"
															alt=""
															class="lazy-img m-auto"
														/></a
													>
													<div class="info-wrapper">
														<a href="/job-details-v2" class="title fw-500 tran3s"
															>General Ledger & Marketing Specialist</a
														>
														<ul class="style-none d-flex flex-wrap info-data">
															<li>$60k-$70k/year</li>
															<li>Expert</li>
															<li>UK, London</li>
														</ul>
													</div>
												</div>
												<!-- ./.list-header -->
												<p>
													We would like to design a page on Figma to promote Workroom as All-in-one
													solutions for Marketing, Sales, Support teams...
												</p>
												<div class="d-sm-flex align-items-center justify-content-between mt-auto">
													<div class="d-flex align-items-center">
														<img src="/assets/images/icon/icon_51.svg" alt="" />
														<span class="fw-500 client-status">Verified Client .</span>
														<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
													</div>
													<a href="job-details-v2" class="apply-btn text-center tran3s xs-mt-20"
														>APPLY</a
													>
												</div>
											</div>
										</div>
										<!-- /.job-list-three -->
									</div>
								</div>
							</div>
							<!-- /.accordion-box -->

							<div class="pt-30 lg-pt-20 d-sm-flex align-items-center justify-content-between">
								<p class="m0 order-sm-last text-center text-sm-start xs-pb-20">
									Showing <span class="text-dark fw-500">1 to 20</span> of
									<span class="text-dark fw-500">7,096</span>
								</p>
								<ul
									class="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none"
								>
									<li class="active"><a href="#!">1</a></li>
									<li><a href="#!">2</a></li>
									<li><a href="#!">3</a></li>
									<li><a href="#!">4</a></li>
									<li>....</li>
									<li class="ms-2">
										<a href="#!" class="d-flex align-items-center"
											>Last <img src="/assets/images/icon/icon_50.svg" alt="" class="ms-2" /></a
										>
									</li>
								</ul>
							</div>
						</div>
						<!-- /.job-post-item-wrapper -->
					</div>
					<!-- /.col- -->
				</div>
			</div>
		</JobListing3>
		<JobPortel addonClasses={'bottom-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<FilterModel />
		<BackToTop />
		<Model1 />
	{/if}
</div>
