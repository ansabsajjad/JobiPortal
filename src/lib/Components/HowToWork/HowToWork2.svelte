<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses ="position-relative pt-130 xl-pt-110"
</script>

<section class="how-it-works-two {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div
				class="title-one d-flex align-items-center justify-content-between text-center mb-45 lg-mb-20"
			>
				<span class="line"></span>
				<h2 class="fw-600 ps-3 pe-3">How it’s Work?</h2>
				<span class="line"></span>
			</div>

			<div class="border-bottom border-md0">
				<div class="row justify-content-center">
					<div class="col-lg-4 col-md-6">
						<div
							use:useAnimation
							class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
						>
							<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
								<span>01</span>
							</div>
							<div class="title fw-500 text-lg text-dark mt-25 mb-10">Create Account</div>
							<p>It’s very easy to open an account and start your journey.</p>
						</div>
						<!-- /.card-style-five -->
					</div>
					<div class="col-lg-4 col-md-6">
						<div
							use:useAnimation
							class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
								<span>02</span>
							</div>
							<div class="title fw-500 text-lg text-dark mt-25 mb-10">Complete your profile.</div>
							<p>Complete your profile with all the info to get attention of client.</p>
						</div>
						<!-- /.card-style-five -->
					</div>
					<div class="col-lg-4 col-md-6">
						<div
							use:useAnimation
							class="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 wow fadeInUp"
							data-wow-delay="0.19s"
						>
							<div class="numb fw-500 d-flex align-items-center justify-content-center m-auto">
								<span>03</span>
							</div>
							<div class="title fw-500 text-lg text-dark mt-25 mb-10">Apply job or hire.</div>
							<p>Apply & get your preferable jobs with all the requirments and get it.</p>
						</div>
						<!-- /.card-style-five -->
					</div>
				</div>
			</div>
		</div>
	</slot>
</section>
