<script>
	import JobDetails from './../../lib/Components/JobSection/JobDetails.svelte';
	import JobPortel from './../../lib/Components/JobSection/JobPortel.svelte';
	import Model1 from './../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';

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
			<div slot="row" class="row">
				<div class="col-xl-8 m-auto text-center">
					<div class="post-date">
						18 Jul 2022 by <a href="#!" class="fw-500 text-white">Adobe</a>
					</div>
					<div class="title-two">
						<h2 class="text-white">Senior Product & Brand Design</h2>
					</div>
					<ul class="share-buttons d-flex flex-wrap justify-content-center style-none mt-10">
						<li>
							<a href="#!" class="d-flex align-items-center justify-content-center">
								<i class="bi bi-facebook"></i>
								<span>Facebook</span>
							</a>
						</li>
						<li>
							<a href="#!" class="d-flex align-items-center justify-content-center">
								<i class="bi bi-twitter"></i>
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a href="#!" class="d-flex align-items-center justify-content-center">
								<i class="bi bi-link-45deg"></i>
								<span>Copy</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</InnerBanner1>
		<JobDetails addSectionClasses={'style-two pt-100 lg-pt-80 pb-130 lg-pb-80'}>
			<div slot="container" class="container">
				<div class="row">
					<div class="col-xxl-9 col-xl-10 m-auto">
						<div class="details-post-data ps-xxl-4 pe-xxl-4">
							<ul
								class="job-meta-data-two d-flex flex-wrap justify-content-center justify-content-lg-between style-none"
							>
								<div class="bg-wrapper bg-white text-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_52.svg"
										alt=""
										class="lazy-img m-auto icon"
									/>
									<span>Salary</span>
									<div>50k-60k/year</div>
								</div>
								<div class="bg-wrapper bg-white text-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_53.svg"
										alt=""
										class="lazy-img m-auto icon"
									/>
									<span>Expertise</span>
									<div>Intermediate</div>
								</div>
								<div class="bg-wrapper bg-white text-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_54.svg"
										alt=""
										class="lazy-img m-auto icon"
									/>
									<span>Location</span>
									<div>Spain, Barcelona</div>
								</div>
								<div class="bg-wrapper bg-white text-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_55.svg"
										alt=""
										class="lazy-img m-auto icon"
									/>
									<span>Job Type</span>
									<div>Fulltime</div>
								</div>
								<div class="bg-wrapper bg-white text-center">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_56.svg"
										alt=""
										class="lazy-img m-auto icon"
									/>
									<span>Experience</span>
									<div>2 years</div>
								</div>
							</ul>

							<div class="post-block mt-50 lg-mt-40">
								<h4 class="block-title">Overview</h4>
								<p>
									When team members told us they needed more flexibility around where and how they
									worked, we acted, creating two options to accommodate two different styles of
									work. One non-negotiable principle along the way? We had to retain our deep
									culture of collaboration, both among ourselves and with our clients. Introducing
									Work From Near and Work From Anywhere at WillowTree. <a href="#!"
										>Learn more here</a
									>. Please indicate which location(s) you're interested.
								</p>
							</div>
							<div class="post-block mt-60 lg-mt-40">
								<h4 class="block-title">Job Description</h4>
								<p>
									As a <a href="#!">Product Designer</a> at WillowTree, you’ll give form to ideas by
									being the voice and owner of product decisions. You’ll drive the design direction,
									and then make it happen!
								</p>
								<p>
									We understand our responsibility to create a diverse, equitable, and inclusive
									place within the tech industry, while pushing to make our industry more
									representative.
								</p>
							</div>
							<div class="post-block mt-70 lg-mt-40">
								<h4 class="block-title">Responsibilities</h4>
								<ul class="list-type-one style-none mb-15">
									<li>
										Collaborate daily with a multidisciplinary team of Software Engineers,
										Researchers, Strategists, and Project Managers.
									</li>
									<li>
										Co-lead ideation sessions, workshops, demos, and presentations with clients
										on-site
									</li>
									<li>Push for and create inclusive, accessible design for all</li>
									<li>
										Maintain quality of the design process and ensure that when designs are
										translated into code they accurately reflect the design specifications.
									</li>
									<li>Sketch, wireframe, build IA, motion design, and run usability tests</li>
									<li>
										Design pixel perfect responsive UI’s and understand that adopting common
										interface pattern is better for UX than reinventing the wheel
									</li>
									<li>Ensure content strategy and design are perfectly in-sync</li>
									<li>
										Give and receive design critique to help constantly refine and push our work
									</li>
								</ul>
							</div>
							<div class="post-block mt-55 lg-mt-40">
								<h4 class="block-title">Required Skills:</h4>
								<ul class="list-type-two style-none mb-15">
									<li>You’ve been designing digital products for 2+ years.</li>
									<li>
										A portfolio that exemplifies strong visual design and a focus on defining the
										user experience.
									</li>
									<li>You’ve proudly shipped and launched several products.</li>
									<li>
										You have some past experience working in an agile environment – Think two-week
										sprints.
									</li>
									<li>
										Experience effectively presenting and communicating your design decisions to
										clients and team members
									</li>
									<li>Up-to-date knowledge of design software like Figma, Sketch etc.</li>
								</ul>
							</div>
							<div class="post-block mt-55 lg-mt-40">
								<h4 class="block-title">Benefits:</h4>
								<ul class="list-type-two style-none mb-15">
									<li>We are a remote-first company.</li>
									<li>100% company-paid health insurance premiums for you & your dependents</li>
									<li>Vacation stipend</li>
									<li>Unlimited paid vacation and paid company holidays</li>
									<li>Monthly wellness/gym stipend</li>
								</ul>
							</div>
							<a href="#!" class="btn-ten fw-500 text-white text-center tran3s mt-30"
								>Apply for this position</a
							>
						</div>
						<!-- /.details-post-data -->
					</div>
				</div>
			</div>
		</JobDetails>
		<JobPortel addonClasses={'bottom-border pt-65 md-pt-50 pb-65 md-pb-50'} />
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
