<script>
	let passwordType = 'password';

	function togglePassword() {
		passwordType = passwordType === 'password' ? 'text' : 'password';
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			togglePassword();
		}
	}
</script>

<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-fullscreen modal-dialog-centered">
		<div class="container">
			<div class="user-data-form modal-content">
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				<div class="text-center">
					<h2>Hi, Welcome Back!</h2>
					<p>Still don't have an account? <a href="/signup">Sign up</a></p>
				</div>
				<div class="form-wrapper m-auto">
					<form action="#" class="mt-10">
						<div class="row">
							<div class="col-12">
								<div class="input-group-meta position-relative mb-25">
									<label for="">Email*</label>
									<input type="email" placeholder="rshdkabir@gmail.com" />
								</div>
							</div>
							<div class="col-12">
								<div class="input-group-meta position-relative mb-20">
									<label for="">Password*</label>
									<input type={passwordType} placeholder="Enter Password" class="pass_log_id" />
									<span
										class="placeholder_icon"
										role="button"
										tabindex="0"
										aria-label={passwordType === 'password' ? 'Show Password' : 'Hide Password'}
										on:click={togglePassword}
										on:keydown={handleKeyPress}
									>
										<span class={passwordType === 'password' ? 'passVicon' : 'passVicon eye-slash'}>
											<img src="/assets/images/icon/icon_60.svg" alt="" />
										</span>
									</span>
								</div>
							</div>
							<div class="col-12">
								<div class="agreement-checkbox d-flex justify-content-between align-items-center">
									<div>
										<input type="checkbox" id="remember" />
										<label for="remember">Keep me logged in</label>
									</div>
									<a href="#!">Forget Password?</a>
								</div>
								<!-- /.agreement-checkbox -->
							</div>
							<div class="col-12">
								<button class="btn-eleven fw-500 tran3s d-block mt-20">Login</button>
							</div>
						</div>
					</form>
					<div class="d-flex align-items-center mt-30 mb-10">
						<div class="line"></div>
						<span class="pe-3 ps-3">OR</span>
						<div class="line"></div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<a
								href="#!"
								class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
							>
								<img src="/assets/images/icon/google.png" alt="" />
								<span class="ps-2">Login with Google</span>
							</a>
						</div>
						<div class="col-md-6">
							<a
								href="#!"
								class="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
							>
								<img src="/assets/images/icon/facebook.png" alt="" />
								<span class="ps-2">Login with Facebook</span>
							</a>
						</div>
					</div>
					<p class="text-center mt-10">
						Don't have an account? <a href="/signup" class="fw-500">Sign up</a>
					</p>
				</div>
				<!-- /.form-wrapper -->
			</div>
			<!-- /.user-data-form -->
		</div>
	</div>
</div>
