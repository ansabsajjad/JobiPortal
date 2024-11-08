<script>
	export let addonClasses = 'pt-100 lg-pt-80 md-pt-50 pb-65 md-pb-50';
</script>

<section class="job-portal-intro">
	<div class="container">
		<div class="wrapper bottom-border {addonClasses}">
			<div class="row align-items-center">
				<div class="col-lg-7">
					<div class="text-center text-lg-start">
						<h2>Most complete job portal.</h2>
						<p class="text-md m0 md-pb-20">Signup and start find your job or talents.</p>
					</div>
				</div>
				<slot name="btn-group">
					<div class="col-lg-5">
						<ul
							class="btn-group style-none d-flex flex-wrap justify-content-center justify-content-lg-end"
						>
							<li class="me-2"><a href="/job-list-v1" class="btn-three">Looking for job?</a></li>
							<li class="ms-2"><a href="/signup" class="btn-four">Post a job</a></li>
						</ul>
					</div>
				</slot>
			</div>
		</div>
	</div>
</section>
