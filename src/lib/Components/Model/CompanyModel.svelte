<script>
	let radius = 50;

	function updateRadius(event) {
		radius = event.target.value;
	}
</script>

<div
	class="modal popUpModal fade"
	id="filterPopUp"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-fullscreen modal-dialog-centered">
		<div class="container">
			<div class="filter-area-tab modal-content">
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				<div class="position-relative">
					<div class="main-title fw-500 text-dark ps-4 pe-4 pt-15 pb-15 border-bottom">
						Filter By
					</div>
					<div class="pt-25 pb-30 ps-4 pe-4">
						<div class="row">
							<div class="col-lg-4">
								<div class="filter-block pb-50 lg-pb-20">
									<div class="filter-title fw-500 text-dark">Keyword or Title</div>
									<form action="#" class="input-box position-relative">
										<input type="text" placeholder="Search by Keywords" />
										<button><i class="bi bi-search"></i></button>
									</form>
								</div>
								<!-- /.filter-block -->
							</div>
							<div class="col-lg-4">
								<div class="filter-block pb-50 lg-pb-20">
									<div class="filter-title fw-500 text-dark">Category</div>
									<select class="nice-select">
										<option value="0">Web Design</option>
										<option value="1">Design & Creative </option>
										<option value="2">It & Development</option>
										<option value="3">Web & Mobile Dev</option>
										<option value="4">Writing</option>
										<option value="5">Sales & Marketing</option>
									</select>
								</div>
								<!-- /.filter-block -->
							</div>
							<div class="col-lg-4">
								<div class="filter-block pb-50 lg-pb-20">
									<div class="filter-title fw-500 text-dark">Location</div>
									<select class="nice-select">
										<option value="0">All Location</option>
										<option value="1">California, CA</option>
										<option value="2">New York</option>
										<option value="3">Miami</option>
									</select>
								</div>
								<!-- /.filter-block -->
							</div>
						</div>

						<div class="row">
							<div class="col-lg-4">
								<div class="filter-block pb-25">
									<div class="filter-title fw-500 text-dark mt-1">Company Status</div>
									<div class="main-body">
										<ul class="style-none filter-input d-flex">
											<li class="me-3">
												<input type="checkbox" name="CompanyStatus" value="01" />
												<label for="">New</label>
											</li>
											<li class="me-3">
												<input type="checkbox" name="CompanyStatus" value="02" />
												<label for="">Top Rated</label>
											</li>
											<li>
												<input type="checkbox" name="CompanyStatus" value="03" />
												<label for="">Older</label>
											</li>
										</ul>
									</div>
								</div>
								<!-- /.filter-block -->
							</div>
							<div class="col-lg-4">
								<div class="filter-block pb-25">
									<div class="loccation-range-select">
										<div class="d-flex align-items-center">
											<span>Radius: &nbsp;</span>
											<div id="rangeValue">{radius}</div>
											<span>&nbsp;miles</span>
										</div>
										<input type="range" id="locationRange" value={radius} on:input={updateRadius} />
									</div>
								</div>
								<!-- /.filter-block -->
							</div>
							<div class="col-lg-4">
								<a href="#!" class="btn-ten fw-500 text-white w-100 text-center tran3s"
									>Apply Filter</a
								>
							</div>
						</div>
					</div>
					<!-- /.filter header -->
				</div>
			</div>
			<!-- /.filter-area-tab -->
		</div>
	</div>
</div>
