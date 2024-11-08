<script>
	import { useAnimation } from '$lib/js/animations.js';

	export let addSectionClasses = 'mt-180 xl-mt-150 lg-mt-100';
	export let jobListingWrapperClasses = 'border-wrapper mt-80 lg-mt-40';
	export let jobListClass = 'position-relative bottom-border';
</script>

<section class="job-listing-one {addSectionClasses}">
	<div class="container">
		<div class="row justify-content-between align-items-center">
			<div class="col-lg-6">
				<slot name="title">
					<div class="title-one">
						<h2 class="text-dark">New job listing</h2>
					</div>
				</slot>
			</div>
			<div class="col-lg-5">
				<div class="d-flex justify-content-lg-end">
					<a href="/job-list-v1" class="btn-six d-none d-lg-inline-block">Explore all jobs</a>
				</div>
			</div>
		</div>

		<div use:useAnimation class="job-listing-wrapper{jobListingWrapperClasses} wow fadeInUp">
			<div class="job-list-one {jobListClass}">
				<div class="row justify-content-between align-items-center">
					<div class="col-xxl-3 col-lg-4">
						<div class="job-title d-flex align-items-center">
							<a href="/job-details-v1" class="logo"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/logo/media_22.png"
									alt=""
									class="lazy-img m-auto"
								/></a
							>
							<a href="/job-details-v1" class="title fw-500 tran3s"
								>Developer & expert in java c++</a
							>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
						<a href="/job-details-v1" class="job-duration fw-500">Fulltime</a>
						<div class="job-date">18 Jul 2018 by <a href="/job-details-v1">slack</a></div>
					</div>
					<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
						<div class="job-location">
							<a href="/job-details-v1">Spain, Bercelona</a>
						</div>
						<div class="job-category">
							<a href="/job-details-v1">Developer,</a>
							<a href="/job-details-v1">Coder</a>
						</div>
					</div>
					<div class="col-lg-2 col-md-4">
						<div class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
							<a
								href="/job-details-v1"
								class="save-btn text-center rounded-circle tran3s me-3"
								title="Save Job"><i class="bi bi-bookmark-dash"></i></a
							>
							<a href="/job-details-v1" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /.job-list-one -->
			<div class="job-list-one {jobListClass}">
				<div class="row justify-content-between align-items-center">
					<div class="col-xxl-3 col-lg-4">
						<div class="job-title d-flex align-items-center">
							<a href="/job-details-v1" class="logo"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/logo/media_23.png"
									alt=""
									class="lazy-img m-auto"
								/></a
							>
							<a href="/job-details-v1" class="title fw-500 tran3s"
								>Animator & Expert in maya 3D
							</a>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
						<a href="/job-details-v1" class="job-duration fw-500 part-time">Part time</a>
						<div class="job-date">18 Jul 2018 by <a href="/job-details-v1">google</a></div>
					</div>
					<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
						<div class="job-location">
							<a href="/job-details-v1">USA,New York</a>
						</div>
						<div class="job-category">
							<a href="/job-details-v1">Finance,</a>
							<a href="/job-details-v1">Accounting</a>
						</div>
					</div>
					<div class="col-lg-2 col-md-4">
						<div class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
							<a
								href="/job-details-v1"
								class="save-btn text-center rounded-circle tran3s me-3"
								title="Save Job"><i class="bi bi-bookmark-dash"></i></a
							>
							<a href="/job-details-v1" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /.job-list-one -->
			<div class="job-list-one {jobListClass}">
				<div class="row justify-content-between align-items-center">
					<div class="col-xxl-3 col-lg-4">
						<div class="job-title d-flex align-items-center">
							<a href="/job-details-v1" class="logo"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/logo/media_24.png"
									alt=""
									class="lazy-img m-auto"
								/></a
							>
							<a href="/job-details-v1" class="title fw-500 tran3s"
								>Marketing Specialist in SEO & SMM</a
							>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
						<a href="/job-details-v1" class="job-duration fw-500 part-time">Part time</a>
						<div class="job-date">18 Jul 2018 by <a href="/job-details-v1">pinterest</a></div>
					</div>
					<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
						<div class="job-location">
							<a href="/job-details-v1">USA,Alaska</a>
						</div>
						<div class="job-category">
							<a href="/job-details-v1">Design,</a>
							<a href="/job-details-v1">Artist</a>
						</div>
					</div>
					<div class="col-lg-2 col-md-4">
						<div class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
							<a
								href="/job-details-v1"
								class="save-btn text-center rounded-circle tran3s me-3"
								title="Save Job"><i class="bi bi-bookmark-dash"></i></a
							>
							<a href="/job-details-v1" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /.job-list-one -->
			<div class="job-list-one {jobListClass}">
				<div class="row justify-content-between align-items-center">
					<div class="col-xxl-3 col-lg-4">
						<div class="job-title d-flex align-items-center">
							<a href="/job-details-v1" class="logo"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/logo/media_25.png"
									alt=""
									class="lazy-img m-auto"
								/></a
							>
							<a href="/job-details-v1" class="title fw-500 tran3s"
								>Developer & Expert in java c++.</a
							>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
						<a href="/job-details-v1" class="job-duration fw-500">Fulltime</a>
						<div class="job-date">18 Jul 2018 by <a href="/job-details-v1">instagram</a></div>
					</div>
					<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
						<div class="job-location">
							<a href="/job-details-v1">USA,California</a>
						</div>
						<div class="job-category">
							<a href="/job-details-v1">Application,</a>
							<a href="/job-details-v1">Dev</a>
						</div>
					</div>
					<div class="col-lg-2 col-md-4">
						<div class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
							<a
								href="/job-details-v1"
								class="save-btn text-center rounded-circle tran3s me-3"
								title="Save Job"><i class="bi bi-bookmark-dash"></i></a
							>
							<a href="/job-details-v1" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /.job-list-one -->
			<div class="job-list-one {jobListClass}">
				<div class="row justify-content-between align-items-center">
					<div class="col-xxl-3 col-lg-4">
						<div class="job-title d-flex align-items-center">
							<a href="/job-details-v1" class="logo"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/logo/media_26.png"
									alt=""
									class="lazy-img m-auto"
								/></a
							>
							<a href="/job-details-v1" class="title fw-500 tran3s">Lead & Product Desginer.</a>
						</div>
					</div>
					<div class="col-lg-3 col-md-4 col-sm-6 ms-auto">
						<a href="/job-details-v1" class="job-duration fw-500">Fulltime</a>
						<div class="job-date">18 Jul 2018 by <a href="/job-details-v1">linkedin</a></div>
					</div>
					<div class="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10">
						<div class="job-location">
							<a href="/job-details-v1">UK,London</a>
						</div>
						<div class="job-category">
							<a href="/job-details-v1">Finance,</a>
							<a href="/job-details-v1">Business</a>
						</div>
					</div>
					<div class="col-lg-2 col-md-4">
						<div class="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
							<a
								href="/job-details-v1"
								class="save-btn text-center rounded-circle tran3s me-3"
								title="Save Job"><i class="bi bi-bookmark-dash"></i></a
							>
							<a href="/job-details-v1" class="apply-btn text-center tran3s">APPLY</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /.job-list-one -->
		</div>
		<!-- /.job-listing-wrapper -->

		<div class="text-center mt-40 d-lg-none">
			<a href="/job-list-v1" class="btn-six">Explore all jobs</a>
		</div>

		<div use:useAnimation class="text-center mt-80 lg-mt-30 wow fadeInUp">
			<div class="btn-eight fw-500">
				Do you want to post a job for your company? <span>We can help.</span>
				<a href="/signup">Click here</a>
			</div>
		</div>
	</div>
</section>
