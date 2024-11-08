<script>
	import { useAnimation } from '$lib/js/animations.js';
</script>

<div class="hero-banner-four position-relative pt-170 lg-pt-150 pb-300 lg-pb-150 md-pb-100">
	<div class="container">
		<div class="position-relative pb-70 sm-pb-20">
			<div class="row">
				<div class="col-xxl-7 col-lg-8 m-auto text-center">
					<h1>Find your job without any hassle.</h1>
					<p class="text-md mt-25 mb-45 md-mb-30">
						Jobs & Job search. Find jobs in global. Executive jobs & work.
					</p>
				</div>
			</div>
			<div class="position-relative">
				<div class="row">
					<div class="col-xxl-8 col-xl-9 col-lg-10 m-auto">
						<div class="job-search-one style-two position-relative">
							<form action="#">
								<div class="row align-items-center">
									<div class="col-md-3">
										<div class="input-box">
											<div class="label">Job Categories</div>
											<select class="nice-select lg">
												<option value="1">Designer</option>
												<option value="2">Content creator</option>
												<option value="3">Web Developer</option>
												<option value="4">SEO Guru</option>
												<option value="5">Digital marketer</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="input-box">
											<div class="label">Location</div>
											<select class="nice-select lg">
												<option value="1">California, CA</option>
												<option value="2">New York</option>
												<option value="3">Miami</option>
											</select>
										</div>
									</div>
									<div class="col-md-3">
										<div class="input-box border-left">
											<div class="label">Keywords or Title</div>
											<input type="text" placeholder="Design, branding" class="keyword" />
										</div>
									</div>
									<div class="col-md-3 sm-mb-10 sm-mt-10">
										<button class="text-uppercase btn-five border6 tran3s m-auto">Search</button>
									</div>
								</div>
							</form>
							<div
								class="upload-btn position-relative d-flex align-items-center justify-content-between"
							>
								<span class="fw-500 text-dark me-1">Upload your CV</span>
								<i class="bi bi-file-earmark-arrow-up"></i>
								<input
									type="file"
									id="uploadCV"
									name="uploadCV"
									accept=".doc,.docx,.pdf,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
								/>
							</div>
						</div>
						<!-- /.job-search-one -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/assets/screen_10.png"
		alt=""
		class="lazy-img shapes shape_01"
	/>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/assets/screen_11.png"
		alt=""
		class="lazy-img shapes shape_02"
	/>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/assets/screen_12.png"
		alt=""
		class="lazy-img shapes shape_03"
	/>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/assets/screen_13.png"
		alt=""
		class="lazy-img shapes shape_04"
	/>
</div>
