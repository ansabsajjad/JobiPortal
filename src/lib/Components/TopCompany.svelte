<script>
	import { useAnimation } from '$lib/js/animations.js';
</script>

<section class="top-company-section pt-100 lg-pt-60 pb-130 lg-pb-80 mt-200 xl-mt-150">
	<div class="container">
		<div class="row justify-content-between align-items-center pb-40 lg-pb-10">
			<div class="col-sm-7">
				<div class="title-one">
					<h2 class="main-font">Top Company</h2>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="d-flex justify-content-sm-end">
					<a href="/company-v1" class="btn-six d-none d-sm-inline-block">Explore More</a>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-3 col-sm-6">
				<div use:useAnimation class="card-style-ten text-center tran3s mt-25 wow fadeInUp">
					<img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/logo/media_29.png"
						alt=""
						class="lazy-img m-auto"
					/>
					<div class="text-lg fw-500 text-dark mt-15 mb-30">Payoneer</div>
					<p class="mb-20">New York, New York; Seattle, Washington...</p>
					<a href="/company-v2" class="open-job-btn fw-500 tran3s">3 open job</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div
					use:useAnimation
					class="card-style-ten text-center tran3s mt-25 wow fadeInUp"
					data-wow-delay="0.100s"
				>
					<img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/logo/media_30.png"
						alt=""
						class="lazy-img m-auto"
					/>
					<div class="text-lg fw-500 text-dark mt-15 mb-30">Medium</div>
					<p class="mb-20">New York, New York; Seattle, Washington...</p>
					<a href="/company-v2" class="open-job-btn fw-500 tran3s">5 open job</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div
					use:useAnimation
					class="card-style-ten text-center tran3s mt-25 wow fadeInUp"
					data-wow-delay="0.150s"
				>
					<img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/logo/media_31.png"
						alt=""
						class="lazy-img m-auto"
					/>
					<div class="text-lg fw-500 text-dark mt-15 mb-30">Linkedin</div>
					<p class="mb-20">New York, New York; Seattle, Washington...</p>
					<a href="/company-v2" class="open-job-btn fw-500 tran3s">10 open job</a>
				</div>
			</div>
			<div class="col-lg-3 col-sm-6">
				<div
					use:useAnimation
					class="card-style-ten text-center tran3s mt-25 wow fadeInUp"
					data-wow-delay="0.200s"
				>
					<img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/logo/media_32.png"
						alt=""
						class="lazy-img m-auto"
					/>
					<div class="text-lg fw-500 text-dark mt-15 mb-30">MacDonald’s</div>
					<p class="mb-20">New York, New York; Seattle, Washington...</p>
					<a href="/company-v2" class="open-job-btn fw-500 tran3s">7 open job</a>
				</div>
			</div>
		</div>

		<div class="text-center mt-30 d-sm-none">
			<a href="/company-v1" class="btn-six">Explore More</a>
		</div>
	</div>
</section>
