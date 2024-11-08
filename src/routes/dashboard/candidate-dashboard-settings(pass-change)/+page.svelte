<script>
	import { niceSelect } from '$lib/js/custom.js';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';
	import BackToTop from '../../../lib/BackToTop.svelte';
	import DashboardAside from '../../../lib/Components/Dashboard/DashboardAside.svelte';
	import DashboardHeader from '../../../lib/Components/Dashboard/DashboardHeader.svelte';
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
		<DashboardAside activeMenu={'AccountSettings'} />
		<div class="dashboard-body">
			<div class="position-relative">
				<DashboardHeader />

				<h2 class="main-title">Change Password</h2>

				<div class="bg-white card-box border-20">
					<form action="#">
						<div class="row">
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">Old Password*</label>
									<input type="password" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">New Password*</label>
									<input type="password" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<div class="col-12">
								<div class="dash-input-wrapper mb-20">
									<label for="">Confirm Password*</label>
									<input type="password" />
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
						</div>

						<div class="button-group d-inline-flex align-items-center">
							<a href="#!" class="dash-btn-two tran3s rounded-3">Save & Updated</a>
						</div>
					</form>
				</div>
			</div>
		</div>
		<DeleteModel />
		<BackToTop />
	{/if}
</div>
