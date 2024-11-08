<script>
	export let addonClasses = 'position-relative pt-225 lg-pt-150 md-pt-100';
</script>

<section class="text-feature-three {addonClasses}">
	<slot name="container">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5 order-lg-last ms-auto">
					<div class="wow fadeInRight ms-xxl-5">
						<div class="title-one">
							<div class="sub-title">FIND FREELANCER</div>
							<h2 class="fw-600">Hire top talents</h2>
						</div>
						<div class="accordion accordion-style-one mt-40" id="accordionOne">
							<div class="accordion-item">
								<div class="accordion-header" id="headingOne">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="false"
										aria-controls="collapseOne"
									>
										Seamless Search
									</button>
								</div>
								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionOne"
								>
									<div class="accordion-body">
										<p>
											It only takes 5 minutes. Set-up is smooth and simple, with fully customisable
											page design to reflect your brand. It only takes 5 minutes.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<div class="accordion-header" id="headingTwo">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										Hire top talents
									</button>
								</div>
								<div
									id="collapseTwo"
									class="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionOne"
								>
									<div class="accordion-body">
										<p>Practice what you learned on realistic lorem quis test questions testing.</p>
									</div>
								</div>
							</div>
						</div>
						<!-- /.accordion-style-one -->
						<a href="/candidates-v2" class="btn-five border6 mt-70 lg-mt-40">Explorer All</a>
					</div>
				</div>
				<div class="col-lg-6 order-lg-first">
					<div
						class="img-box position-relative d-flex align-items-center justify-content-center wow fadeInLeft"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_07.png"
							alt=""
							class="lazy-img"
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/assets/screen_08.png"
							alt=""
							class="lazy-img shapes screen_01"
						/>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/shape/shape_25.svg"
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
