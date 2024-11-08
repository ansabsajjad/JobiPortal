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

	// Props
	let isPreloading = true;
	export let isGrid = false;
	function toggleStyle(style) {
		isGrid = style === 'grid';
	}
	let minValue = 0;
	let maxValue = 300;

	function updateMinValue(event) {
		if (parseInt(event.target.value) > maxValue) {
			minValue = maxValue;
		} else {
			minValue = parseInt(event.target.value);
		}
	}

	function updateMaxValue(event) {
		if (parseInt(event.target.value) < minValue) {
			maxValue = minValue;
		} else {
			maxValue = parseInt(event.target.value);
		}
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
		<JobListing3>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-12">
						<div class="filter-area-tab">
							<div class="light-bg border-20 ps-4 pe-4">
								<a
									class="filter-header border-20 d-block collapsed"
									data-bs-toggle="collapse"
									href="#collapseFilterHeader"
									role="button"
									aria-expanded="false"
									><span class="main-title fw-500 text-dark">Filter By</span></a
								>
								<div class="collapse border-top" id="collapseFilterHeader">
									<div class="pt-25 pb-30">
										<div class="row">
											<div class="col-lg-3 col-sm-6">
												<div class="filter-block pb-50 lg-pb-20">
													<div class="filter-title fw-500 text-dark">Keyword or Title</div>
													<form action="#" class="input-box position-relative">
														<input type="text" placeholder="Search by Keywords" />
														<button><i class="bi bi-search"></i></button>
													</form>
												</div>
												<!-- /.filter-block -->
											</div>
											<div class="col-lg-3 col-sm-6">
												<div class="filter-block pb-50 lg-pb-20">
													<div class="filter-title fw-500 text-dark">Category</div>
													<select class="nice-select bg-white">
														<option value="0">Web Design</option>
														<option value="1">Design & Creative </option>
														<option value="2">It & Development</option>
														<option value="3">Web & Mobile Dev</option>
														<option value="4">Writing</option>
														<option value="5">Sales & Marketing</option>
													</select>
												</div>
												<!-- /.filter-block -->
											</div>
											<div class="col-lg-3 col-sm-6">
												<div class="filter-block pb-50 lg-pb-20">
													<div class="filter-title fw-500 text-dark">Location</div>
													<select class="nice-select bg-white">
														<option value="0">Washington DC</option>
														<option value="1">California, CA</option>
														<option value="2">New York</option>
														<option value="3">Miami</option>
													</select>
												</div>
												<!-- /.filter-block -->
											</div>
											<div class="col-lg-3 col-sm-6">
												<div class="filter-block pb-50 lg-pb-20">
													<div class="filter-title fw-500 text-dark">English Fluency</div>
													<select class="nice-select bg-white">
														<option value="0">Basic</option>
														<option value="1">Conversational</option>
														<option value="2" selected>Fluent</option>
														<option value="3">Native/Bilingual</option>
													</select>
												</div>
												<!-- /.filter-block -->
											</div>
										</div>

										<div class="row">
											<div class="col-lg-4 col-sm-6">
												<div class="filter-block d-xl-flex pb-25">
													<div class="filter-title fw-500 text-dark mt-1">Job Type :</div>
													<div class="main-body ps-xl-4 flex-fill">
														<ul class="style-none filter-input">
															<li>
																<input type="checkbox" name="JobType" value="01" />
																<label for="">Fulltime</label>
															</li>
															<li>
																<input type="checkbox" name="JobType" value="02" />
																<label for="">Hourly-Contract </label>
															</li>
															<li>
																<input type="checkbox" name="JobType" value="03" />
																<label for="">Part-time (20hr/week)</label>
															</li>
															<li>
																<input type="checkbox" name="JobType" value="04" />
																<label for="">Fixed-Price</label>
															</li>
														</ul>
													</div>
												</div>
												<!-- /.filter-block -->
											</div>
											<div class="col-lg-4 col-sm-6">
												<div class="filter-block d-xl-flex pb-25">
													<div class="filter-title fw-500 text-dark mt-1">Experience Level :</div>
													<div class="main-body ps-xl-4 flex-fill">
														<ul class="style-none filter-input">
															<li>
																<input type="checkbox" name="Experience" value="01" />
																<label for="">Beginner (1-3 yrs) </label>
															</li>
															<li>
																<input type="checkbox" name="Experience" value="02" />
																<label for="">Intermediate (1-5 yrs) </label>
															</li>
															<li>
																<input type="checkbox" name="Experience" value="03" />
																<label for="">Expert (1-10 yrs)</label>
															</li>
															<li>
																<input type="checkbox" name="Experience" value="04" />
																<label for="">Internship</label>
															</li>
														</ul>
													</div>
												</div>
												<!-- /.filter-block -->
											</div>
											<div class="col-lg-4">
												<div class="filter-block d-xl-flex pb-25">
													<div class="filter-title fw-500 text-dark mt-1">Salary Range :</div>
													<div class="main-body ps-xl-4 flex-fill">
														<div class="salary-slider">
															<div class="price-input d-flex align-items-center pt-5">
																<div class="field d-flex align-items-center">
																	<input
																		type="number"
																		class="input-min"
																		bind:value={minValue}
																		readonly
																	/>
																</div>
																<div class="pe-1 ps-1">-</div>
																<div class="field d-flex align-items-center">
																	<input
																		type="number"
																		class="input-max"
																		bind:value={maxValue}
																		readonly
																	/>
																</div>
																<div class="currency ps-1">USD</div>
															</div>
															<div class="slider">
																<div
																	class="progress"
																	style="left: {(minValue / 1000) * 100}%; right: {100 -
																		(maxValue / 1000) * 100}%"
																></div>
															</div>

															<div class="range-input mb-10">
																<input
																	type="range"
																	class="range-min"
																	min="0"
																	max="950"
																	step="10"
																	bind:value={minValue}
																	on:input={updateMinValue}
																/>
																<input
																	type="range"
																	class="range-max"
																	min="0"
																	max="1000"
																	step="10"
																	bind:value={maxValue}
																	on:input={updateMaxValue}
																/>
															</div>
														</div>
													</div>
												</div>
												<!-- /.filter-block -->
											</div>
										</div>

										<div class="row">
											<div class="col-xl-2 m-auto">
												<a
													href="#!"
													class="btn-ten fw-500 text-white w-100 text-center tran3s mt-30 md-mt-10"
													>Apply Filter</a
												>
											</div>
										</div>
									</div>
								</div>
								<!-- /.filter header -->
							</div>
						</div>
						<!-- /.filter-area-tab -->
					</div>

					<div class="col-12">
						<div class="job-post-item-wrapper">
							<div
								class="upper-filter d-flex justify-content-between align-items-center mb-25 mt-70 lg-mt-40"
							>
								<div class="total-job-found">
									All <span class="text-dark">7,096</span> jobs found
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
										<div class="job-list-two style-two position-relative">
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
											<div>
												<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											</div>
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
										<div class="job-list-two style-two position-relative">
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
												<div class="job-location">
													<a href="/job-details-v2">USA, Alaska</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
												<div class="job-location">
													<a href="/job-details-v2">AUS, Sydney</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
											<div>
												<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											</div>
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
										<div class="job-list-two style-two position-relative">
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
											<div>
												<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											</div>
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
										<div class="job-list-two style-two position-relative">
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
												<div class="job-location">
													<a href="/job-details-v2">Milan, Italy</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
										<div class="job-list-two style-two position-relative">
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
											<div>
												<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Personal assistants/ ARC readers needed</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$2000</span> / Month
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location">
													<a href="/job-details-v2">Rome, Italy</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
											<div>
												<a href="/job-details-v2" class="job-duration fw-500">Fulltime</a>
											</div>
											<div>
												<a href="/job-details-v2" class="title fw-500 tran3s"
													>Hotel Manager with PHD in Hms.</a
												>
											</div>
											<div class="job-salary">
												<span class="fw-500 text-dark">$40k-$60k</span> / Year
											</div>
											<div class="d-flex align-items-center justify-content-between mt-auto">
												<div class="job-location">
													<a href="/job-details-v2">US, New York</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
										<div class="job-list-two style-two position-relative">
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
												<div class="job-location">
													<a href="/job-details-v2">USA, Alaska</a>
												</div>
												<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
											</div>
										</div>
										<!-- /.job-list-two -->
									</div>
									<div class="col-lg-4 mb-30">
										<div class="job-list-two style-two position-relative">
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
												<div class="job-location">
													<a href="/job-details-v2">AUS, Sydney</a>
												</div>
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
		<Model1 />
	{/if}
</div>
