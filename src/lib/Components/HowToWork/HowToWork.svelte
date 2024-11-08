<script>
	import { useAnimation } from '$lib/js/animations.js';

</script>
<section class="how-it-works position-relative bg-color pt-110 lg-pt-80 pb-110 lg-pb-70">
	<div class="container">
		<div class="title-one text-center mb-65 lg-mb-40">
			<h2 class="text-white">
				How it’s <span class="position-relative"
					>work? <img
						src="/assets/images/lazy.svg"
						data-src="/assets/images/shape/shape_07.svg"
						alt=""
						class="lazy-img shapes shape"
					/></span
				>
			</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-xxl-3 col-lg-4 col-md-6">
				<div use:useAnimation class="card-style-two text-center mt-25 wow fadeInUp">
					<div class="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/icon/icon_08.svg"
							alt=""
							class="lazy-img"
						/>
					</div>
					<div class="title fw-500 text-white">Create Account</div>
					<p>It’s very easy to open an account and start your journey.</p>
				</div>
				<!-- /.card-style-two -->
			</div>
			<div class="col-xxl-3 col-lg-4 col-md-6 m-auto">
				<div use:useAnimation 
					class="card-style-two text-center position-relative arrow mt-25 wow fadeInUp"
					data-wow-delay="0.1s"
				>
					<div class="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/icon/icon_09.svg"
							alt=""
							class="lazy-img"
						/>
					</div>
					<div class="title fw-500 text-white">Complete your profile</div>
					<p>Complete your profile with all the info to get attention of client.</p>
				</div>
				<!-- /.card-style-two -->
			</div>
			<div class="col-xxl-3 col-lg-4 col-md-6">
				<div use:useAnimation class="card-style-two text-center mt-25 wow fadeInUp" data-wow-delay="0.19s">
					<div class="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/icon/icon_10.svg"
							alt=""
							class="lazy-img"
						/>
					</div>
					<div class="title fw-500 text-white">Apply job or hire</div>
					<p>Apply & get your preferable jobs with all the requirements and get it.</p>
				</div>
				<!-- /.card-style-two -->
			</div>
		</div>
	</div>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/shape/shape_08.svg"
		alt=""
		class="lazy-img shapes shape_01"
	/>
	<img
		src="/assets/images/lazy.svg"
		data-src="/assets/images/shape/shape_09.svg"
		alt=""
		class="lazy-img shapes shape_02"
	/>
</section>
<!-- /.how-it-works -->
