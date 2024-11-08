<script>
	import { useAnimation } from '$lib/js/animations.js';
	export let addSectionClasses = '';
</script>

<section class="blog-section-one {addSectionClasses}">
	<slot name="container">
		<div class="container">
			<div class="position-relative">
				<div class="title-one mb-30 lg-mb-10">
					<h2>Jobi Guides</h2>
				</div>

				<div class="row gx-xxl-5">
					<div class="col-lg-4 col-md-6">
						<article use:useAnimation class="blog-meta-one mt-35 wow fadeInUp">
							<figure class="post-img m0">
								<a href="/blog-details" class="w-100 d-block"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_01.jpg"
										alt=""
										class="lazy-img w-100 tran4s"
									/></a
								>
							</figure>
							<div class="post-data mt-30 lg-mt-20">
								<ul class="tags style-none d-flex">
									<li><a href="#!">Developer</a></li>
									<li><a href="#!">Code</a></li>
								</ul>
								<a href="/blog-details" class="mt-10 mb-10"
									><h4 class="tran3s blog-title">
										Print, publishing qui visual layout mockups.
									</h4></a
								>
								<div class="author">By <a href="#!" class="text-dark fw-500">Rashed Kabir</a></div>
							</div>
						</article>
						<!-- /.blog-meta-one -->
					</div>
					<div class="col-lg-4 col-md-6">
						<article
							use:useAnimation
							class="blog-meta-one mt-35 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<figure class="post-img m0">
								<a href="/blog-details" class="w-100 d-block"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_02.jpg"
										alt=""
										class="lazy-img w-100 tran4s"
									/></a
								>
							</figure>
							<div class="post-data mt-30 lg-mt-20">
								<ul class="tags style-none d-flex">
									<li><a href="#!">Design</a></li>
									<li><a href="#!">Art</a></li>
								</ul>
								<a href="/blog-details" class="mt-10 mb-10"
									><h4 class="tran3s blog-title">
										Designer’s checklist for every UX/UI project.
									</h4></a
								>
								<div class="author">By <a href="#!" class="text-dark fw-500">Julie Margot</a></div>
							</div>
						</article>
						<!-- /.blog-meta-one -->
					</div>
					<div class="col-lg-4 col-md-6 d-none d-lg-block">
						<article
							use:useAnimation
							class="blog-meta-one mt-35 wow fadeInUp"
							data-wow-delay="0.19s"
						>
							<figure class="post-img m0">
								<a href="/blog-details" class="w-100 d-block"
									><img
										src="/assets/images/lazy.svg"
										data-src="/assets/images/blog/blog_img_03.jpg"
										alt=""
										class="lazy-img w-100 tran4s"
									/></a
								>
							</figure>
							<div class="post-data mt-30 lg-mt-20">
								<ul class="tags style-none d-flex">
									<li><a href="#!">Solution</a></li>
									<li><a href="#!">Work</a></li>
								</ul>
								<a href="/blog-details" class="mt-10 mb-10"
									><h4 class="tran3s blog-title">
										Make more productive work flow in few steps.
									</h4></a
								>
								<div class="author">
									By <a href="#!" class="text-dark fw-500">Jubayer Al Hasan</a>
								</div>
							</div>
						</article>
						<!-- /.blog-meta-one -->
					</div>
				</div>

				<div class="text-center explore-btn sm-mt-30">
					<a href="/blog-v1" class="btn-one">Explore More</a>
				</div>
			</div>
		</div>
	</slot>
</section>
