<script>
	import { onMount } from 'svelte';
	let isSticky = false;
	// Props
	export let isCategoryShow = true;
	export let addonClasses = 'menu-overlay menu-style-one sticky-menu';
	export let navbarClasses = 'navbar-expand-lg p0 ms-lg-5 ms-3 order-lg-2';
	export let topHeaderClasses = 'd-flex align-items-center';
	onMount(() => {
		const handleScroll = () => (isSticky = window.scrollY >= 100);
		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class={`theme-main-menu ${addonClasses} ${isSticky ? 'fixed' : ''}`}>
	<div class="inner-content position-relative">
		<div class="top-header">
			<div class={topHeaderClasses}>
				<slot name="logo">
					<div class="logo order-lg-0">
						<a href="/index" class="d-flex align-items-center">
							<img src="/assets/images/logo/logo_01.png" alt="" />
						</a>
					</div>
				</slot>
				<!-- logo -->
				<slot name="right-widget"></slot>
				<!--/.right-widget-->
				<slot name="navbar">
					<nav class="navbar {navbarClasses}">
						<button
							class="navbar-toggler d-block d-lg-none"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav align-items-lg-center">
								<li class="d-block d-lg-none">
									<slot name="sidebarLogo">
										<div class="logo">
											<a href="/index" class="d-block"
												><img src="/assets/images/logo/logo_01.png" alt="" width="100" /></a
											>
										</div>
									</slot>
								</li>
								{#if isCategoryShow}
									<li class="nav-item dropdown category-btn mega-dropdown-sm">
										<a
											class="nav-link dropdown-toggle"
											href="#!"
											role="button"
											data-bs-toggle="dropdown"
											data-bs-auto-close="outside"
											aria-expanded="false"><i class="bi bi-grid-fill"></i> Category</a
										>
										<ul class="dropdown-menu category-dropdown">
											<li class="row gx-0">
												<div class="col-lg-6">
													<a href="/candidates-v1" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_63.svg"
																alt=""
																class="	"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">UI/UX Design</div>
															<div class="job-count">12k+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
													<a href="/job-list-v2" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_64.svg"
																alt=""
																class="lazy-img"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">Development</div>
															<div class="job-count">7k+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
													<a href="/job-list-v3" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_65.svg"
																alt=""
																class="lazy-img"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">Telemarketing</div>
															<div class="job-count">310+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
												</div>
												<div class="col-lg-6">
													<a href="/job-grid-v1" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_68.svg"
																alt=""
																class="lazy-img"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">Marketing</div>
															<div class="job-count">420+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
													<a href="/job-grid-v2" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_66.svg"
																alt=""
																class="lazy-img"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">Editing</div>
															<div class="job-count">3k+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
													<a href="/job-grid-v3" class="item d-flex align-items-center">
														<div
															class="icon d-flex align-items-center justify-content-center rounded-circle tran3s"
														>
															<img
																src="/assets/images/lazy.svg"
																data-src="/assets/images/icon/icon_67.svg"
																alt=""
																class="lazy-img"
															/>
														</div>
														<div class="ps-3 flex-fill">
															<div class="fw-500 text-dark">Finance Accounting</div>
															<div class="job-count">150+ Jobs</div>
														</div>
													</a>
													<!-- /.item -->
												</div>
											</li>
											<li>
												<a
													href="/candidates-v1"
													class="explore-all-btn d-flex align-items-center justify-content-between tran3s"
												>
													<span class="fw-500">Explore all fields</span>
													<span class="icon"><i class="bi bi-chevron-right"></i></span>
												</a>
											</li>
										</ul>
									</li>
								{/if}
								<li class="nav-item dropdown dashboard-menu">
									<a
										class="nav-link dropdown-toggle"
										href="#!"
										role="button"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-expanded="false"
										>Dashboard
									</a>
									<ul class="dropdown-menu">
										<li>
											<a
												href="/dashboard/candidate-dashboard-index"
												class="dropdown-item"
												target="_blank"><span>Candidate Dashboard</span></a
											>
										</li>
										<li>
											<a
												href="/dashboard/employer-dashboard-index"
												class="dropdown-item"
												target="_blank"><span>Employer Dashboard</span></a
											>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#!"
										role="button"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-expanded="false"
										>Home
									</a>
									<ul class="dropdown-menu">
										<li><a href="/index" class="dropdown-item"><span>Home 01</span></a></li>
										<li><a href="/index-2" class="dropdown-item"><span>Home 02</span></a></li>
										<li><a href="/index-3" class="dropdown-item"><span>Home 03</span></a></li>
										<li><a href="/index-4" class="dropdown-item"><span>Home 04</span></a></li>
										<li><a href="/index-5" class="dropdown-item"><span>Home 05</span></a></li>
										<li><a href="/index-6" class="dropdown-item"><span>Home 06</span></a></li>
										<li><a href="/index-7" class="dropdown-item"><span>Home 07</span></a></li>
									</ul>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#!"
										role="button"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-expanded="false"
										>Job
									</a>
									<ul class="dropdown-menu">
										<li>
											<a href="/job-list-v1" class="dropdown-item"><span>Job List style -1</span></a
											>
										</li>
										<li>
											<a href="/job-list-v2" class="dropdown-item"><span>Job List style -2</span></a
											>
										</li>
										<li>
											<a href="/job-list-v3" class="dropdown-item"><span>Job List style -3</span></a
											>
										</li>
										<li>
											<a href="/job-grid-v1" class="dropdown-item"><span>Job Grid style -1</span></a
											>
										</li>
										<li>
											<a href="/job-grid-v2" class="dropdown-item"><span>Job Grid style -2</span></a
											>
										</li>
										<li>
											<a href="/job-grid-v3" class="dropdown-item"><span>Job Grid style -3</span></a
											>
										</li>
										<li>
											<a href="/job-details-v1" class="dropdown-item"
												><span>Job Details v-1</span></a
											>
										</li>
										<li>
											<a href="/job-details-v2" class="dropdown-item"
												><span>Job Details v-2</span></a
											>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown mega-dropdown-sm">
									<a
										class="nav-link dropdown-toggle"
										href="#!"
										role="button"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-expanded="false"
										>Explore
									</a>
									<ul class="dropdown-menu">
										<li class="row gx-1">
											<div class="col-md-4">
												<div class="menu-column">
													<h6 class="mega-menu-title">Candidates</h6>
													<ul class="style-none mega-dropdown-list">
														<li>
															<a href="/candidates-v1" class="dropdown-item"
																><span>Candidates V-1</span></a
															>
														</li>
														<li>
															<a href="/candidates-v2" class="dropdown-item"
																><span>Candidates V-2</span></a
															>
														</li>
														<li>
															<a href="/candidates-v3" class="dropdown-item"
																><span>Candidates V-3</span></a
															>
														</li>
														<li>
															<a href="/candidates-v4" class="dropdown-item"
																><span>Candidates V-4</span></a
															>
														</li>
														<li>
															<a href="/candidate-profile-v1" class="dropdown-item"
																><span>Candidates Details v-1</span></a
															>
														</li>
														<li>
															<a href="/candidate-profile-v2" class="dropdown-item"
																><span>Candidates Details v-2</span></a
															>
														</li>
													</ul>
												</div>
												<!--/.menu-column -->
											</div>
											<div class="col-md-4">
												<div class="menu-column">
													<h6 class="mega-menu-title">Company</h6>
													<ul class="style-none mega-dropdown-list">
														<li>
															<a href="/company-v1" class="dropdown-item"
																><span>Company V-1</span></a
															>
														</li>
														<li>
															<a href="/company-v2" class="dropdown-item"
																><span>Company V-2</span></a
															>
														</li>
														<li>
															<a href="/company-v3" class="dropdown-item"
																><span>Company V-3</span></a
															>
														</li>
														<li>
															<a href="/company-v4" class="dropdown-item"
																><span>Company V-4</span></a
															>
														</li>
														<li>
															<a href="/company-details" class="dropdown-item"
																><span>Company Details</span></a
															>
														</li>
													</ul>
												</div>
												<!--/.menu-column -->
											</div>
											<div class="col-md-4">
												<div class="menu-column">
													<h6 class="mega-menu-title">Essential</h6>
													<ul class="style-none mega-dropdown-list">
														<li>
															<a href="/about-us" class="dropdown-item"><span>About Us</span></a>
														</li>
														<li>
															<a href="/pricing" class="dropdown-item"><span>Pricing</span></a>
														</li>
														<li><a href="/faq" class="dropdown-item"><span>Faq's</span></a></li>
														<li>
															<a href="/signup" class="dropdown-item"><span>Register</span></a>
														</li>
														<li>
															<a href="/404" class="dropdown-item"><span>404 Error</span></a>
														</li>
													</ul>
												</div>
												<!--/.menu-column -->
											</div>
										</li>
									</ul>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										href="#!"
										role="button"
										data-bs-toggle="dropdown"
										data-bs-auto-close="outside"
										aria-expanded="false"
										>Blog
									</a>
									<ul class="dropdown-menu">
										<li>
											<a href="/blog-v1" class="dropdown-item"><span>Blog Standard</span></a>
										</li>
										<li><a href="/blog-v2" class="dropdown-item"><span>Blog Grid</span></a></li>
										<li>
											<a href="/blog-v3" class="dropdown-item"><span>Blog Full width</span></a>
										</li>
										<li>
											<a href="/blog-details" class="dropdown-item"><span>Blog Details</span></a>
										</li>
									</ul>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/contact" role="button">Contact</a>
								</li>
								<slot name="sidebar-btn">
									<li class="d-md-none">
										<a href="/dashboard/employer-dashboard-submit-job" class="job-post-btn tran3s"
											>Post Job</a
										>
									</li>
									<li class="d-md-none">
										<a href="/candidates-v1" class="btn-one w-100">Hire Top Talents</a>
									</li>
								</slot>
							</ul>
						</div>
					</nav>
				</slot>
			</div>
		</div>
		<!--/.top-header-->
	</div>
	<!-- /.inner-content -->
</header>
<!-- /.theme-main-menu -->
