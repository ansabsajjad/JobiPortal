<script>
	export let addFooterClasses = '';
	export let addTitleClasses = '';
</script>

<div class="footer-one {addFooterClasses}">
	<div class="container">
		<div class="inner-wrapper">
			<div class="row">
				<div class="col-lg-2 col-md-3 footer-intro mb-15">
					<slot name="logo">
						<div class="logo mb-15">
							<a href="/index" class="d-flex align-items-center">
								<img src="/assets/images/logo/logo_03.png" alt="" />
							</a>
						</div>
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/shape/shape_28.svg"
							alt=""
							class="lazy-img mt-80 sm-mt-30 sm-mb-20"
						/>
					</slot>
					<!-- logo -->
				</div>
				<div class="col-lg-2 col-md-3 col-sm-4 mb-20">
					<h5 class="footer-title {addTitleClasses}">Services​</h5>
					<ul class="footer-nav-link style-none">
						<li><a href="/job-grid-v2">Browse Jobs</a></li>
						<li><a href="/company-v1">Companies</a></li>
						<li><a href="/candidates-v1">Candidates</a></li>
						<li><a href="/pricing">Pricing</a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-4 mb-20">
					<h5 class="footer-title {addTitleClasses}">Company</h5>
					<ul class="footer-nav-link style-none">
						<li><a href="/about-us">About us</a></li>
						<li><a href="/blog-v2">Blogs</a></li>
						<li><a href="/faq">FAQ’s</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-4 mb-20">
					<h5 class="footer-title {addTitleClasses}">Support</h5>
					<ul class="footer-nav-link style-none">
						<li><a href="/contact">Terms of use</a></li>
						<li><a href="/contact">Terms & conditions</a></li>
						<li><a href="/contact">Privacy</a></li>
						<li><a href="/contact">Cookie policy</a></li>
					</ul>
				</div>
				<slot name="newsletter">
					<div class="col-lg-4 mb-20 footer-newsletter">
						<h5 class="footer-title {addTitleClasses}">Newsletter</h5>
						<p class={addTitleClasses}>Join & get important new regularly</p>
						<form action="#" class="d-flex">
							<input type="email" placeholder="Enter your email*" />
							<button>Send</button>
						</form>
						<p class="note">We only send interesting and relevant emails.</p>
					</div>
				</slot>
			</div>
		</div>
		<!-- /.inner-wrapper -->
	</div>
	<slot name="bottom-footer">
		<div class="bottom-footer">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-4 order-lg-3 mb-15">
						<ul
							class="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon"
						>
							<li><a href="#!"><i class="bi bi-whatsapp"></i></a></li>
							<li><a href="#!"><i class="bi bi-dribbble"></i></a></li>
							<li><a href="#!"><i class="bi bi-google"></i></a></li>
							<li><a href="#!"><i class="bi bi-instagram"></i></a></li>
						</ul>
					</div>
					<div class="col-lg-4 order-lg-1 mb-15">
						<ul
							class="d-flex style-none bottom-nav justify-content-center justify-content-lg-start"
						>
							<li><a href="/contact">Privacy & Terms.</a></li>
							<li><a href="/contact"> Contact Us</a></li>
						</ul>
					</div>
					<div class="col-lg-4 order-lg-2">
						<p class="text-center mb-15">Copyright @2023 jobi inc.</p>
					</div>
				</div>
			</div>
		</div>
	</slot>
</div>
<!-- /.footer-one -->
