<script>
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import CompanyProfiles from '../../lib/Components/Section/CompanyProfiles.svelte';
	import CompanyDetails from '../../lib/Components/Section/CompanyDetails.svelte';
	import CompanyPosition from '../../lib/Components/Section/CompanyPosition.svelte';

	let isGrid = false;

	// Props
	let isPreloading = true;

	function toggleStyle(style) {
		isGrid = style === 'grid';
	}
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
						<h2 class="text-white">Company Details</h2>
					</div>
					<p class="text-lg text-white mt-30 lg-mt-20">Find company details here</p>
				</div>
			</div>
		</InnerBanner1>
		<CompanyDetails />
		<CompanyPosition />
		<JobPortel addonClasses={'bottom-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
