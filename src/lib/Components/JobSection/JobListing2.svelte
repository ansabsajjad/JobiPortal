<script>
	import { onMount } from 'svelte';
	import Isotope from 'isotope-layout?client';

	let isotopeInstance;
	setTimeout(() => {
		isotopeInstance.layout();
	}, 50);

	onMount(() => {
		isotopeInstance = new Isotope('#isotop-gallery-wrapper', {
			itemSelector: '.isotop-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});

		// Event listener for filtering
		const menuWrapper = document.querySelector('.isotop-menu-wrapper');
		menuWrapper.addEventListener('click', (event) => {
			if (event.target.tagName === 'LI') {
				const filterValue = event.target.getAttribute('data-filter');
				isotopeInstance.arrange({ filter: filterValue });

				// Change is-checked class
				menuWrapper.querySelector('.is-checked').classList.remove('is-checked');
				event.target.classList.add('is-checked');
			}
		});
	});
</script>

<section
	class="job-listing-two pt-120 xl-pt-100 md-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-110 xl-mt-90 md-mt-50"
>
	<div class="container">
		<div class="row align-items-center">
			<div class="col-xl-6 col-lg-5">
				<div class="title-one text-center text-lg-start md-mb-20">
					<h2 class="main-font">New job listing</h2>
				</div>
			</div>
			<div class="col-xl-6 col-lg-7">
				<ul
					class="style-none d-flex justify-content-center justify-content-lg-end flex-wrap isotop-menu-wrapper g-control-nav"
				>
					<li class="is-checked" data-filter="*">All Categories</li>
					<li data-filter=".design">Design</li>
					<li data-filter=".dev">Developer</li>
					<li data-filter=".marketing">Marketing</li>
					<li data-filter=".business">Business</li>
				</ul>
			</div>
		</div>

		<div id="isotop-gallery-wrapper" class="grid-3column pt-55 lg-pt-20">
			<div class="grid-sizer"></div>
			<div class="isotop-item dev">
				<div class="job-list-two mt-40 lg-mt-20 position-relative">
					<a href="/job-details-v2" class="logo"
						><img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_22.png"
							alt=""
							class="lazy-img m-auto"
						/></a
					>
					<a
						href="/job-details-v2"
						class="save-btn text-center rounded-circle tran3s"
						title="Save Job"><i class="bi bi-bookmark-dash"></i></a
					>
					<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
					<div>
						<a href="/job-details-v2" class="title fw-500 tran3s"
							>Lead designer & expert in maya 3D</a
						>
					</div>
					<div class="job-date">18 Jul 2018</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="job-location"><a href="/job-details-v2">USA, California</a></div>
						<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
					</div>
				</div>
				<!-- /.job-list-two -->
			</div>
			<!-- /.item -->
			<div class="isotop-item design marketing">
				<div class="job-list-two mt-40 lg-mt-20 position-relative">
					<a href="/job-details-v2" class="logo"
						><img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_23.png"
							alt=""
							class="lazy-img m-auto"
						/></a
					>
					<a
						href="/job-details-v2"
						class="save-btn text-center rounded-circle tran3s"
						title="Save Job"><i class="bi bi-bookmark-dash"></i></a
					>
					<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
					<div>
						<a href="/job-details-v2" class="title fw-500 tran3s"
							>Developer & expert in c++ & java.</a
						>
					</div>
					<div class="job-date">18 Jul 2018</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="job-location"><a href="/job-details-v2">USA, Alaska</a></div>
						<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
					</div>
				</div>
				<!-- /.job-list-two -->
			</div>
			<!-- /.item -->
			<div class="isotop-item marketing dev">
				<div class="job-list-two mt-40 lg-mt-20 position-relative">
					<a href="/job-details-v2" class="logo"
						><img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_24.png"
							alt=""
							class="lazy-img m-auto"
						/></a
					>
					<a
						href="/job-details-v2"
						class="save-btn text-center rounded-circle tran3s"
						title="Save Job"><i class="bi bi-bookmark-dash"></i></a
					>
					<div><a href="/job-details-v2" class="job-duration fw-500 part-time">Part-time</a></div>
					<div>
						<a href="/job-details-v2" class="title fw-500 tran3s"
							>Marketing specialist in SEO & SMM</a
						>
					</div>
					<div class="job-date">18 Jul 2018</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="job-location"><a href="/job-details-v2">AUS, Sydney</a></div>
						<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
					</div>
				</div>
				<!-- /.job-list-two -->
			</div>
			<!-- /.item -->
			<div class="isotop-item business dev">
				<div class="job-list-two mt-40 lg-mt-20 position-relative">
					<a href="/job-details-v2" class="logo"
						><img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_25.png"
							alt=""
							class="lazy-img m-auto"
						/></a
					>
					<a
						href="/job-details-v2"
						class="save-btn text-center rounded-circle tran3s"
						title="Save Job"><i class="bi bi-bookmark-dash"></i></a
					>
					<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
					<div>
						<a href="/job-details-v2" class="title fw-500 tran3s"
							>Lead designer & expert in maya 3D
						</a>
					</div>
					<div class="job-date">18 Jul 2018</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="job-location"><a href="/job-details-v2">UAE, Dubai</a></div>
						<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
					</div>
				</div>
				<!-- /.job-list-two -->
			</div>
			<!-- /.item -->
			<div class="isotop-item marketing">
				<div class="job-list-two mt-40 lg-mt-20 position-relative">
					<a href="/job-details-v2" class="logo"
						><img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/logo/media_26.png"
							alt=""
							class="lazy-img m-auto"
						/></a
					>
					<a
						href="/job-details-v2"
						class="save-btn text-center rounded-circle tran3s"
						title="Save Job"><i class="bi bi-bookmark-dash"></i></a
					>
					<div><a href="/job-details-v2" class="job-duration fw-500">Fulltime</a></div>
					<div>
						<a href="/job-details-v2" class="title fw-500 tran3s"
							>Developer & expert in c++ & java.</a
						>
					</div>
					<div class="job-date">18 Jul 2018</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="job-location"><a href="/job-details-v2">UK, London</a></div>
						<a href="/job-details-v2" class="apply-btn text-center tran3s">APPLY</a>
					</div>
				</div>
				<!-- /.job-list-two -->
			</div>
			<!-- /.item -->
			<div class="isotop-item">
				<div class="card-style-four bg-color tran3s w-100 mt-40 lg-mt-20">
					<a href="#!" class="d-block">
						<div class="title text-white">13k+</div>
						<div class="text-lg text-white">Job already posted</div>
						<div
							class="d-flex align-items-center justify-content-end mt-140 lg-mt-120 xs-mt-60 mb-30"
						>
							<img
								src="/assets/images/lazy.svg"
								data-src="/assets/images/shape/shape_22.svg"
								alt=""
								class="lazy-img"
							/>
							<div class="icon tran3s d-flex align-items-center justify-content-center ms-5">
								<img
									src="/assets/images/lazy.svg"
									data-src="/assets/images/icon/icon_19.svg"
									alt=""
									class="lazy-img"
								/>
							</div>
						</div>
					</a>
				</div>
				<!-- /.card-style-four -->
			</div>
			<!-- /.item -->
		</div>
	</div>
</section>
