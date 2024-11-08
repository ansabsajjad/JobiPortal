<script>
	import { niceSelect } from '$lib/js/custom.js';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import JobPortel from '$lib/Components/JobSection/JobPortel.svelte';
	import Features1 from '$lib/Components/Features/Features1.svelte';
	import HeroBanner from '$lib/Components/Banners/HeroBanner.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Category1 from '$lib/Components/Category/Category1.svelte';
	import HowToWork from '$lib/Components/HowToWork/HowToWork.svelte';
	import ExpertSection from '$lib/Components/Section/ExpertSection.svelte';
	import Feedack1 from '$lib/Components/Feedback/Feedack1.svelte';
	import Features2 from '$lib/Components/Features/Features2.svelte';
	import Blog1 from '$lib/Components/Blogs/Blog1.svelte';
	import FancyBanner1 from '$lib/Components/Banners/FancyBanner1.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
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
		<HeroBanner />
		<Category1 />
		<Features1 />
		<HowToWork />
		<ExpertSection />
		<Feedack1 />
		<Features2 />
		<Blog1 />
		<FancyBanner1 />
		<JobPortel />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
