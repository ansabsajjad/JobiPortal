<script>
	import { useAnimation } from '$lib/js/animations.js';
	import Countup from 'svelte-countup?client';
</script>

<div class="hero-banner-six position-relative pt-170 lg-pt-150 pb-60 lg-pb-40">
	<div class="container">
		<div class="position-relative">
			<div class="row">
				<div class="col-xxl-8 col-xl-9 col-lg-8 m-auto text-center">
					<h1>Find & Hire Experts for any Job.</h1>
					<p class="text-md text-white mt-25 mb-55 lg-mb-40">
						Unlock your potential with quality job & earn from world leading brands.
					</p>
				</div>
			</div>
			<div class="position-relative">
				<div class="row">
					<div class="col-xl-8 col-lg-9 m-auto">
						<div
							class="job-search-one style-two position-relative me-xxl-3 ms-xxl-3 mb-100 lg-mb-50"
						>
							<form action="#">
								<div class="row">
									<div class="col-md-5">
										<div class="input-box">
											<div class="label">Your job title, keyword or company?</div>
											<input type="text" placeholder="Google" class="keyword" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="input-box border-left">
											<div class="label">Category</div>
											<select class="nice-select lg">
												<option value="1">Web Design</option>
												<option value="2">Design & Creative</option>
												<option value="3">It & Development</option>
												<option value="4">Web & Mobile Dev</option>
												<option value="5">Writing</option>
												<option value="6">Sales & Marketing</option>
												<option value="7">Music & Audio</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<button class="fw-500 text-md h-100 w-100 tran3s search-btn-two">Search</button>
									</div>
								</div>
							</form>
						</div>
						<!-- /.job-search-one -->
					</div>
				</div>

				<div class="row">
					<div class="col-xl-8 m-auto">
						<div class="row">
							<div class="col-sm-4">
								<div use:useAnimation class="counter-block-two mt-15 text-center wow fadeInUp">
									<div class="main-count fw-500 text-white">
										<span class="counter"><Countup duration={1500} value={30} /></span>k+
									</div>
									<p class="text-white">Wordlwide Client</p>
								</div>
								<!-- /.counter-block-two -->
							</div>
							<div class="col-sm-4">
								<div
									use:useAnimation
									class="counter-block-two mt-15 text-center wow fadeInUp"
									data-wow-delay="0.2s"
								>
									<div class="main-count fw-500 text-white">
										<span class="counter"><Countup duration={1500} value={3} /></span>%
									</div>
									<p class="text-white">Top Talents</p>
								</div>
								<!-- /.counter-block-two -->
							</div>
							<div class="col-sm-4">
								<div
									use:useAnimation
									class="counter-block-two mt-15 text-center wow fadeInUp"
									data-wow-delay="0.35s"
								>
									<div class="main-count fw-500 text-white">
										<span class="counter"><Countup duration={1500} value={12} /></span>mil
									</div>
									<p class="text-white">Dollar Payout</p>
								</div>
								<!-- /.counter-block-two -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="banner-six-carousel" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner w-100 h-100">
			<div
				class="carousel-item active"
				style="background-image: url(/assets/images/assets/banner_img_01.jpg)"
			></div>
			<div
				class="carousel-item"
				style="background-image: url(/assets/images/assets/banner_img_02.jpg)"
			></div>
		</div>
	</div>
</div>
<!-- /.hero-banner-six -->
