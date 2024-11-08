<script>
	export let activeMenu = '';
</script>

<!-- 
		=============================================
				Dashboard Aside Menu
		============================================== 
		-->
<aside class="dash-aside-navbar">
	<div class="position-relative">
		<div class="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
			<a href="/dashboard/employer-dashboard-index">
				<img src="/assets/images/dashboard/logo_01.png" alt="" />
			</a>
			<button class="close-btn d-block d-md-none"><i class="bi bi-x-lg"></i></button>
		</div>
		<div class="user-data">
			<div class="user-avatar online position-relative rounded-circle">
				<img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/dashboard/avatar_03.jpg"
					alt=""
					class="lazy-img"
				/>
			</div>
			<!-- /.user-avatar -->
			<div class="user-name-data">
				<button
					class="user-name dropdown-toggle"
					type="button"
					id="profile-dropdown"
					data-bs-toggle="dropdown"
					data-bs-auto-close="outside"
					aria-expanded="false"
				>
					Zubayer Hasan
				</button>
				<ul class="dropdown-menu" aria-labelledby="profile-dropdown">
					<li>
						<a
							class="dropdown-item d-flex align-items-center"
							href="/dashboard/employer-dashboard-profile"
							><img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_23.svg"
								alt=""
								class="lazy-img"
							/><span class="ms-2 ps-1">Profile</span></a
						>
					</li>
					<li>
						<a
							class="dropdown-item d-flex align-items-center"
							href="/dashboard/employer-dashboard-settings"
							><img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_24.svg"
								alt=""
								class="lazy-img"
							/><span class="ms-2 ps-1">Account Settings</span></a
						>
					</li>
					<li>
						<a class="dropdown-item d-flex align-items-center" href="#!"
							><img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_25.svg"
								alt=""
								class="lazy-img"
							/><span class="ms-2 ps-1">Notification</span></a
						>
					</li>
				</ul>
			</div>
		</div>
		<!-- /.user-data -->
		<nav class="dasboard-main-nav">
			<ul class="style-none">
				<li>
					<a
						href="/dashboard/employer-dashboard-index"
						class="d-flex w-100 align-items-center {activeMenu === 'Dashboard' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'Dashboard' ? '/assets/images/dashboard/icon/icon_1_active.svg' : '/assets/images/dashboard/icon/icon_1.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Dashboard</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-profile"
						class="d-flex w-100 align-items-center {activeMenu === 'MyProfile' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'MyProfile' ? '/assets/images/dashboard/icon/icon_2_active.svg' : '/assets/images/dashboard/icon/icon_2.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>My Profile</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-jobs"
						class="d-flex w-100 align-items-center {activeMenu === 'MyJobs' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'MyJobs' ? '/assets/images/dashboard/icon/icon_3_active.svg' : '/assets/images/dashboard/icon/icon_3.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>My Jobs</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-message"
						class="d-flex w-100 align-items-center {activeMenu === 'Messages' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'Messages' ? '/assets/images/dashboard/icon/icon_4_active.svg' : '/assets/images/dashboard/icon/icon_4.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Messages</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-submit-job"
						class="d-flex w-100 align-items-center {activeMenu === 'SubmitJob' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'SubmitJob' ? '/assets/images/dashboard/icon/icon_39_active.svg' : '/assets/images/dashboard/icon/icon_39.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Submit Job</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-saved-candidate"
						class="d-flex w-100 align-items-center {activeMenu === 'SavedCandidate'
							? 'active'
							: ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'SavedCandidate' ? '/assets/images/dashboard/icon/icon_6_active.svg' : '/assets/images/dashboard/icon/icon_6.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Saved Candidate</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-membership"
						class="d-flex w-100 align-items-center {activeMenu === 'Membership' ? 'active' : ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'Membership' ? '/assets/images/dashboard/icon/icon_40_active.svg' : '/assets/images/dashboard/icon/icon_40.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Membership</span>
					</a>
				</li>
				<li>
					<a
						href="/dashboard/employer-dashboard-settings"
						class="d-flex w-100 align-items-center {activeMenu === 'AccountSettings'
							? 'active'
							: ''}"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src={`${activeMenu === 'AccountSettings' ? '/assets/images/dashboard/icon/icon_7_active.svg' : '/assets/images/dashboard/icon/icon_7.svg'}`}
							alt=""
							class="lazy-img"
						/>
						<span>Account Settings</span>
					</a>
				</li>
				<li>
					<a
						href="#!"
						class="d-flex w-100 align-items-center {activeMenu === 'DeleteAccount' ? 'active' : ''}"
						data-bs-toggle="modal"
						data-bs-target="#deleteModal"
					>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/dashboard/icon/icon_8.svg"
							alt=""
							class="lazy-img"
						/>
						<span>Delete Account</span>
					</a>
				</li>
			</ul>
		</nav>
		<!-- /.dasboard-main-nav -->
		<div class="profile-complete-status">
			<div class="progress-value fw-500">87%</div>
			<div class="progress-line position-relative">
				<div class="inner-line" style="width:80%;"></div>
			</div>
			<p>Profile Complete</p>
		</div>
		<!-- /.profile-complete-status -->

		<a href="#!" class="d-flex w-100 align-items-center logout-btn">
			<img
				src="/assets/images/lazy.svg"
				data-src="/assets/images/dashboard/icon/icon_9.svg"
				alt=""
				class="lazy-img"
			/>
			<span>Logout</span>
		</a>
	</div>
</aside>
