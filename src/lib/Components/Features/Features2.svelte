<script>
	import { useAnimation } from '$lib/js/animations.js';

	export let addSectionClasses =
		'position-relative pt-180 xl-pt-150 lg-pt-100 pb-180 xl-pb-150 lg-pb-120';
</script>

<section class="text-feature-two {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5 order-lg-last">
					<div use:useAnimation class="wow fadeInRight">
						<div class="title-one">
							<div class="sub-title">TOP BRAND</div>
							<h2>Collaboration with Top Brands.</h2>
						</div>
						<p class="text-lg mt-40 lg-mt-20 mb-40 lg-mb-30">
							We collaborate with a number of top tier companies on imagining the future of work,
							have a look.
						</p>
						<a href="/about-us" class="btn-nine tran3s d-flex align-items-center">
							<span class="fw-500 me-2">Learn More</span>
							<i class="bi bi-arrow-right"></i>
						</a>
					</div>
				</div>
				<div class="col-lg-7 order-lg-first">
					<div
						use:useAnimation
						class="big-circle rounded-circle position-relative d-flex align-items-center justify-content-center ms-lg-5 wow fadeInLeft"
					>
						<div
							class="inner-circle rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/logo_02.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<!-- /.inner-circle -->
						<div
							class="brand-icon icon_01 rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/media_09.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div
							class="brand-icon icon_02 rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/media_10.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div
							class="brand-icon icon_03 rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/media_11.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div
							class="brand-icon icon_04 rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/media_12.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<div
							class="brand-icon icon_05 rounded-circle d-flex align-items-center justify-content-center"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/logo/media_13.png"
								alt=""
								class="lazy-img"
							/>
						</div>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/shape/shape_10.svg"
							alt=""
							class="lazy-img shapes shape_01"
						/>
					</div>
					<!-- /.big-circle -->
				</div>
			</div>
		</div>
	</slot>
</section>
