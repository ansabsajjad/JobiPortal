<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses = 'position-relative mt-190 lg-mt-150';
</script>

<section class="category-section-five {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="row justify-content-between align-items-center">
				<div class="col-lg-8">
					<div class="title-four text-center text-lg-start">
						<h2>Most Demanding Categories.</h2>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="d-flex justify-content-lg-end">
						<a href="/job-grid-v2" class="btn-six d-none d-lg-inline-block">Explore all fields</a>
					</div>
				</div>
			</div>
			<div
				class="card-wrapper d-flex flex-wrap justify-content-center justify-content-lg-between pt-50 lg-pt-30"
			>
				<div use:useAnimation class="card-style-seven bg-color text-center mt-15 wow fadeInUp">
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_24.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">UI/UX Design</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
				<div
					use:useAnimation
					class="card-style-seven bg-color text-center mt-15 wow fadeInUp"
					data-wow-delay="0.1s"
				>
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_25.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Development</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
				<div
					use:useAnimation
					class="card-style-seven bg-color text-center mt-15 wow fadeInUp"
					data-wow-delay="0.15s"
				>
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_26.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Marketing</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
				<div
					use:useAnimation
					class="card-style-seven bg-color text-center mt-15 wow fadeInUp"
					data-wow-delay="0.16s"
				>
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_27.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Telemarketing</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
				<div
					use:useAnimation
					class="card-style-seven bg-color text-center mt-15 wow fadeInUp"
					data-wow-delay="0.17s"
				>
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_28.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Accounting</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
				<div
					use:useAnimation
					class="card-style-seven bg-color text-center mt-15 wow fadeInUp"
					data-wow-delay="0.18s"
				>
					<a href="/job-grid-v3" class="wrapper d-flex align-items-center">
						<div class="icon d-flex align-items-center justify-content-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/icon/icon_29.svg"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div class="title fw-500">Editing</div>
					</a>
				</div>
				<!-- /.card-style-seven -->
			</div>
			<!-- /.card-wrapper -->
			<div class="text-center mt-40 d-lg-none">
				<a href="/job-grid-v2" class="btn-six">Explore all fields</a>
			</div>
		</div>
	</slot>
</section>
