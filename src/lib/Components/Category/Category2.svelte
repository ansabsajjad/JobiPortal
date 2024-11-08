<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses = 'position-relative pt-150 lg-pt-100 pb-140 lg-pb-80';
</script>

<section class="category-section-two {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-md-6 col-sm-8">
					<div class="title-one text-center text-sm-start">
						<h2 class="fw-600">Most demanding job categories.</h2>
					</div>
				</div>
				<div class="col-md-5 col-sm-4">
					<div class="d-none d-sm-flex justify-content-sm-end mt-25">
						<a href="/job-grid-v1" class="btn-six border-0"
							>All Categories <img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_23.svg"
								alt=""
								class="lazy-img shapes"
							/></a
						>
					</div>
				</div>
			</div>
			<div class="card-wrapper row mt-80 lg-mt-40">
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div use:useAnimation class="card-style-four tran3s w-100 mt-30 wow fadeInUp">
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_12.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Design & <br />Development.</div>
							<div class="total-job">2340 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_13.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Customer Help <br />& Sales.</div>
							<div class="total-job">1560 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div use:useAnimation class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div class="card-style-four tran3s w-100 mt-30 wow fadeInUp" data-wow-delay="0.1s">
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_14.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Business <br />Marketing.</div>
							<div class="total-job">2210 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_15.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Business <br />Development.</div>
							<div class="total-job">980 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_16.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Programing & <br />Code</div>
							<div class="total-job">1687 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_17.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Video Edition <br />& 3D work</div>
							<div class="total-job">758 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="icon tran3s d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_18.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<div class="title tran3s fw-500 text-lg">Art & <br />Animation.</div>
							<div class="total-job">1452 vacancy</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
				<div class="col-lg-3 col-md-4 col-sm-6 d-flex">
					<div
						use:useAnimation
						class="card-style-four bg-color tran3s w-100 mt-30 wow fadeInUp"
						data-wow-delay="0.1s"
					>
						<a href="/job-grid-v2" class="d-block">
							<div class="title text-white">13k+</div>
							<div class="text-lg text-white">Job already posted</div>
							<div class="d-flex align-items-center justify-content-end mt-50">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/shape/shape_22.svg"
									alt=""
									class="lazy-img"
								/>
								<div class="icon tran3s d-flex align-items-center justify-content-center ms-5">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_19.svg"
										alt=""
										class="lazy-img"
									/>
								</div>
							</div>
						</a>
					</div>
					<!-- /.card-style-four -->
				</div>
			</div>
			<!-- /.card-wrapper -->
			<div class="text-center d-sm-none mt-50">
				<a href="/job-grid-v1" class="btn-six border-0"
					>All Categories <img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/shape/shape_23.svg"
						alt=""
						class="lazy-img shapes"
					/></a
				>
			</div>
		</div>
		<img
			src="/assets/images/lazy.svg"
			data-src="/assets/images/shape/shape_24.svg"
			alt=""
			class="lazy-img shapes shape_01"
		/>
	</slot>
</section>
