<script>
	export let addSectionClasses = 'pt-110 lg-pt-80 pb-160 xl-pb-150 lg-pb-80';
	export let isGrid = true;
	function toggleStyle(style) {
		isGrid = style === 'grid';
	}
	let radius = 50;

	function updateRadius(event) {
		radius = event.target.value;
	}
</script>

<section class="company-profiles {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-lg-4">
					<button
						type="button"
						class="filter-btn w-100 pt-2 pb-2 h-auto fw-500 tran3s d-lg-none mb-40"
						data-bs-toggle="offcanvas"
						data-bs-target="#filteroffcanvas"
					>
						<i class="bi bi-funnel"></i>
						Filter
					</button>
					<div class="filter-area-tab offcanvas offcanvas-start" id="filteroffcanvas">
						<button
							type="button"
							class="btn-close text-reset d-lg-none"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
						<div class="main-title fw-500 text-dark">Filter By</div>
						<div class="light-bg border-20 ps-4 pe-4 pt-25 pb-30 mt-20">
							<div class="filter-block bottom-line pb-25">
								<a
									class="filter-title fw-500 text-dark"
									data-bs-toggle="collapse"
									href="#collapseSemploye"
									role="button"
									aria-expanded="false">Search Company</a
								>
								<div class="collapse show" id="collapseSemploye">
									<div class="main-body">
										<form action="#" class="input-box position-relative">
											<input type="text" placeholder="Company Name" />
											<button><i class="bi bi-search"></i></button>
										</form>
									</div>
								</div>
							</div>
							<!-- /.filter-block -->
							<div class="filter-block bottom-line pb-25 mt-25">
								<a
									class="filter-title fw-500 text-dark"
									data-bs-toggle="collapse"
									href="#collapseCstatus"
									role="button"
									aria-expanded="false">Company Status</a
								>
								<div class="collapse show" id="collapseCstatus">
									<div class="main-body">
										<ul class="style-none filter-input">
											<li>
												<input type="checkbox" name="CompanyStatus" value="01" />
												<label for="">New</label>
											</li>
											<li>
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
							</div>
							<!-- /.filter-block -->
							<div class="filter-block bottom-line pb-25 mt-25">
								<a
									class="filter-title fw-500 text-dark"
									data-bs-toggle="collapse"
									href="#collapseLocation"
									role="button"
									aria-expanded="false">Location</a
								>
								<div class="collapse show" id="collapseLocation">
									<div class="main-body">
										<select class="nice-select bg-white">
											<option value="0">All Location</option>
											<option value="1">California, CA</option>
											<option value="2">New York</option>
											<option value="3">Miami</option>
										</select>
										<div class="loccation-range-select mt-5">
											<div class="d-flex align-items-center">
												<span>Radius: &nbsp;</span>
												<div id="rangeValue">{radius}</div>
												<span>&nbsp;miles</span>
											</div>
											<input
												type="range"
												id="locationRange"
												value={radius}
												on:input={updateRadius}
											/>
										</div>
									</div>
								</div>
							</div>
							<!-- /.filter-block -->

							<div class="filter-block bottom-line pb-25 mt-25">
								<a
									class="filter-title fw-500 text-dark collapsed"
									data-bs-toggle="collapse"
									href="#collapseCategory"
									role="button"
									aria-expanded="false">Category</a
								>
								<div class="collapse" id="collapseCategory">
									<div class="main-body">
										<ul class="style-none filter-input">
											<li>
												<input type="checkbox" name="Experience" value="01" />
												<label for="">Web Design <span>15</span></label>
											</li>
											<li>
												<input type="checkbox" name="Experience" value="02" />
												<label for="">Design & Creative <span>8</span></label>
											</li>
											<li>
												<input type="checkbox" name="Experience" value="03" />
												<label for="">It & Development <span>7</span></label>
											</li>
											<li>
												<input type="checkbox" name="Experience" value="04" />
												<label for="">Web & Mobile Dev <span>5</span></label>
											</li>
											<li>
												<input type="checkbox" name="Experience" value="05" />
												<label for="">Writing <span>4</span></label>
											</li>
											<li class="hide">
												<input type="checkbox" name="Experience" value="06" />
												<label for="">Sales & Marketing <span>25</span></label>
											</li>
											<li class="hide">
												<input type="checkbox" name="Experience" value="07" />
												<label for="">Music & Audio <span>1</span></label>
											</li>
										</ul>
										<div class="more-btn"><i class="bi bi-plus"></i> Show More</div>
									</div>
								</div>
							</div>
							<!-- /.filter-block -->
							<div class="filter-block bottom-line pb-25 mt-25">
								<a
									class="filter-title fw-500 text-dark collapsed"
									data-bs-toggle="collapse"
									href="#collapseTeam"
									role="button"
									aria-expanded="false">Team Size</a
								>
								<div class="collapse" id="collapseTeam">
									<div class="main-body">
										<ul class="style-none filter-input">
											<li>
												<input type="checkbox" name="Team" value="01" />
												<label for="">12+ Team Size</label>
											</li>
											<li>
												<input type="checkbox" name="Team" value="02" />
												<label for="">7+ Team Size</label>
											</li>
											<li>
												<input type="checkbox" name="Team" value="03" />
												<label for="">10+ Team Size</label>
											</li>
											<li>
												<input type="checkbox" name="Team" value="04" />
												<label for="">15+ Team Size</label>
											</li>
											<li>
												<input type="checkbox" name="Team" value="05" />
												<label for="">5+ Team Size</label>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<!-- /.filter-block -->
							<a href="#!" class="btn-ten fw-500 text-white w-100 text-center tran3s mt-30"
								>Apply Filter</a
							>
						</div>
					</div>
					<!-- /.filter-area-tab -->
				</div>

				<div class="col-xl-9 col-lg-8">
					<div class="ms-xxl-5 ms-xl-3">
						<div class="upper-filter d-flex justify-content-between align-items-center mb-20">
							<div class="total-job-found">
								All <span class="text-dark fw-500">320</span> company found
							</div>
							<div class="d-flex align-items-center">
								<div class="short-filter d-flex align-items-center">
									<div class="text-dark fw-500 me-2">Short:</div>
									<select class="nice-select">
										<option value="0">Latest</option>
										<option value="1">Category</option>
										<option value="2">Job Type</option>
									</select>
								</div>
								<button
									on:click={() => toggleStyle('list')}
									class={`style-changer-btn text-center rounded-circle tran3s ms-2 list-btn ${isGrid ? 'active' : ''}`}
									title="Active List"><i class="bi bi-list"></i></button
								>
								<button
									on:click={() => toggleStyle('grid')}
									class={`style-changer-btn text-center rounded-circle tran3s ms-2 grid-btn ${!isGrid ? 'active' : ''}`}
									title="Active Grid"><i class="bi bi-grid"></i></button
								>
							</div>
						</div>
						<!-- /.upper-filter -->

						<div class={`accordion-box grid-style ${isGrid ? 'show' : ''}`}>
							<div class="row">
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout favourite mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_29.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Payoneer</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">3 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_30.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Medium</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">5 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_31.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Linkedin</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout favourite mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_38.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Radiant</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout favourite mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_39.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Panoroma</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_40.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Colorrib</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_41.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Alpha</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_32.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">MacDonald’s</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
								<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">
									<div class="company-grid-layout favourite mb-30">
										<a href="/company-details" class="company-logo me-auto ms-auto rounded-circle"
											><img
												src="/assets/images/lazy.svg"
												data-src="/assets/images/logo/media_42.png"
												alt=""
												class="lazy-img rounded-circle"
											/></a
										>
										<h5 class="text-center">
											<a href="/company-details" class="company-name tran3s">Bootstrap</a>
										</h5>
										<p class="text-center mb-auto">New York, New York; Seattle, Washington...</p>
										<div class="bottom-line d-flex">
											<a href="/company-details">9 Vacancy</a>
											<a href="/company-details"><i class="bi bi-bookmark-dash"></i> Save</a>
										</div>
									</div>
									<!-- /.company-grid-layout -->
								</div>
							</div>
						</div>
						<!-- /.accordion-box -->

						<div class={`accordion-box list-style ${isGrid ? '' : 'show'}`}>
							<div class="company-list-layout favourite mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_30.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Medium</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">14+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>3 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_31.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Linkedin</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>7 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout favourite mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_39.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Panorama Inc</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">7+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>13 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout favourite mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_29.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Payoneer</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>3 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_40.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Colorrib</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">20+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>7 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout favourite mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_32.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">MacDonald’s</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">40+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>2 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_42.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Bootstrap</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">12+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>8 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
							<div class="company-list-layout mb-20">
								<div class="row justify-content-between align-items-center">
									<div class="col-xl-5">
										<div class="d-flex align-items-xl-center">
											<a href="/company-details" class="company-logo rounded-circle"
												><img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/logo/media_41.png"
													alt=""
													class="lazy-img rounded-circle"
												/></a
											>
											<div class="company-data">
												<h5 class="m0">
													<a href="/company-details" class="company-name tran3s">Alpha</a>
												</h5>
												<p>New York, Seattle, Washington DC</p>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-md-8">
										<div class="d-flex align-items-center ps-xxl-5 lg-mt-20">
											<div class="d-flex align-items-center">
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_42.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_43.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<img
													src="/assets/images/lazy.svg"
													data-src="/assets/images/assets/img_44.png"
													alt=""
													class="lazy-img rounded-circle team-img"
												/>
												<div class="team-text">
													<span class="text-md fw-500 text-dark d-block">8+ </span> Team Size
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-md-4">
										<div
											class="btn-group d-flex align-items-center justify-content-md-end lg-mt-20"
										>
											<a href="/company-details" class="open-job-btn text-center fw-500 tran3s me-2"
												>10 open job</a
											>
											<a
												href="/company-details"
												class="save-btn text-center rounded-circle tran3s"
												title="Save Job"><i class="bi bi-bookmark-dash"></i></a
											>
										</div>
									</div>
								</div>
							</div>
							<!-- /.company-list-layout -->
						</div>
						<!-- /.accordion-box -->

						<div class="pt-50 lg-pt-20 d-sm-flex align-items-center justify-content-between">
							<p class="m0 order-sm-last text-center text-sm-start xs-pb-20">
								Showing <span class="text-dark fw-500">1 to 20</span> of
								<span class="text-dark fw-500">350</span>
							</p>
							<ul
								class="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none"
							>
								<li class="active"><a href="#!">1</a></li>
								<li><a href="#!">2</a></li>
								<li><a href="#!">3</a></li>
								<li><a href="#!">4</a></li>
								<li>....</li>
								<li class="ms-2">
									<a href="#!" class="d-flex align-items-center"
										>Last <img src="/assets/images/icon/icon_50.svg" alt="" class="ms-2" /></a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- /.col- -->
			</div>
		</div>
	</slot>
</section>
