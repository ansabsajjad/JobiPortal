<script>
	import { niceSelect } from '$lib/js/custom.js';
	import CandidatesProfile from './../../lib/Components/Candidates/CandidatesProfile.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import JobPortel from '../../lib/Components/JobSection/JobPortel.svelte';
	import { onMount } from 'svelte';

	// Props
	let isGrid = true;
	function toggleStyle(style) {
		isGrid = style === 'grid';
	}
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
		<InnerBanner1 />
		<CandidatesProfile>
			<div slot="changer-btn">
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
			<div slot="accordion-box">
				<div class={`accordion-box grid-style ${isGrid ? 'show' : ''}`}>
					<div class="row">
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar online position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_01.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Julia Ark</a>
								</h4>
								<div class="candidate-post">Graphic Designer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>UI</li>
									<li>Digital</li>
									<li class="more">2+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_02.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juan Marko</a>
								</h4>
								<div class="candidate-post">Javascript Developer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Java</li>
									<li>Developer</li>
									<li>code</li>
									<li class="more">1+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$3k-$4k/mo</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>London, UK</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_03.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Rashed ka</a>
								</h4>
								<div class="candidate-post">UI/UX Designer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>UI</li>
									<li>Brand & Product</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$300-$400/wk</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Dubai, UAE</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_04.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Julia Ark</a>
								</h4>
								<div class="candidate-post">Graphic Designer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>UI</li>
									<li>Digital</li>
									<li class="more">2+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>New York, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_02.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juan Marko</a>
								</h4>
								<div class="candidate-post">Marketing Expert</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Account</li>
									<li>Finance</li>
									<li>Marketing</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$2k-3k/mo</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Manchester, UK</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar online position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_05.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juliana Shofie</a>
								</h4>
								<div class="candidate-post">Data Entry</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Data</li>
									<li>Entry</li>
									<li>Microsoft Excel</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$35-$45/hr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Milan, Italy</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_06.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Shani Milar</a>
								</h4>
								<div class="candidate-post">Telemarketing & Sales</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Telemarketing</li>
									<li>Finance</li>
									<li>Sales</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar online position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_02.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juan Marko</a>
								</h4>
								<div class="candidate-post">Marketing Expert</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Java</li>
									<li>Developer</li>
									<li>code</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Bangalore, IN</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_07.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juliana Shofie</a>
								</h4>
								<div class="candidate-post">Data Entry</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Data</li>
									<li>Entry</li>
									<li>Microsoft Excel</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$35-$45/hr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Milan, Italy</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar online position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_08.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Julia Ark</a>
								</h4>
								<div class="candidate-post">Graphic Designer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>UI</li>
									<li>Digital</li>
									<li class="more">2+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>Washington, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar online position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_09.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Mark Cena</a>
								</h4>
								<div class="candidate-post">Artist</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>Art</li>
									<li>Digital</li>
									<li class="more">2+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>London, UK</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
						<div class="col-xxl-4 col-sm-6 d-flex">
							<div class="candidate-profile-card favourite text-center grid-layout mb-25">
								<a href="/candidate-profile-v1" class="save-btn tran3s"
									><i class="bi bi-heart"></i></a
								>
								<div class="cadidate-avatar position-relative d-block m-auto">
									<a href="/candidate-profile-v1" class="rounded-circle"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/candidates/img_03.jpg"
											alt=""
											class="lazy-img rounded-circle"
										/></a
									>
								</div>
								<h4 class="candidate-name mt-15 mb-0">
									<a href="/candidate-profile-v1" class="tran3s">Juliana Shofie</a>
								</h4>
								<div class="candidate-post">Graphic Designer</div>
								<ul
									class="cadidate-skills style-none d-flex flex-wrap align-items-center justify-content-center justify-content-md-between pt-30 sm-pt-20 pb-10"
								>
									<li>Design</li>
									<li>UI</li>
									<li>Digital</li>
									<li class="more">2+</li>
								</ul>
								<!-- /.cadidate-skills -->
								<div class="row gx-1">
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-md-6">
										<div class="candidate-info mt-10">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
								</div>
								<div class="row gx-2 pt-25 sm-pt-10">
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="profile-btn tran3s w-100 mt-5"
											>View Profile</a
										>
									</div>
									<div class="col-md-6">
										<a href="/candidate-profile-v1" class="msg-btn tran3s w-100 mt-5">Message</a>
									</div>
								</div>
							</div>
							<!-- /.candidate-profile-card -->
						</div>
					</div>
				</div>
				<div class={`accordion-box list-style ${isGrid ? '' : 'show'}`}>
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_01.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Julia Ark</a>
											</h4>
											<div class="candidate-post">Graphic Designer</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_03.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Shofie Ana</a>
											</h4>
											<div class="candidate-post">Artist</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>New York, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_02.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Riad Mahfuz</a>
											</h4>
											<div class="candidate-post">Telemarketing & Sales</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>Manchester, UK</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_03.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Julia Ark</a>
											</h4>
											<div class="candidate-post">Graphic Designer</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>Milan, Italy</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_04.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Jannat Ka</a>
											</h4>
											<div class="candidate-post">Marketing Expert</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_05.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Mahmud Amin</a>
											</h4>
											<div class="candidate-post">App Designer</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>Bangalore, IN</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_06.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Zubayer Hasan</a>
											</h4>
											<div class="candidate-post">Graphic Designer</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>London, UK</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_07.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Maria Henna</a>
											</h4>
											<div class="candidate-post">Designer</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>Washington, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card favourite list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_08.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Sakil Islam</a>
											</h4>
											<div class="candidate-post">Marketing Expert</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$30k-$50k/yr</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>Dubai, UAE</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
					<div class="candidate-profile-card list-layout mb-25">
						<div class="d-flex">
							<div class="cadidate-avatar online position-relative d-block me-auto ms-auto">
								<a href="/candidate-profile-v2" class="rounded-circle"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/candidates/img_09.jpg"
										alt=""
										class="lazy-img rounded-circle"
									/></a
								>
							</div>
							<div class="right-side">
								<div class="row gx-1 align-items-center">
									<div class="col-xl-3">
										<div class="position-relative">
											<h4 class="candidate-name mb-0">
												<a href="/candidate-profile-v2" class="tran3s">Shofie Elina</a>
											</h4>
											<div class="candidate-post">IT Specialist</div>
											<ul class="cadidate-skills style-none d-flex align-items-center">
												<li>Design</li>
												<li>UI</li>
												<li>Digital</li>
												<li class="more">2+</li>
											</ul>
											<!-- /.cadidate-skills -->
										</div>
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Salary</span>
											<div>$250-$300/week</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4 col-sm-6">
										<div class="candidate-info">
											<span>Location</span>
											<div>California, US</div>
										</div>
										<!-- /.candidate-info -->
									</div>
									<div class="col-xl-3 col-md-4">
										<div class="d-flex justify-content-lg-end">
											<a
												href="/candidate-profile-v2"
												class="save-btn text-center rounded-circle tran3s mt-10"
												><i class="bi bi-heart"></i></a
											>
											<a
												href="/candidate-profile-v2"
												class="profile-btn tran3s ms-md-2 mt-10 sm-mt-20">View Profile</a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.candidate-profile-card -->
				</div>
			</div>
		</CandidatesProfile>
		<JobPortel addonClasses={'top-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
