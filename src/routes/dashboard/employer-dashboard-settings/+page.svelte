<script>
	import { niceSelect } from '$lib/js/custom.js';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';
	import BackToTop from '../../../lib/BackToTop.svelte';
	import DashboardHeader from '../../../lib/Components/Dashboard/DashboardHeader.svelte';
	import EmployerDashboardAside from '../../../lib/Components/Dashboard/EmployerDashboardAside.svelte';
	import DeleteModel from '../../../lib/Components/Model/DeleteModel.svelte';

	// Props
	let isPreloading = true;
	onMount(() => {
		niceSelect();
	});
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<EmployerDashboardAside activeMenu={'AccountSettings'} />
		<div class="dashboard-body">
			<div class="position-relative">
				<DashboardHeader />
				<h2 class="main-title">Account Settings</h2>
				<div class="bg-white card-box border-20">
					<h4 class="dash-title-three">Edit & Update</h4>
					<form action="#">
						<div class="row">
							<div class="col-lg-6">
								<div class="dash-input-wrapper mb-20">
									<label for="">First Name</label>
									<input type="text" placeholder="Rashed" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-lg-6">
								<div class="dash-input-wrapper mb-20">
									<label for="">Last Name</label>
									<input type="text" placeholder="Kabir" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">Email</label>
									<input type="email" placeholder="rshakbair365@gmal.com" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">Phone Number</label>
									<input type="tel" placeholder="+810 321 889 021" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">Password</label>
									<input type="password" />

									<div class="info-text d-sm-flex align-items-center justify-content-between mt-5">
										<p class="m0">
											Want to change the password? <a
												href="/dashboard/candidate-dashboard-settings(pass-change)"
												class="fw-500">Click here</a
											>
										</p>
										<a
											href="/dashboard/candidate-dashboard-settings(pass-change)"
											class="fw-500 chng-pass">Change Password</a
										>
									</div>
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
						</div>

						<div class="button-group d-inline-flex align-items-center mt-30">
							<a href="#!" class="dash-btn-two tran3s me-3 rounded-3">Save</a>
							<a href="#!" class="dash-cancel-btn tran3s">Cancel</a>
						</div>
					</form>
				</div>
			</div>
		</div>
		<DeleteModel />
		<BackToTop />
	{/if}
</div>
