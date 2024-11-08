<script>
	export let addSectionClasses = 'pt-100 lg-pt-80 pb-120 lg-pb-80';
</script>

<section class="pricing-section {addSectionClasses}">
	<div class="container">
		<div class="title-one text-center mb-55 lg-mb-20">
			<h2 class="text-dark fw-normal">Simple Plan for All</h2>
		</div>
		<slot name="row">
			<div class="row">
				<div class="col-xxl-10 m-auto">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one mt-25">
								<div class="pack-name">Standard</div>
								<div class="price fw-500">0</div>
								<ul class="style-none">
									<li>15 job posting</li>
									<li>7 featured job</li>
									<li>Job post live for 30 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one popular mt-25">
								<div class="popular-badge">popular</div>
								<div class="pack-name">Gold</div>
								<div class="price fw-500"><sub>$</sub> 27.<sup>99</sup></div>
								<ul class="style-none">
									<li>30 job posting</li>
									<li>15 featured job</li>
									<li>Job post live for 60 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="pricing-card-one mt-25">
								<div class="pack-name">Diamond</div>
								<div class="price fw-500"><sub>$</sub> 39.<sup>99</sup></div>
								<ul class="style-none">
									<li>60 job posting</li>
									<li>30 featured job</li>
									<li>Job post live for 130 days</li>
								</ul>
								<a href="#!" class="get-plan-btn tran3s w-100 mt-30">Choose Plan</a>
							</div>
							<!-- /.pricing-card-one -->
						</div>
					</div>

					<div class="row">
						<div class="col-xl-5 col-lg-8 m-auto">
							<p class="text-center mt-60 lg-mt-30">
								We've done it carefully and simply. Combined with the ingredients makes for
								beautiful landings.
							</p>
						</div>
					</div>
				</div>
			</div>
		</slot>
	</div>
</section>
