<script>
	import { useAnimation } from '$lib/js/animations.js';
	import { onMount } from 'svelte';
</script>

<section class="fancy-banner-six mt-150 xl-mt-120 lg-mt-100">
	<div class="container">
		<div
			use:useAnimation
			class="bg-wrapper position-relative ps-4 pe-4 pt-70 lg-pt-50 wow fadeInUp"
		>
			<div class="row">
				<div class="col-xxl-11 m-auto">
					<div class="row">
						<div class="col-lg-6 order-lg-last">
							<div class="text-wrapper ps-xl-5">
								<div class="title-two">
									<h2 class="main-font">Get your Matched Jobs in a few minutes.</h2>
								</div>
								<p class="text-md text-dark opacity-70 mt-25 lg-mt-20 mb-45 lg-mb-30">
									Find your dream job & earn from world leading brands. Upload your CV now.
								</p>
								<form
									action="#"
									class="upload-btn position-relative d-flex align-items-center justify-content-center"
								>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/icon/icon_46.svg"
										alt=""
										class="lazy-img"
									/> <span class="fw-500 ms-2 text-white">Upload your CV</span>
									<input type="file" id="uploadCV" name="uploadCV" />
								</form>
							</div>
						</div>
						<div class="col-lg-6 order-lg-first">
							<div class="img-meta position-relative md-mt-20">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_41.png"
									alt=""
									class="lazy-img m-auto"
								/>
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/shape/shape_12.svg"
									alt=""
									class="lazy-img shapes shape_01"
								/>
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/shape/shape_13.svg"
									alt=""
									class="lazy-img shapes shape_02"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				src="/assets/images/lazy.svg"
				data-src="/assets/images/shape/shape_14.svg"
				alt=""
				class="lazy-img shapes shape_03"
			/>
		</div>
	</div>
	<!-- /.bg-wrapper -->
</section>
