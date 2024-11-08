<script>
	import { useAnimation } from '$lib/js/animations.js';
</script>

<div class="hero-banner-three position-relative pt-120 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
	<div class="img-box">
		<img
			src="/assets/images/lazy.svg"
			data-src="/assets/images/assets/ils_01.svg"
			alt=""
			class="lazy-img"
		/>
		<img
			src="/assets/images/lazy.svg"
			data-src="/assets/images/assets/ils_01_02.svg"
			alt=""
			class="lazy-img shapes screen_01"
		/>
		<img
			use:useAnimation
			src="/assets/images/lazy.svg"
			data-src="/assets/images/assets/ils_01_01.svg"
			alt=""
			class="lazy-img shapes screen_02 wow fadeInLeft"
		/>
	</div>
	<div class="container">
		<div class="position-relative">
			<div class="row">
				<div class="col-lg-6 col-md-7">
					<div class="slogan fw-500 mb-5">#1 Online Marketplace</div>
					<h1>Find the talents for any job.</h1>
					<p class="text-lg mt-35 md-mt-30 mb-30 md-mb-20 pe-xl-5">
						Unlock your potential with quality job & earn from world leading brands & co.
					</p>
					<a href="/signup" class="btn-five">Post a Job</a>
					<div class="d-flex flex-wrap align-items-center mt-70 lg-mt-50 md-mt-40">
						<div class="partner-title">Trusted by:</div>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_14.png"
							alt=""
							class="lazy-img ms-2 me-4"
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_15.png"
							alt=""
							class="lazy-img me-4"
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_16.png"
							alt=""
							class="lazy-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
