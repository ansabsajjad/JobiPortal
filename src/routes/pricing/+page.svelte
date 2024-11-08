<script>
	import HowToWork from './../../lib/Components/HowToWork/HowToWork.svelte';
	import { useAnimation } from '$lib/js/animations.js';
	import Features3 from './../../lib/Components/Features/Features3.svelte';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import CandidatesProfile from '../../lib/Components/Candidates/CandidatesProfile.svelte';
	import Features1 from '../../lib/Components/Features/Features1.svelte';
	import Feedack1 from '../../lib/Components/Feedback/Feedack1.svelte';
	import Pricing from '../../lib/Components/Pricing/Pricing.svelte';

	// Props
	let isPreloading = true;
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
						<h2 class="text-white">Pricing</h2>
					</div>
					<p class="text-lg text-white mt-30 lg-mt-20">Choose your membership</p>
				</div>
			</div>
		</InnerBanner1>
		<Pricing />
		<Pricing addSectionClasses={'bg-color pt-100 lg-pt-70 pb-90 lg-pb-60'}>
			<div slot="row" class="row">
				<div class="col-xxl-10 m-auto">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one border-0 mt-25">
								<div class="pack-name">Standard</div>
								<div class="price fw-500">0</div>
								<ul class="style-none">
									<li>15 job posting</li>
									<li>7 featured job</li>
									<li>Job post live for 30 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one popular-two mt-25">
								<div class="popular-badge">popular</div>
								<div class="pack-name">Gold</div>
								<div class="price fw-500"><sub>$</sub> 27.<sup>99</sup></div>
								<ul class="style-none">
									<li>30 job posting</li>
									<li>15 featured job</li>
									<li>Job post live for 60 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one border-0 mt-25">
								<div class="pack-name">Diamond</div>
								<div class="price fw-500"><sub>$</sub> 39.<sup>99</sup></div>
								<ul class="style-none">
									<li>60 job posting</li>
									<li>30 featured job</li>
									<li>Job post live for 130 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
					</div>

					<div class="row">
						<div class="col-xl-5 col-lg-8 m-auto">
							<p class="text-center lg-mt-30">
								We've done it carefully and simply. Combined with the ingredients makes for
								beautiful landings.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Pricing>
		<JobPortel addonClasses={'bottom-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
