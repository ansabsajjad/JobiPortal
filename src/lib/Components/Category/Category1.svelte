<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addonClasses =
		'bg-color position-relative pt-180 xl-pt-150 lg-pt-80 pb-140 xl-pb-120 lg-pb-60';
</script>

<section class="category-section-one {addonClasses}">
	<slot name="container">
		<div class="container">
			<div class="row justify-content-between align-items-center">
				<div class="col-lg-6">
					<div class="title-one">
						<h2>
							Most <span class="position-relative"
								>Demanding <img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/shape/shape_04.svg"
									alt=""
									class="lazy-img shapes shape"
								/></span
							> Categories.
						</h2>
					</div>
				</div>
				<div class="col-xxl-5 col-lg-6">
					<p class="text-md mb-25 lg-mb-10 md-mt-20">
						Together with useful notifications, collaboration, insights, and improvement tip lorem
						etc.
					</p>
					<a href="/job-grid-v1" class="btn-two d-none d-lg-inline-block">Explore all fields</a>
				</div>
			</div>
			<div class="card-wrapper row justify-content-center mt-75 lg-mt-40 md-mt-10">
				<div use:useAnimation class="card-style-one text-center mt-20 wow fadeInUp">
					<a href="/job-grid-v1" class="bg wrapper active">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_01.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">UI/UX Design</div>
						<div class="total-job">12k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
				<div
					use:useAnimation
					class="card-style-one text-center mt-20 wow fadeInUp"
					data-wow-delay="0.1s"
				>
					<a href="/job-grid-v2" class="bg wrapper">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_02.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Development</div>
						<div class="total-job">8k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
				<div
					use:useAnimation
					class="card-style-one text-center mt-20 wow fadeInUp"
					data-wow-delay="0.15s"
				>
					<a href="/job-grid-v3" class="bg wrapper">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_03.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Marketing</div>
						<div class="total-job">10k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
				<div
					use:useAnimation
					class="card-style-one text-center mt-20 wow fadeInUp"
					data-wow-delay="0.16s"
				>
					<a href="/job-grid-v1" class="bg wrapper">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_04.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Telemarketing</div>
						<div class="total-job">6k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
				<div
					use:useAnimation
					class="card-style-one text-center mt-20 wow fadeInUp"
					data-wow-delay="0.17s"
				>
					<a href="/job-grid-v2" class="bg wrapper">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_05.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Editing</div>
						<div class="total-job">7k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
				<div
					use:useAnimation
					class="card-style-one text-center mt-20 wow fadeInUp"
					data-wow-delay="0.18s"
				>
					<a href="/job-grid-v3" class="bg wrapper">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_06.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Accounting</div>
						<div class="total-job">17k+ Jobs</div>
					</a>
				</div>
				<!-- /.card-style-one -->
			</div>
			<!-- /.card-wrapper -->
			<div class="text-center mt-40 d-lg-none">
				<a href="/job-grid-v1" class="btn-two">Explore all fields</a>
			</div>
		</div>
		<img
			src="/assets/images/lazy.svg"
			data-src="/assets/images/shape/shape_05.svg"
			alt=""
			class="lazy-img shapes shape_01"
		/>
	</slot>
</section>
<!-- ./category-section-one -->
