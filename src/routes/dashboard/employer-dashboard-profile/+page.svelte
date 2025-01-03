<script>
	import { niceSelect } from '$lib/js/custom.js';
	import LazyImageLoader from '$lib/LazyImageLoader.svelte';
	import Preloader from '$lib/Preloader.svelte';
	import { onMount } from 'svelte';
	import BackToTop from '../../../lib/BackToTop.svelte';
	import DashboardHeader from '../../../lib/Components/Dashboard/DashboardHeader.svelte';
	import EmployerDashboardAside from '../../../lib/Components/Dashboard/EmployerDashboardAside.svelte';
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
		<EmployerDashboardAside activeMenu={'MyProfile'} />
		<div class="dashboard-body">
			<div class="position-relative">
				<DashboardHeader />
				<!-- Your dashboard content goes here -->
				<h2 class="main-title">Profile</h2>
				<div class="bg-white card-box border-20">
					<div class="user-avatar-setting d-flex align-items-center mb-30">
						<img
							src="/assets/images/lazy.svg"
							data-src="/assets/images/dashboard/avatar_04.jpg"
							alt=""
							class="lazy-img user-img"
						/>
						<div class="upload-btn position-relative tran3s ms-4 me-3">
							Upload new photo
							<input type="file" id="uploadImg" name="uploadImg" placeholder="" />
						</div>
						<button class="delete-btn tran3s">Delete</button>
					</div>
					<!-- /.user-avatar-setting -->
					<div class="dash-input-wrapper mb-30">
						<label for="">Company Name*</label>
						<input type="text" placeholder="Enter Company Name" />
					</div>
					<!-- /.dash-input-wrapper -->
					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Email*</label>
								<input type="email" placeholder="Enter Company Email" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Website*</label>
								<input type="text" placeholder="Enter Company Website" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Date of Inception*</label>
								<input type="date" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
									<label for="">Company Size*</label>
									<select class="nice-select">
										<option value="0-1">0 - 1 - Employees</option>
										<option value="2-10">2 - 10 Employees</option>
										<option value="11-50">11 - 50 Employees</option>
										<option value="51-200">51 - 200 Employees</option>
										<option value="201-500">201 - 500 Employees</option>
										<option value="501-1000">501 -1000 Employees</option>
										<option value="1001-5000">1001 - 5000 Employees</option>
										<option value="5001-10000">5001 - 10000 Employees</option>
										<option value="10001-15000">10001 - 15000 employees</option>
										<option value="15001-20000">15001 - 20000 employees</option>
										<option value="20000+">20000+ employees</option>

							
									</select>
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<!-- /.dash-input-wrapper -->
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Phone Number*</label>
								<input type="tel" placeholder="+92 --- ---- ---" />
							</div>
							<div class="dash-input-wrapper mb-30">
								<label for="">No. of Offices/Branches</label>
								<input type="number" placeholder="0" />
							</div>

							<div class="dash-input-wrapper mb-30">
								<label for="">Services/Products</label>
								<input type="tel" placeholder="Enter Services/Products" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Industry*</label>
								<select class="nice-select">
									<option value="Select the Industry" selected hidden>Select the Industry</option>
									<option value="Accounting/Taxation">Accounting/Taxation</option>
									<option value="Advertising/Public Relations">Advertising/Public Relations</option>
									<option value="Aerospace">Aerospace</option>
									<option value="Agriculture/Fertilizer/Pesticide">Agriculture/Fertilizer/Pesticide</option>
									<option value="Apparel/Clothing">Apparel/Clothing</option>
									<option value="Architecture/Interior Design">Architecture/Interior Design</option>
									<option value="Arts/Entertainment">Arts/Entertainment</option>
									<option value="Attorney/Law Firms/Legal">Attorney/Law Firms/Legal</option>
									<option value="Auto Dealer">Auto Dealer</option>
									<option value="Auto Manufacturer">Auto Manufacturer</option>
									<option value="Auto Mobile">Auto Mobile</option>
									<option value="Aviation/Airline">Aviation/Airline</option>
									<option value="Banking/Financial Services">Banking/Financial Services</option>
									<option value="Books, Magazines & Newspapers">Books, Magazines & Newspapers</option>
									<option value="Broadcasters, Radio/TV">Broadcasters, Radio/TV</option>
									<option value="Builders/General Contractors">Builders/General Contractors</option>
									<option value="Building Materials & Equipment">Building Materials & Equipment</option>
									<option value="Business Development">Business Development</option>
									<option value="Business Process Outsourcing (BPO)">Business Process Outsourcing (BPO)</option>
									<option value="Cable & Satellite TV Production & Distribution">Cable & Satellite TV Production & Distribution</option>
									<option value="Call Center">Call Center</option>
									<option value="Chemicals">Chemicals</option>
									<option value="Civil Servants/Public Officials">Civil Servants/Public Officials</option>
									<option value="Clergy & Religious Organizations">Clergy & Religious Organizations</option>
									<option value="Computer">Computer</option>
									<option value="Construction/Cement/Metals">Construction/Cement/Metals</option>
									<option value="Consultancy">Consultancy</option>
									<option value="Courier/Logistics">Courier/Logistics</option>
									<option value="Cruise Ships & Lines">Cruise Ships & Lines</option>
									<option value="Culture/Performance Art">Culture/Performance Art</option>
									<option value="Defense">Defense</option>
									<option value="E-Commerce/E-Business">E-Commerce/E-Business</option>
									<option value="Education/Training">Education/Training</option>
									<option value="Electronics">Electronics</option>
									<option value="Engineering">Engineering</option>
									<option value="Environment">Environment</option>
									<option value="Event Management">Event Management</option>
									<option value="Farming">Farming</option>
									<option value="Fashion">Fashion</option>
									<option value="Fast Moving Consumer Goods (FMCG)">Fast Moving Consumer Goods (FMCG)</option>
									<option value="Fishing">Fishing</option>
									<option value="Food & Beverages">Food & Beverages</option>
									<option value="Food Processing & Sales">Food Processing & Sales</option>
									<option value="Forestry/Forest Products">Forestry/Forest Products</option>
									<option value="Garbage Collection/Waste Management">Garbage Collection/Waste Management</option>
									<option value="Gems & Jewelery">Gems & Jewelery</option>
									<option value="Health & Fitness">Health & Fitness</option>
									<option value="Healthcare/Hospital/Medical">Healthcare/Hospital/Medical</option>
									<option value="Hotel/Motel/Restaurants">Hotel/Motel/Restaurants</option>
									<option value="Importers/Distributors/Exporters">Importers/Distributors/Exporters</option>
									<option value="Information Technology">Information Technology</option>
									<option value="Insurance/Takaful">Insurance/Takaful</option>
									<option value="Investments & Savings">Investments & Savings</option>
									<option value="Leisure">Leisure</option>
									<option value="Livestock">Livestock</option>
									<option value="Manufacturing">Manufacturing</option>
									<option value="Medical Supplies">Medical Supplies</option>
									<option value="Media/Communications">Media/Communications</option>
									<option value="Mining/Petroleum">Mining/Petroleum</option>
									<option value="Music & Production">Music & Production</option>
									<option value="NGO/Foundations/Non Profits/Social Services">NGO/Foundations/Non Profits/Social Services</option>
									<option value="Oil & Gas/Natural Resources">Oil & Gas/Natural Resources</option>
									<option value="Packaging">Packaging</option>
									<option value="Personal Care and Services">Personal Care and Services</option>
									<option value="Pharmaceuticals/Clinical Research">Pharmaceuticals/Clinical Research</option>
									<option value="Poultry/Meat">Poultry/Meat</option>
									<option value="Power/Energy">Power/Energy</option>
									<option value="Project Management">Project Management</option>
									<option value="Publishing/Printing">Publishing/Printing</option>
									<option value="Real Estate/Property">Real Estate/Property</option>
									<option value="Recruitment/Employment Firms">Recruitment/Employment Firms</option>
									<option value="Retail/Wholesale">Retail/Wholesale</option>
									<option value="Security/Law Enforcement">Security/Law Enforcement</option>
									<option value="Shipping/Marine/Ports">Shipping/Marine/Ports</option>
									<option value="Showbiz">Showbiz</option>
									<option value="Sport">Sport</option>
									<option value="Telecommunication/ISP">Telecommunication/ISP</option>
									<option value="Textiles/Garments">Textiles/Garments</option>
									<option value="Tiles & Ceramics">Tiles & Ceramics</option>
									<option value="Timber, Logging & Paper Mills">Timber, Logging & Paper Mills</option>
									<option value="Tobacco">Tobacco</option>
									<option value="Travel/Tourism/Transportation">Travel/Tourism/Transportation</option>
									<option value="Warehousing">Warehousing</option>
								</select>
							</div>

							<div class="dash-input-wrapper mb-30">
								<label for="">Workplace Module*</label>
								<select class="nice-select">
									<option value="" selected hidden>Workplace Module</option>
									<option value="On-site">On-site</option>
									<option value="Hybrid">Hybrid</option>
									<option value="Remote">Remote</option>
								</select>
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
					</div>
					<div class="dash-input-wrapper">
						<label for="">About Company*</label>
						<textarea class="size-lg" placeholder="Write something interesting about you...." maxlength="500"
						></textarea>
						<div class="alert-text">Brief description for your company. (Max 500 characters)</div>
					</div>
					<!-- /.dash-input-wrapper -->
				</div>
				<!-- /.card-box -->

				<div class="bg-white card-box border-20 mt-40">
					<h4 class="dash-title-three">Social Media</h4>

					<div class="dash-input-wrapper mb-20">
						<label for="">Network 1</label>
						<input type="text" placeholder="https://www.facebook.com/zubayer0145" />
					</div>
					<!-- /.dash-input-wrapper -->
					<div class="dash-input-wrapper mb-20">
						<label for="">Network 2</label>
						<input type="text" placeholder="https://twitter.com/FIFAcom" />
					</div>
					<!-- /.dash-input-wrapper -->
					<a href="#!" class="dash-btn-one"><i class="bi bi-plus"></i> Add more link</a>
				</div>
				<!-- /.card-box -->

				<div class="bg-white card-box border-20 mt-40">
					<h4 class="dash-title-three">Address & Location</h4>
					<div class="row">
						<div class="col-12">
							<div class="dash-input-wrapper mb-25">
								<label for="">Office Address*</label>
								<input type="text" placeholder="Enter Company Address" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">Country*</label>
								<select class="nice-select">
									<option>Afghanistan</option>
									<option>Albania</option>
									<option>Algeria</option>
									<option>Andorra</option>
									<option>Angola</option>
									<option>Antigua and Barbuda</option>
									<option>Argentina</option>
									<option>Armenia</option>
									<option>Australia</option>
									
								</select>
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">City*</label>
								<select class="nice-select">
									<option>Dhaka</option>
									<option>Tokyo</option>
									<option>Delhi</option>
									<option>Shanghai</option>
									<option>Mumbai</option>
									<option>Bangalore</option>
								</select>
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">State*</label>
								<select class="nice-select">
									<option>Dhaka</option>
									<option>Tokyo</option>
									<option>Delhi</option>
									<option>Shanghai</option>
									<option>Mumbai</option>
									<option>Bangalore</option>
								</select>
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">Zip Code*</label>
								<input type="number" placeholder="1708" />
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-12">
							<div class="dash-input-wrapper mb-25">
								<label for="">Map Location*</label>
								<div class="position-relative">
									<input type="text" placeholder="XC23+6XC, Moiran, N105" />
									<button class="location-pin tran3s"
										><img
											src="/assets/images/lazy.svg"
											data-src="/assets/images/dashboard/icon/icon_16.svg"
											alt=""
											class="lazy-img m-auto"
										/></button
									>
								</div>
								<div class="map-frame mt-30">
									<div class="gmap_canvas h-100 w-100">
										<iframe
											title=""
											class="gmap_iframe h-100 w-100"
											src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
										></iframe>
									</div>
								</div>
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
					</div>
				</div>
				<!-- /.card-box -->

				<div class="bg-white card-box border-20 mt-40">
					<h4 class="dash-title-three">Members</h4>

					<div class="dash-input-wrapper">
						<label for="">Add & Remove Member</label>
					</div>

					<div class="accordion dash-accordion-one" id="accordionOne">
						<div class="accordion-item">
							<div class="accordion-header" id="headingOne">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
								>
									Add Member 1
								</button>
							</div>
							<div
								id="collapseOne"
								class="accordion-collapse collapse"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionOne"
							>
								<div class="accordion-body">
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Name*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="text" placeholder="Product Designer (Google)" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Designation*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="text" placeholder="Account Manager" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Email*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="email" placeholder="newmmwber@gmail.com" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>

									<div class="d-flex justify-content-end mb-20">
										<a href="#!" class="dash-btn-one">Remove</a>
									</div>
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<div class="accordion-header" id="headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Add Member 2
								</button>
							</div>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse show"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionOne"
							>
								<div class="accordion-body">
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Name*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="text" placeholder="Product Designer (Google)" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Designation*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="text" placeholder="Account Manager" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>
									<div class="row">
										<div class="col-lg-2">
											<div class="dash-input-wrapper mb-30 md-mb-10">
												<label for="">Email*</label>
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
										<div class="col-lg-10">
											<div class="dash-input-wrapper mb-30">
												<input type="email" placeholder="newmmwber@gmail.com" />
											</div>
											<!-- /.dash-input-wrapper -->
										</div>
									</div>

									<div class="d-flex justify-content-end mb-20">
										<a href="#!" class="dash-btn-one">Remove</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /.dash-accordion-one -->
					<a href="#!" class="dash-btn-one"><i class="bi bi-plus"></i> Add Another Member</a>
				</div>
				<!-- /.card-box -->

				<div class="button-group d-inline-flex align-items-center mt-30">
					<a href="#!" class="dash-btn-two tran3s me-3">Save</a>
					<a href="#!" class="dash-cancel-btn tran3s">Cancel</a>
				</div>
			</div>
		</div>
		<DeleteModel />
		<BackToTop />
	{/if}
</div>
