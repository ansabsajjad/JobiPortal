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
	import JobListing3 from '../../lib/Components/JobSection/JobListing3.svelte';
	import { onMount } from 'svelte';
	import FilterModel from '../../lib/Components/Model/FilterModel.svelte';

	let isPreloading = true;
	export let isGrid = true;
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
								class="upper-filter d-flex justify-content-between align-items-start align-items-md-center mb-25"
							>
								<div class="d-md-flex justify-content-between align-items-center">
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
										All <span class="text-dark fw-500">7,096</span> jobs found
									</div>
								</div>
								<div class="d-flex justify-content-between align-items-center">
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

							<div class={`accordion-box list-style ${isGrid ? '' : 'show'}`}>
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_22.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Developer & expert in java c++</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$22k-$30k</span> / year . Expert
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">Spain, Bercelona</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Developer,</a>
												<a href="/job-details-v2">Coder,</a>
												<a href="/job-details-v2">Design</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_23.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Animator & Expert in maya 3D
												</a>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500 part-time">Part Time</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$300-$500</span> / week . Expert
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">USA, New York</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Artist,</a>
												<a href="/job-details-v2">Animation,</a>
												<a href="/job-details-v2">Design</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_24.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Marketing Specialist in SEO & SMM</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500 part-time">Part Time</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$1k-$1.5k</span> / month . Beginner
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">USA, Alaska</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Design,</a>
												<a href="/job-details-v2">Artist</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_25.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Developer & expert in java c++</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$250-$300</span> / week . Expert
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">USA, California</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Application,</a>
												<a href="/job-details-v2">Dev</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_26.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Lead & Product Designers.</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$35k-$40k</span> / year . Beginner
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">UK, London</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Design,</a>
												<a href="/job-details-v2">Product</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_33.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Email Marketing & App Integrations</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500 part-time">Part Time</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$10-$15</span> / hour . Intermediate
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">USA, California</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Application,</a>
												<a href="/job-details-v2">Developer,</a>
												<a href="/job-details-v2">Email</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_34.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Outbound Call Service Web shop
												</a>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$3k-$4k</span> / month . Expert
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">UK, London</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Finance,</a>
												<a href="/job-details-v2">Business,</a>
												<a href="/job-details-v2">Account</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_35.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Build Responsive Website From Scratch</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$20-$25</span> / hour . Intermediate
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">USA, California</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Application,</a>
												<a href="/job-details-v2">Web Design,</a>
												<a href="/job-details-v2">Code</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_36.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>Document typing (easy typing)</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500 part-time">Part Time</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$200-$250</span> / week . Beginner
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">Germany, Hamburg</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Article,</a>
												<a href="/job-details-v2">Data Entry,</a>
												<a href="/job-details-v2">Design</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
								<div class="job-list-one style-two position-relative border-style mb-20">
									<div class="row justify-content-between align-items-center">
										<div class="col-xl-3 col-lg-4">
											<div class="job-title d-flex align-items-center">
												<a href="/job-details-v2" class="logo md-mb-20"
													><img
														src="/assets/images/lazy.svg"
														data-src="/assets/images/logo/media_37.png"
														alt=""
														class="lazy-img m-auto"
													/></a
												>
												<a href="/job-details-v2" class="title fw-500 tran3s ps-3 ps-lg-0"
													>General Ledger & Marketing Specialist</a
												>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											<div class="job-salary">
												<span class="fw-500 text-dark">$60k-$70k</span> / year . Expert
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
											<div class="job-location xs-mt-10">
												<a href="/job-details-v2">UK, London</a>
											</div>
											<div class="job-category">
												<a href="/job-details-v2">Finance,</a>
												<a href="/job-details-v2">Business,</a>
												<a href="/job-details-v2">Account</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-4">
											<div
												class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20"
											>
												<a
													href="/job-details-v2"
													class="save-btn text-center rounded-circle tran3s me-3"
													title="Save Job"><i class="bi bi-bookmark-dash"></i></a
												>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
									</div>
								</div>
								<!-- /.job-list-one -->
							</div>

							<div class={`accordion-box grid-style ${isGrid ? 'show' : ''}`}>
								<div class="row">
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_22.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Lead designer & expert in maya 3D</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$300-$450</span> / Week
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location">
													<a href="/job-details-v2">USA, California</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_23.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Developer & expert in c++ & java.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$10-$15</span> / Hour
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">USA, Alaska</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_24.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Marketing specialist in SEO & Affiliate.
												</a>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$40k</span> / Yearly
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">AUS, Sydney</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_25.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Lead & Product & Web Designer.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$2k-3k</span> / Month
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">UAE, Dubai</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_26.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Hotel Manager with PHD in Hms.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$40k-$60k</span> / Year
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">UK, London</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_33.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Interactive Designer.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$30-$35</span> / Hour
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">Milan, Italy</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_34.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Accountant Bookkeeper Financial Reporting</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$300-$450</span> / Week
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">US, Alaska</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_35.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Personal assistants/ ARC readers needed</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$2000</span> / Month
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">Rome, Italy</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_36.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Hotel Manager with PHD in Hms.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$40k-$60k</span> / Year
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">US, New York</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_37.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Amazon Product Research</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$15-$20</span> / Hour
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location">
													<a href="/job-details-v2">Germany, Hamburg</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_23.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Developer & expert in c++ & java.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$10-$15</span> / Hour
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">USA, Alaska</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two position-relative">
											<a href="/job-details-v2" class="logo"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_24.png"
													alt=""
													class="lazy-img m-auto"
												/></a
											>
											<a
												href="/job-details-v2"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
											<div>
												<a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a
												>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Marketing specialist in SEO & Affiliate.
												</a>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$40k</span> / Yearly
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location"><a href="/job-details-v2">AUS, Sydney</a></div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
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
		<JobPortel addonClasses={'bottom-border top-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<FilterModel />
		<Model1 />
	{/if}
</div>
