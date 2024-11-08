<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses ='position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80 pb-180 xl-pb-150';
</script>

<section class="text-feature-one {addSectionClasses}">
	<div class="container">
		<slot name="row">
			<div class="row">
				<div class="col-lg-5 order-lg-last">
					<div use:useAnimation class="ps-xxl-4 wow fadeInRight">
						<div class="title-one">
							<h2>Get over 50.000+ talented experts in jobi.</h2>
						</div>
						<p class="mt-40 md-mt-20 mb-40 md-mb-20">
							A full hybrid workforce management tools are yours to use, as well as access to our
							top 1% of talent.
						</p>
						<ul class="list-style-one style-none">
							<li>Seamless searching</li>
							<li>Get top 3% experts for your project</li>
							<li>Protected payments system</li>
						</ul>
						<a href="/signup" class="btn-one lg mt-50 md-mt-30">Post a Job</a>
					</div>
				</div>
				<div class="col-lg-7 col-md-11 m-auto order-lg-first">
					<div class="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
						<div class="row">
							<div class="col-md-6 col-sm-8 col-10">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_02.jpg"
									alt=""
									class="lazy-img img01"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-5">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_03.jpg"
									alt=""
									class="lazy-img img02 mt-35"
								/>
							</div>
							<div class="col-md-6 col-7">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/assets/img_04.jpg"
									alt=""
									class="lazy-img img01 mt-35"
								/>
							</div>
						</div>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_01.png"
							alt=""
							class="lazy-img shapes screen01 wow fadeInRight"
							use:useAnimation
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_02.png"
							alt=""
							class="lazy-img shapes screen02 wow fadeInUp"
							use:useAnimation
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_03.png"
							alt=""
							class="lazy-img shapes screen03 wow fadeInUp"
							use:useAnimation
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/shape/shape_06.svg"
							alt=""
							class="lazy-img shapes shape_01"
						/>
					</div>
				</div>
			</div>
		</slot>
	</div>
</section>
