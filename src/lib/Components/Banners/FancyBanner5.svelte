<script>
	import { useAnimation } from '$lib/js/animations.js';
	import { onMount } from 'svelte';

	export let addSectionClasses = 'mt-160 xl-mt-130 lg-mt-100 md-mt-80';
</script>

<section class="fancy-banner-five {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="bg-wrapper position-relative">
				<div class="row">
					<div class="col-lg-11 m-auto">
						<div class="row">
							<div class="col-md-7">
								<div class="title-one mb-35 md-mb-20">
									<h2 class="main-font text-white">
										Complete <span class="fw-light fst-italic">job portal</span> for everyone.
									</h2>
								</div>
								<ul class="btn-group style-none d-flex">
									<li class="me-2">
										<a href="/job-list-v1" class="btn-seven border6">Looking for job?</a>
									</li>
									<li class="ms-2"><a href="/signup" class="btn-five border6">Post a job</a></li>
								</ul>
							</div>
							<div class="col-md-5">
								<div class="img-meta sm-mt-30 position-relative">
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/assets/img_36.png"
										alt=""
										class="lazy-img m-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/shape/shape_30.svg"
					alt=""
					class="lazy-img shapes shape_01"
				/>
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/shape/shape_31.svg"
					alt=""
					class="lazy-img shapes shape_02"
				/>
			</div>
		</div>
	</slot>
</section>
