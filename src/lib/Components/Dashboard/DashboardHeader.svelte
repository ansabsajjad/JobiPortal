<header class="dashboard-header">
	<div class="d-flex align-items-center justify-content-end">
		<button class="dash-mobile-nav-toggler d-block d-md-none me-auto">
			<span></span>
		</button>
		<form action="#" class="search-form">
			<input type="text" placeholder="Search here.." />
			<button
				><img
					src="/assets/images/lazy.svg"
					data-src="/assets/images/dashboard/icon/icon_10.svg"
					alt=""
					class="lazy-img m-auto"
				/></button
			>
		</form>
		<div class="profile-notification ms-2 ms-md-5 me-4">
			<button
				class="noti-btn dropdown-toggle"
				type="button"
				id="notification-dropdown"
				data-bs-toggle="dropdown"
				data-bs-auto-close="outside"
				aria-expanded="false"
			>
				<img src="/assets/images/lazy.svg" data-src="/assets/images/dashboard/icon/icon_11.svg" alt="" class="lazy-img" />
				<div class="badge-pill"></div>
			</button>
			<ul class="dropdown-menu" aria-labelledby="notification-dropdown">
				<li>
					<h4>Notification</h4>
					<ul class="style-none notify-list">
						<li class="d-flex align-items-center unread">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_36.svg"
								alt=""
								class="lazy-img icon"
							/>
							<div class="flex-fill ps-2">
								<h6>You have 3 new mails</h6>
								<span class="time">3 hours ago</span>
							</div>
						</li>
						<li class="d-flex align-items-center">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_37.svg"
								alt=""
								class="lazy-img icon"
							/>
							<div class="flex-fill ps-2">
								<h6>Your job post has been approved</h6>
								<span class="time">1 day ago</span>
							</div>
						</li>
						<li class="d-flex align-items-center unread">
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/dashboard/icon/icon_38.svg"
								alt=""
								class="lazy-img icon"
							/>
							<div class="flex-fill ps-2">
								<h6>Your meeting is cancelled</h6>
								<span class="time">3 days ago</span>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div>
			<a href="/dashboard/employer-dashboard-submit-job" class="job-post-btn tran3s">Post a Job</a>
		</div>
	</div>
</header>
