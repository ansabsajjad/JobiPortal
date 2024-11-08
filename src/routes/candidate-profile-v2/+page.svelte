<script>
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import CandidatesProfile from '../../lib/Components/Candidates/CandidatesProfile.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import SlickSlider from '../../lib/Components/Slider/SlickSlider.svelte';
	import '@fancyapps/ui/dist/fancybox/fancybox.css';
	import { Fancybox } from '@fancyapps/ui?client';

	let settings;
	// Props
	let isPreloading = true;

	onMount(async () => {
		if (browser) {
			const { default: Jq } = await import('jquery');
			window.$ = Jq;
			settings = {
				dots: true,
				arrows: false,
				lazyLoad: 'ondemand',
				centerPadding: '0px',
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 450,
						settings: {
							slidesToShow: 1
						}
					}
				]
			};
			Fancybox.bind('[data-fancybox]', {
				arrows: true,
				buttons: [
					'zoom',
					//"share",
					'slideShow',
					//"fullScreen",
					//"download",
					'thumbs',
					'close'
				],
				animationEffect: 'zoom-in-out',
				transitionEffect: 'zoom-in-out'
			});
		}
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
			<div slot="row" class="container">
				<div class="candidate-profile-card list-layout">
					<div class="d-flex align-items-start align-items-xl-center">
						<div class="cadidate-avatar position-relative d-block me-auto ms-auto">
							<a href="#!" class="rounded-circle"
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
								<div class="col-xl-2 order-xl-0">
									<div class="position-relative">
										<h4 class="candidate-name text-white mb-0">Rashed Kabir</h4>
										<div class="candidate-post">UI Designer</div>
									</div>
								</div>
								<div class="col-xl-3 order-xl-3">
									<ul class="cadidate-skills style-none d-flex flex-wrap align-items-center">
										<li>Design</li>
										<li>UI</li>
										<li>Digital</li>
										<li class="more">2+</li>
									</ul>
									<!-- /.cadidate-skills -->
								</div>
								<div class="col-xl-2 col-md-4 order-xl-1">
									<div class="candidate-info">
										<span>Location</span>
										<div>New York, US</div>
									</div>
									<!-- /.candidate-info -->
								</div>
								<div class="col-xl-2 col-md-4 order-xl-2">
									<div class="candidate-info">
										<span>Salary</span>
										<div>$30k-$50k/yr</div>
									</div>
									<!-- /.candidate-info -->
								</div>
								<div class="col-xl-3 col-md-4 order-xl-4">
									<div class="d-flex justify-content-md-end">
										<a href="#!" class="save-btn text-center rounded-circle tran3s"
											><i class="bi bi-heart"></i></a
										>
										<a href="#!" class="cv-download-btn fw-500 tran3s ms-md-3 sm-mt-20"
											>Download CV</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</InnerBanner1>
		<CandidatesProfile addSectionClasses={'bg-color pt-100 lg-pt-70 pb-150 lg-pb-80'}>
			<div slot="row" class="container">
				<div class="row">
					<div class="col-xxl-9 col-lg-8">
						<div class="candidates-profile-details me-xxl-5 pe-xxl-4">
							<div class="inner-card mb-65 lg-mb-40">
								<h3 class="title">Overview</h3>
								<p>
									Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from
									Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies
									diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci
									laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam Integer
									vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar
									tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
								</p>
								<br />
								<p>
									Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at
									pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum
									sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut
									elementum aliquam. Mauris nec.
								</p>
							</div>
							<!-- /.inner-card -->
							<h3 class="title">Intro</h3>
							<div
								class="video-post d-flex align-items-center justify-content-center mt-25 lg-mt-20 mb-75 lg-mb-50"
							>
								<a
									class="fancybox rounded-circle video-icon tran3s text-center"
									data-fancybox=""
									href="https://www.youtube.com/embed/aXFSJTjVjw0"
								>
									<i class="bi bi-play"></i>
								</a>
							</div>
							<div class="inner-card mb-75 lg-mb-50">
								<h3 class="title">Education</h3>
								<div class="time-line-data position-relative pt-15">
									<div class="info position-relative">
										<div
											class="numb fw-500 rounded-circle d-flex align-items-center justify-content-center"
										>
											1
										</div>
										<div class="text_1 fw-500">University of Boston</div>
										<h4>Bachelor Degree of Design</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
											Interdum primis
										</p>
									</div>
									<!-- ./info -->
									<div class="info position-relative">
										<div
											class="numb fw-500 rounded-circle d-flex align-items-center justify-content-center"
										>
											2
										</div>
										<div class="text_1 fw-500">Design Collage</div>
										<h4>UI/UX Design Course</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
											Interdum et malesuada fames ac ante ipsum primis in faucibus.
										</p>
									</div>
									<!-- ./info -->
								</div>
								<!-- /.time-line-data -->
							</div>
							<!-- /.inner-card -->
							<div class="inner-card mb-75 lg-mb-50">
								<h3 class="title">Skills</h3>
								<ul class="style-none skill-tags d-flex flex-wrap pb-25">
									<li>Figma</li>
									<li>HTML5</li>
									<li>Illustrator</li>
									<li>Adobe Photoshop</li>
									<li>WordPress</li>
									<li>jQuery</li>
									<li>Web Design</li>
									<li>Adobe XD</li>
									<li>CSS</li>
									<li class="more">3+</li>
								</ul>
							</div>
							<!-- /.inner-card -->
							<div class="inner-card mb-60 lg-mb-50">
								<h3 class="title">Work Experience</h3>
								<div class="time-line-data position-relative pt-15">
									<div class="info position-relative">
										<div
											class="numb fw-500 rounded-circle d-flex align-items-center justify-content-center"
										>
											1
										</div>
										<div class="text_1 fw-500">02/03/18 - 13/05/20</div>
										<h4>Product Designer (Google)</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
											Interdum et malesuada fames ac ante ipsum primis in faucibus.
										</p>
									</div>
									<!-- ./info -->
									<div class="info position-relative">
										<div
											class="numb fw-500 rounded-circle d-flex align-items-center justify-content-center"
										>
											2
										</div>
										<div class="text_1 fw-500">02/07/20 - 13/09/22</div>
										<h4>UI/UX Engineer (Adobe)</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
											Interdum primis
										</p>
									</div>
									<!-- ./info -->
								</div>
								<!-- /.time-line-data -->
							</div>
							<!-- /.inner-card -->
							<div class="inner-card">
								<h3 class="title">Portfolio</h3>
								<SlickSlider {settings} classes="candidate-portfolio-slider">
									<div class="item">
										<a href="#!" class="w-100 d-blok"
											><img src="/assets/images/candidates/CP_01.jpg" alt="" class="w-100" /></a
										>
									</div>
									<div class="item">
										<a href="#!" class="w-100 d-blok"
											><img src="/assets/images/candidates/CP_02.jpg" alt="" class="w-100" /></a
										>
									</div>
									<div class="item">
										<a href="#!" class="w-100 d-blok"
											><img src="/assets/images/candidates/CP_03.jpg" alt="" class="w-100" /></a
										>
									</div>
									<div class="item">
										<a href="#!" class="w-100 d-blok"
											><img src="/assets/images/candidates/CP_02.jpg" alt="" class="w-100" /></a
										>
									</div>
								</SlickSlider>
							</div>
							<!-- /.inner-card -->
						</div>
						<!-- /.candidates-profile-details -->
					</div>
					<div class="col-xxl-3 col-lg-4">
						<div class="cadidate-profile-sidebar ms-xl-5 ms-xxl-0 md-mt-60">
							<div class="cadidate-bio bg-wrapper mb-60 md-mb-40">
								<ul class="style-none">
									<li class="border-0">
										<span>Location: </span>
										<div>Spain, Barcelona</div>
									</li>
									<li>
										<span>Age: </span>
										<div>28</div>
									</li>
									<li>
										<span>Email: </span>
										<div><a href="mailto:me@support.com">me@support.com</a></div>
									</li>
									<li>
										<span>Qualification: </span>
										<div>Master Degree</div>
									</li>
									<li>
										<span>Gender: </span>
										<div>Male</div>
									</li>
									<li>
										<span>Expected Salary: </span>
										<div>$3k-$4k/month</div>
									</li>
									<li>
										<span>Social:</span>
										<div>
											<a href="#!" class="me-3"><i class="bi bi-facebook"></i></a>
											<a href="#!" class="me-3"><i class="bi bi-instagram"></i></a>
											<a href="#!" class="me-3"><i class="bi bi-twitter"></i></a>
											<a href="#!"><i class="bi bi-linkedin"></i></a>
										</div>
									</li>
								</ul>
								<a href="#!" class="btn-ten fw-500 text-white w-100 text-center tran3s mt-15"
									>Download CV</a
								>
							</div>
							<!-- /.cadidate-bio -->
							<h4 class="sidebar-title">Location</h4>
							<div class="map-area mb-60 md-mb-40">
								<div class="gmap_canvas h-100 w-100">
									<iframe
										title=""
										class="gmap_iframe h-100 w-100"
										src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
									></iframe>
								</div>
							</div>
							<h4 class="sidebar-title">Email Rashed Kabir.</h4>
							<div class="email-form bg-wrapper">
								<p>Your email address & profile will be shown to the recipient.</p>
								<form action="#">
									<div class="d-sm-flex mb-25">
										<label for="">Name</label>
										<input type="text" />
									</div>
									<div class="d-sm-flex mb-25">
										<label for="">Email</label>
										<input type="email" />
									</div>
									<div class="d-sm-flex mb-25 xs-mb-10">
										<label for="">Message</label>
										<textarea></textarea>
									</div>
									<div class="d-sm-flex">
										<label for=""></label>
										<button class="btn-ten fw-500 text-white flex-fill text-center tran3s"
											>Send
										</button>
									</div>
								</form>
							</div>
						</div>
						<!-- /.cadidate-profile-sidebar -->
					</div>
				</div>
				<!-- /.row -->
			</div>
		</CandidatesProfile>
		<JobPortel addonClasses={'top-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
