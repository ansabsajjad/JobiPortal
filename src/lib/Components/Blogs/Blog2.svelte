<script>
	import { useAnimation } from '$lib/js/animations.js';
</script>

<section class="blog-section-two pt-180 xl-pt-150 lg-pt-100 pb-150 xl-pb-130 lg-pb-80">
	<div class="container">
		<div class="position-relative">
			<div class="title-one text-center mb-30 lg-mb-10">
				<h2 class="fw-600">Our Blog</h2>
			</div>

			<div class="row gx-xxl-5">
				<div class="col-lg-4 col-md-6">
					<article use:useAnimation class="blog-meta-one mt-35 wow fadeInUp">
						<figure class="post-img m0">
							<a href="/blog-details" class="w-100 d-block"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/blog_img_04.jpg"
									alt=""
									class="lazy-img w-100 tran4s"
								/></a
							>
						</figure>
						<div class="post-data mt-30 lg-mt-20">
							<div><a href="/blog-details" class="date text-uppercase">23 Apr, 2022</a></div>
							<a href="/blog-details" class="mt-10 mb-25 lg-mb-20"
								><h4 class="tran3s blog-title">Print, publishing qui visual layout mockups.</h4></a
							>
							<div><a href="/blog-details" class="btn-seven">Read More</a></div>
						</div>
					</article>
					<!-- /.blog-meta-one -->
				</div>
				<div class="col-lg-4 col-md-6">
					<article use:useAnimation class="blog-meta-one mt-35 wow fadeInUp" data-wow-delay="0.1s">
						<figure class="post-img m0">
							<a href="/blog-details" class="w-100 d-block"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/blog_img_05.jpg"
									alt=""
									class="lazy-img w-100 tran4s"
								/></a
							>
						</figure>
						<div class="post-data mt-30 lg-mt-20">
							<div><a href="/blog-details" class="date text-uppercase">14 March, 2022</a></div>
							<a href="/blog-details" class="mt-10 mb-25 lg-mb-20"
								><h4 class="tran3s blog-title">Designer’s checklist for every UX/UI project.</h4></a
							>
							<div><a href="/blog-details" class="btn-seven">Read More</a></div>
						</div>
					</article>
					<!-- /.blog-meta-one -->
				</div>
				<div class="col-lg-4 d-none d-lg-block">
					<article use:useAnimation class="blog-meta-one mt-35 wow fadeInUp" data-wow-delay="0.19s">
						<figure class="post-img m0">
							<a href="/blog-details" class="w-100 d-block"
								><img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/blog/blog_img_06.jpg"
									alt=""
									class="lazy-img w-100 tran4s"
								/></a
							>
						</figure>
						<div class="post-data mt-30 lg-mt-20">
							<div><a href="/blog-details" class="date text-uppercase">07 Feb, 2023</a></div>
							<a href="/blog-details" class="mt-10 mb-25 lg-mb-20"
								><h4 class="tran3s blog-title">Make more productive work flow in few steps.</h4></a
							>
							<div><a href="/blog-details" class="btn-seven">Read More</a></div>
						</div>
					</article>
					<!-- /.blog-meta-one -->
				</div>
			</div>
		</div>
	</div>
</section>
