<script>
	import Model1 from '../../lib/Components/Model/Model1.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Components/Footers/Footer.svelte';
	import InnerBanner1 from '../../lib/Components/Banners/InnerBanner1.svelte';
	import FaqSection from '../../lib/Components/Faq/FaqSection.svelte';

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
						<h2 class="text-white">Register</h2>
					</div>
					<p class="text-lg text-white mt-30 lg-mt-20">
						Create an account & Start posting or hiring talents
					</p>
				</div>
			</div>
		</InnerBanner1>
		<section class="registration-section position-relative pt-100 lg-pt-80 pb-150 lg-pb-80">
			<div class="container">
				<div class="user-data-form">
					<div class="text-center">
						<h2>Create Account</h2>
					</div>
					<div class="form-wrapper m-auto">
						<ul class="nav nav-tabs border-0 w-100 mt-30" role="tablist">
							<li class="nav-item" role="presentation">
								<button
									class="nav-link active"
									data-bs-toggle="tab"
									data-bs-target="#fc1"
									role="tab">Candidates</button
								>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab"
									>Employer</button
								>
							</li>
						</ul>
						<div class="tab-content mt-40">
							<div class="tab-pane fade show active" role="tabpanel" id="fc1">
								<form action="!#">
									<div class="row">
										<div class="col-12">
											<div class="input-group-meta position-relative mb-25">
												<label for="">Name*</label>
												<input type="text" placeholder="Enter Your Name" />
											</div>
										</div>
										<div class="col-12">
											<div class="input-group-meta position-relative mb-25">
												<label for="">Email*</label>
												<input type="email" placeholder="Enter Your Email" />
											</div>
										</div>
										<div class="col-12">
											<div class="input-group-meta position-relative mb-20">
												<label for="">Password*</label>
												<input type="password" placeholder="Enter Password" class="pass_log_id" />
												<span class="placeholder_icon"
													><span class="passVicon"
														><img src="/assets/images/icon/icon_60.svg" alt="" /></span
													></span
												>
											</div>
										</div>
										<div class="col-12">
											<div
												class="agreement-checkbox d-flex justify-content-between align-items-center"
											>
												<div>
													<input type="checkbox" id="remember" />
													<label for="remember"
														>By hitting the "Register" button, you agree to the <a href="#!"
															>Terms conditions</a
														>
														& <a href="#!">Privacy Policy</a></label
													>
												</div>
											</div>
											<!-- /.agreement-checkbox -->
										</div>
										<div class="col-12">
											<button class="btn-eleven fw-500 tran3s d-block mt-20">Register</button>
										</div>
									</div>
								</form>
							</div>
							<!-- /.tab-pane -->
							<div class="tab-pane fade" role="tabpanel" id="fc2">
								<form action="!#">
									<div class="row">
										<div class="col-12">
											<div class="input-group-meta position-relative mb-25">
												<label for="">First Name*</label>
												<input type="text" placeholder="Enter Your First Name" />
											</div>
											<div class="input-group-meta position-relative mb-25">
												<label for="">Last Name*</label>
												<input type="text" placeholder="Enter Your Last Name" />
											</div>
										</div>
										<div class="col-12">
											<div class="input-group-meta position-relative mb-25">
												<label for="">Email*</label>
												<input type="email" placeholder="Enter Your Email" />
											</div>
										</div>
										<div class="col-12">
											<div class="input-group-meta position-relative mb-20">
												<label for="">Password*</label>
												<input type="password" placeholder="Enter Password" class="pass_log_id" />
												<span class="placeholder_icon"
													><span class="passVicon"
														><img src="/assets/images/icon/icon_60.svg" alt="" /></span
													></span
												>
											</div>
										</div>
										<div class="col-12">
											<div
												class="agreement-checkbox d-flex justify-content-between align-items-center"
											>
												<div>
													<input type="checkbox" id="remember" />
													<label for="remember"
														>By hitting the "Register" button, you agree to the <a href="#!"
															>Terms conditions</a
														>
														& <a href="#!">Privacy Policy</a></label
													>
												</div>
											</div>
											<!-- /.agreement-checkbox -->
										</div>
										<div class="col-12">
											<button class="btn-eleven fw-500 tran3s d-block mt-20">Register</button>
										</div>
									</div>
								</form>
							</div>
							<!-- /.tab-pane -->
						</div>

						<div class="d-flex align-items-center mt-30 mb-10">
							<div class="line"></div>
							<span class="pe-3 ps-3">OR</span>
							<div class="line"></div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<a
									href="#!"
									class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
								>
									<img src="/assets/images/icon/google.png" alt="" />
									<span class="ps-2">Signup with Google</span>
								</a>
							</div>
							<div class="col-sm-6">
								<a
									href="#!"
									class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
								>
									<img src="/assets/images/icon/facebook.png" alt="" />
									<span class="ps-2">Signup with Facebook</span>
								</a>
							</div>
						</div>
						<p class="text-center mt-10">
							Have an account? <a
								href="#!"
								class="fw-500"
								data-bs-toggle="modal"
								data-bs-target="#loginModal">Sign In</a
							>
						</p>
					</div>
					<!-- /.form-wrapper -->
				</div>
				<!-- /.user-data-form -->
			</div>
		</section>
		<Footer />
		<BackToTop />
		<Model1 />
	{/if}
</div>
