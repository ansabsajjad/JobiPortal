<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap-validator/js/validator.js?client');
		if (window.$?.fn?.validator) {
			window.$('#contact-form').validator();
			// when the form is submitted
			window.$('#contact-form').on('submit', function (e) {
				// if the validator does not prevent form submit
				if (!e.isDefaultPrevented()) {
					var url = 'inc/contact.php';

					// POST values in the background the the script URL
					window.$.ajax({
						type: 'POST',
						url: url,
						data: window.$(this).serialize(),
						success: function (data) {
							// data = JSON object that contact.php returns

							// we recieve the type of the message: success x danger and apply it to the
							var messageAlert = 'alert-' + data.type;
							var messageText = data.message;

							// let's compose Bootstrap alert box HTML
							var alertBox =
								'<div class="alert ' +
								messageAlert +
								' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
								messageText +
								'</div>';

							// If we have messageAlert and messageText
							if (messageAlert && messageText) {
								// inject the alert to .messages div in our form
								window.$('#contact-form').find('.messages').html(alertBox);
								// empty the form
								window.$('#contact-form')[0].reset();
							}
						}
					});
					return false;
				}
			});
		}
	});
</script>

<section class="contact-us-section pt-100 lg-pt-80">
	<div class="container">
		<div class="border-bottom pb-150 lg-pb-80">
			<div class="title-one text-center mb-70 lg-mb-40">
				<h2>Get in touch</h2>
			</div>
			<div class="row">
				<div class="col-xl-10 m-auto">
					<div class="row">
						<div class="col-md-4">
							<div class="address-block-one text-center mb-40 wow fadeInUp">
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img src="/assets/images/icon/icon_57.svg" alt="" />
								</div>
								<h5 class="title">Our Address</h5>
								<p>1012 Pebda Parkway, Mirpur 2 <br />Dhaka, Bangladesh</p>
							</div>
							<!-- /.address-block-one -->
						</div>
						<div class="col-md-4">
							<div class="address-block-one text-center mb-40 wow fadeInUp">
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img src="/assets/images/icon/icon_58.svg" alt="" />
								</div>
								<h5 class="title">Contact Info</h5>
								<p>
									Open a chat or give us call at <br /><a href="tel:310.841.5500" class="call"
										>310.841.5500</a
									>
								</p>
							</div>
							<!-- /.address-block-one -->
						</div>
						<div class="col-md-4">
							<div class="address-block-one text-center mb-40 wow fadeInUp">
								<div
									class="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
								>
									<img src="/assets/images/icon/icon_59.svg" alt="" />
								</div>
								<h5 class="title">Live Support</h5>
								<p>
									live chat service <br /><a href="#!" class="webaddress">www.jobilivechat.com</a>
								</p>
							</div>
							<!-- /.address-block-one -->
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-xl-9 m-auto">
					<div class="form-style-one mt-85 lg-mt-50 wow fadeInUp">
						<form id="contact-form" data-toggle="validator">
							<div class="messages"></div>
							<div class="row controls">
								<div class="col-sm-6">
									<div class="input-group-meta form-group mb-30">
										<label for="">Name*</label>
										<input
											type="text"
											placeholder="Your Name*"
											name="name"
											required="required"
											data-error="Name is required."
										/>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="input-group-meta form-group mb-30">
										<label for="">Email*</label>
										<input
											type="email"
											placeholder="Email Address*"
											name="email"
											required="required"
											data-error="Valid email is required."
										/>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-12">
									<div class="input-group-meta form-group mb-35">
										<label for="">Subject (optional)</label>
										<input
											type="text"
											placeholder="Write about the subject here.."
											name="subject"
										/>
									</div>
								</div>
								<div class="col-12">
									<div class="input-group-meta form-group mb-35">
										<textarea
											placeholder="Your message*"
											name="message"
											required="required"
											data-error="Please,leave us a message."
										></textarea>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-12">
									<button class="btn-eleven fw-500 tran3s d-block">Send Message</button>
								</div>
							</div>
						</form>
					</div>
					<!-- /.form-style-one -->
				</div>
			</div>
		</div>
	</div>
</section>
