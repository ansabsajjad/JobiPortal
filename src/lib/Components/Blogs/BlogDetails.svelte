<script>
	let name = '';
	let email = '';
	let comment = '';

	function handleClick(event) {
		event.target.placeholder = ''; // Remove placeholder on click
	}

	function handleBlur(event, originalPlaceholder) {
		if (event.target.value === '') {
			event.target.placeholder = originalPlaceholder; // Restore placeholder if input is empty
		}
	}
</script>

<section class="blog-section pt-100 lg-pt-80">
	<div class="container">
		<div class="border-bottom pb-160 xl-pb-130 lg-pb-80">
			<div class="row">
				<div class="col-lg-8">
					<div class="blog-details-page pe-xxl-5 me-xxl-3">
						<article class="blog-details-meta">
							<div class="blog-pubish-date">
								Digital Marketing . 2 July . By <a href="#!">Rashed Ka</a>
							</div>
							<h2 class="blog-heading">Designer’s checklist for every UX/UI Project.</h2>
							<div class="img-meta mb-15">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/blog_img_32.jpg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<p>
								Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly
								hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu
								fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero
								id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.
							</p>
							<br />
							<p>
								Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris
								nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer.
							</p>
							<div class="img-meta mb-15">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/blog_img_33.jpg"
									alt=""
									class="lazy-img"
								/>
							</div>
							<h5>
								This response is important for our ability to from mistakes but it also gives rise
								to self-criticism imperdiet nulla malesu elit.
							</h5>
							<p class="pt-15">
								One touch of a red-hot stove is usually all we need to avoid that kind of discomfort
								in future The same is true as we experienc the emotional of stress from our
								instances. We are quickly learn to fear and thus automatically. Lorem ipsum dolor
								sit amet.
							</p>
							<div class="quote-text">
								<div class="row">
									<div class="col-xl-10 m-auto">
										<blockquote>
											“Everything is designed. <br />Few things are designed well."
										</blockquote>
										<div class="name">
											<span class="fw-500">Brian Reed, </span><span>front-end developer</span>
										</div>
									</div>
								</div>
							</div>
							<h3>Work Harder & Gain Success</h3>
							<p>
								One touch of a red-hot stove is usually all we need to avoid that kind of discomfort
								in quis elit future. The same Duis aute irure dolor in reprehenderit .
							</p>
							<br />
							<p>
								is true as we experience the emotional sensation of stress from our firs social
								rejec ridicule. We quickly learn to fear and thus automatically. potentially
								stressful situation of wlir ext quiert all kinds, including the most common of all.
							</p>
							<div
								class="bottom-widget border-bottom d-sm-flex align-items-center justify-content-between"
							>
								<ul class="d-flex tags style-none pb-20">
									<li>Tag:</li>
									<li><a href="#!">business,</a></li>
									<li><a href="#!">makreting,</a></li>
									<li><a href="#!">tips</a></li>
								</ul>
								<ul class="d-flex share-icon align-items-center style-none pb-20">
									<li>Share:</li>
									<li><a href="#!"><i class="bi bi-google"></i></a></li>
									<li><a href="#!"><i class="bi bi-twitter"></i></a></li>
									<li><a href="#!"><i class="bi bi-instagram"></i></a></li>
								</ul>
							</div>
						</article>
						<!-- /.blog-details-meta -->
						<div class="blog-comment-area">
							<h3 class="blog-inner-title pb-15">2 Comments</h3>
							<div class="comment d-flex">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/avatar_01.jpg"
									alt=""
									class="lazy-img user-avatar rounded-circle"
								/>
								<div class="comment-text">
									<div class="name fw-500 tx-dark">Al Hasani</div>
									<div class="date">13 June, 2022, 7:30pm</div>
									<p>
										One touch of a red-hot stove is usually all we need to avoid that kind of lorem
										discomfort in future. The same true we experience
									</p>
									<a href="#!" class="reply-btn fw-500 tran3s">Reply</a>
								</div>
								<!-- /.comment-text -->
							</div>
							<!-- /.comment -->
							<div class="comment d-flex">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/avatar_02.jpg"
									alt=""
									class="lazy-img user-avatar rounded-circle"
								/>
								<div class="comment-text">
									<div class="name fw-500 tx-dark">Rashed ka.</div>
									<div class="date">13 June, 2022, 7:30pm</div>
									<p>
										One touch of a red-hot stove is usually all we need to avoid that kind of lorem
										discomfort in future. The same true we experience
									</p>
									<a href="#!" class="reply-btn fw-500 tran3s">Reply</a>
								</div>
								<!-- /.comment-text -->
							</div>
							<!-- /.comment -->
						</div>
						<!-- /.blog-comment-area -->
						<div class="blog-comment-form">
							<h3 class="blog-inner-title">Leave A Comment</h3>
							<p>
								<a href="/signin" class="text-decoration-underline">Sign</a> in to post your comment
								or signup if you don't have any account.
							</p>
							<form action="#" class="mt-30">
								<div class="input-wrapper mb-35">
									<label for="name">Name*</label>
									<input
										id="name"
										type="text"
										bind:value={name}
										placeholder="Rashed Kabir"
										on:click={handleClick}
										on:blur={(event) => handleBlur(event, 'Rashed Kabir')}
									/>
								</div>
								<!-- /.input-wrapper -->
								<div class="input-wrapper mb-40">
									<label for="email">Email*</label>
									<input
										id="email"
										type="email"
										bind:value={email}
										placeholder="rshdkabir@gmail.com"
										on:click={handleClick}
										on:blur={(event) => handleBlur(event, 'rshdkabir@gmail.com')}
									/>
								</div>
								<!-- /.input-wrapper -->
								<div class="input-wrapper mb-30">
									<textarea
										id="comment"
										bind:value={comment}
										placeholder="Your Comment"
										on:click={handleClick}
										on:blur={(event) => handleBlur(event, 'Your Comment')}
									></textarea>
								</div>
								<!-- /.input-wrapper -->
								<button class="btn-ten fw-500 text-white text-center pe-5 ps-5 tran3s">
									Post Comment
								</button>
							</form>
						</div>
						<!-- /.blog-comment-form -->
					</div>
				</div>

				<div class="col-lg-4">
					<div class="blog-sidebar ps-xl-4 md-mt-60">
						<form action="#" class="search-form position-relative mb-50 lg-mb-40">
							<input type="text" placeholder="Search..." />
							<button><i class="bi bi-search"></i></button>
						</form>

						<div class="category-list mb-60 lg-mb-40">
							<h3 class="sidebar-title">Category</h3>
							<ul class="style-none">
								<li><a href="#!">Education (3)</a></li>
								<li><a href="#!">Information (4)</a></li>
								<li><a href="#!">Interview (2)</a></li>
								<li><a href="#!">Speaking (8)</a></li>
								<li><a href="#!">Skill (5)</a></li>
								<li><a href="#!">Developer (3)</a></li>
								<li><a href="#!">Account (7)</a></li>
							</ul>
						</div>
						<div class="sidebar-recent-news mb-60 lg-mb-40">
							<h4 class="sidebar-title">Recent News</h4>
							<div class="news-block d-flex align-items-center pt-20 pb-20 border-top">
								<div>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_15.jpg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="post ps-4">
									<h4 class="mb-5">
										<a href="/blog-details" class="title tran3s"
											>10 days quick challange forboost visitors.</a
										>
									</h4>
									<div class="date">23 July, 2022</div>
								</div>
							</div>
							<div class="news-block d-flex align-items-center pt-20 pb-20 border-top">
								<div>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_16.jpg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="post ps-4">
									<h4 class="mb-5">
										<a href="/blog-details" class="title tran3s">Easy way to boost your business.</a
										>
									</h4>
									<div class="date">23 July, 2022</div>
								</div>
							</div>
							<div
								class="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
							>
								<div>
									<img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_17.jpg"
										alt=""
										class="lazy-img"
									/>
								</div>
								<div class="post ps-4">
									<h4 class="mb-5">
										<a href="/blog-details" class="title tran3s"
											>Introducing new tools for your design.</a
										>
									</h4>
									<div class="date">23 July, 2022</div>
								</div>
							</div>
						</div>
						<div class="sidebar-keyword">
							<h4 class="sidebar-title">Keywords</h4>
							<ul class="style-none d-flex flex-wrap">
								<li><a href="#!">Ideas</a></li>
								<li><a href="#!">Education</a></li>
								<li><a href="#!">Design</a></li>
								<li><a href="#!">Development</a></li>
								<li><a href="#!">Branding</a></li>
							</ul>
						</div>
					</div>
					<!-- /.blog-sidebar -->
				</div>
			</div>
		</div>
	</div>
</section>
