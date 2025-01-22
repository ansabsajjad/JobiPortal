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
	let formErrors = {};
	let formData = {
		companyName: '',
		email: '',
		website: '',
		dateOfInception: '',
		companySize: '',
		phoneNumber: '',
		industry: '',
		workplaceModule: '',
		aboutCompany: '',
		// Account holder info
		firstName: '',
		lastName: '',
		designation: '',
		department: '',
		officialEmail: '',
		officialMobile: '',
		// Address info
		officeAddress: '',
		country: '',
		city: '',
		state: '',
		zipCode: '',
		mapLocation: ''
	};

	const validateForm = () => {
		formErrors = {};
		let isValid = true;

		// Company Details
		if (!formData.companyName) {
			formErrors.companyName = 'Company Name is required';
			isValid = false;
		}
		if (!formData.email) {
			formErrors.email = 'Email is required';
			isValid = false;
		}
		if (!formData.website) {
			formErrors.website = 'Website is required';
			isValid = false;
		}
		if (!formData.dateOfInception) {
			formErrors.dateOfInception = 'Date of Inception is required';
			isValid = false;
		}
		if (!formData.companySize) {
			formErrors.companySize = 'Company Size is required';
			isValid = false;
		}
		if (!formData.phoneNumber) {
			formErrors.phoneNumber = 'Phone Number is required';
			isValid = false;
		}
		if (!formData.industry) {
			formErrors.industry = 'Industry is required';
			isValid = false;
		}
		if (!formData.workplaceModule) {
			formErrors.workplaceModule = 'Workplace Module is required';
			isValid = false;
		}
		if (!formData.aboutCompany) {
			formErrors.aboutCompany = 'About Company is required';
			isValid = false;
		}

		// Account Holder Info
		if (!formData.firstName) {
			formErrors.firstName = 'First Name is required';
			isValid = false;
		}
		if (!formData.lastName) {
			formErrors.lastName = 'Last Name is required';
			isValid = false;
		}
		if (!formData.designation) {
			formErrors.designation = 'Designation is required';
			isValid = false;
		}
		if (!formData.department) {
			formErrors.department = 'Department is required';
			isValid = false;
		}
		if (!formData.officialEmail) {
			formErrors.officialEmail = 'Official Email is required';
			isValid = false;
		}
		if (!formData.officialMobile) {
			formErrors.officialMobile = 'Official Mobile Number is required';
			isValid = false;
		}

		// Address Info
		if (!formData.officeAddress) {
			formErrors.officeAddress = 'Office Address is required';
			isValid = false;
		}
		if (!formData.country) {
			formErrors.country = 'Country is required';
			isValid = false;
		}
		if (!formData.city) {
			formErrors.city = 'City is required';
			isValid = false;
		}
		if (!formData.state) {
			formErrors.state = 'State is required';
			isValid = false;
		}
		if (!formData.zipCode) {
			formErrors.zipCode = 'Zip Code is required';
			isValid = false;
		}
		if (!formData.mapLocation) {
			formErrors.mapLocation = 'Map Location is required';
			isValid = false;
		}

		return isValid;
	};

	const handleSave = () => {
		if (validateForm()) {
			// Process form submission
			console.log('Form is valid, processing submission...');
		} else {
			console.log('Form has errors');
		}
	};

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
						<input type="text" placeholder="Enter Company Name" bind:value={formData.companyName} />
						{#if formErrors.companyName}
							<span class="error-message text-danger">{formErrors.companyName}</span>
						{/if}
					</div>
					<!-- /.dash-input-wrapper -->
					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Email*</label>
								<input type="email" placeholder="Enter Company Email" bind:value={formData.email} />
								{#if formErrors.email}
									<span class="error-message text-danger">{formErrors.email}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Website*</label>
								<input type="text" placeholder="Enter Company Website" bind:value={formData.website} />
								{#if formErrors.website}
									<span class="error-message text-danger">{formErrors.website}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Date of Inception*</label>
								<input type="date" bind:value={formData.dateOfInception} />
								{#if formErrors.dateOfInception}
									<span class="error-message text-danger">{formErrors.dateOfInception}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Company Size*</label>
								<select class="nice-select" bind:value={formData.companySize}>
									<option value="">Select Size</option>
									<option value="0-1">0 - 1 Employees</option>
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
									{#if formErrors.companySize}
										<span class="error-message text-danger">{formErrors.companySize}</span>
									{/if}
								</div>
								<!-- /.dash-input-wrapper -->
							</div>
							<!-- /.dash-input-wrapper -->
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="">Phone Number*</label>
								<input type="tel" placeholder="+92 --- ---- ---" bind:value={formData.phoneNumber} />
								{#if formErrors.phoneNumber}
									<span class="error-message text-danger">{formErrors.phoneNumber}</span>
								{/if}
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
								<select class="nice-select" bind:value={formData.industry}>
									<option value="">Select Industry</option>
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
								{#if formErrors.industry}
									<span class="error-message text-danger">{formErrors.industry}</span>
								{/if}
							</div>

							<div class="dash-input-wrapper mb-30">
								<label for="">Workplace Module*</label>
								<select class="nice-select" bind:value={formData.workplaceModule}>
									<option value="" selected hidden>Select Module</option>
									<option value="On-site">On-site</option>
									<option value="Hybrid">Hybrid</option>
									<option value="Remote">Remote</option>
									<option value="Remote">Felexible</option>

								</select>
								{#if formErrors.workplaceModule}
									<span class="error-message text-danger">{formErrors.workplaceModule}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
					</div>
					<div class="dash-input-wrapper">
						<label for="">About Company*</label>
						<textarea class="size-lg" placeholder="Write something interesting about you...." maxlength="500" bind:value={formData.aboutCompany}></textarea>
						{#if formErrors.aboutCompany}
							<span class="error-message text-danger">{formErrors.aboutCompany}</span>
						{/if}
						<div class="alert-text">Brief description for your company. (Max 500 characters)</div>
					</div>
					<!-- /.dash-input-wrapper -->
				</div>
				
				


				<!-- /.Company details -->

				<div class="bg-white card-box border-20 mt-40">
					<h4 class="dash-title-three">Company Contact Information</h4>

					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
						<label for="">Official Email Address</label>
						<input type="email" placeholder="example@company.com" />
					</div>
				</div>
					<!-- /.dash-input-wrapper -->
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
						<label for="">Official Website Address</label>
						<input type="text" placeholder="https://www.company.com" />
					</div>
				</div>
					<!-- /.dash-input-wrapper -->
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
						<label for="">Company LinkedIn Page</label>
						<input type="text" placeholder="https://www.linkedin.com/company/company-name" />
					</div>
				</div>
					<!-- /.dash-input-wrapper -->
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
						<label for="">Registered Phone Number</label>
						<input type="tel" placeholder="+1 234 567 890" />
					</div>
				</div>
					<!-- /.dash-input-wrapper -->
					</div>
				</div>


					<!-- /.Company Representative Information -->

					<div class="bg-white card-box border-20 mt-40">
						<h4 class="dash-title-three">Company Representative Information</h4>
						<div class="row">
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Name of CEO</label>
								<input type="text" placeholder="John Doe" />
							</div>
							<!-- /.dash-input-wrapper -->
							<div class="dash-input-wrapper mb-30">
								<label for="">Official Email Address</label>
								<input type="email" placeholder="ceo@company.com" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Personal Email Address</label>
								<input type="email" placeholder="johndoe@gmail.com" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Official Mobile Number</label>
								<input type="tel" placeholder="+1 234 567 890" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Personal Mobile Number</label>
								<input type="tel" placeholder="+1 234 567 890" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">LinkedIn Profile</label>
								<input type="text" placeholder="https://www.linkedin.com/in/johndoe/" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Name of HR Head/Manager</label>
								<input type="text" placeholder="Jane Doe" bind:value={formData.firstName} />
								{#if formErrors.firstName}
									<span class="error-message text-danger">{formErrors.firstName}</span>
								{/if}
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Official Email Address</label>
								<input type="email" placeholder="hr@company.com" bind:value={formData.officialEmail} />
								{#if formErrors.officialEmail}
									<span class="error-message text-danger">{formErrors.officialEmail}</span>
								{/if}
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Personal Email Address</label>
								<input type="email" placeholder="janedoe@gmail.com" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Official Mobile Number</label>
								<input type="tel" placeholder="+1 234 567 890" bind:value={formData.officialMobile} />
								{#if formErrors.officialMobile}
									<span class="error-message text-danger">{formErrors.officialMobile}</span>
								{/if}
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">Personal Mobile Number</label>
								<input type="tel" placeholder="+1 234 567 890" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
							<div class="col-md-6">
								<div class="dash-input-wrapper mb-30">
								<label for="">LinkedIn Profile</label>
								<input type="text" placeholder="https://www.linkedin.com/in/janedoe/" />
							</div>
						</div>
							<!-- /.dash-input-wrapper -->
						
						</div>
					</div>
				


						<!-- /.Account Holder Information -->

						<div class="bg-white card-box border-20 mt-40">
							<h4 class="dash-title-three">Account Holder Information</h4>
							<div class="row">
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">First Name*</label>
										<input type="text" placeholder="John" bind:value={formData.firstName} />
										{#if formErrors.firstName}
											<span class="error-message text-danger">{formErrors.firstName}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Last Name*</label>
										<input type="text" placeholder="Doe" bind:value={formData.lastName} />
										{#if formErrors.lastName}
											<span class="error-message text-danger">{formErrors.lastName}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Designation*</label>
										<input type="text" placeholder="CEO" bind:value={formData.designation} />
										{#if formErrors.designation}
											<span class="error-message text-danger">{formErrors.designation}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Department*</label>
										<input type="text" placeholder="HR" bind:value={formData.department} />
										{#if formErrors.department}
											<span class="error-message text-danger">{formErrors.department}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Official Email Address*</label>
										<input type="email" placeholder="john.doe@company.com" bind:value={formData.officialEmail} />
										{#if formErrors.officialEmail}
											<span class="error-message text-danger">{formErrors.officialEmail}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Personal Email Address</label>
										<input type="email" placeholder="johndoe@gmail.com" />
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Official Mobile Number*</label>
										<input type="tel" placeholder="+1 234 567 890" bind:value={formData.officialMobile} />
										{#if formErrors.officialMobile}
											<span class="error-message text-danger">{formErrors.officialMobile}</span>
										{/if}
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">Personal Mobile Number</label>
										<input type="tel" placeholder="+1 234 567 890" />
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
								<div class="col-md-6">
									<div class="dash-input-wrapper mb-30">
										<label for="">LinkedIn Profile</label>
										<input type="text" placeholder="https://www.linkedin.com/in/johndoe/" />
									</div>
								</div>
									<!-- /.dash-input-wrapper -->
							</div>
						</div>
				
				
				
				<!-- /.card-box -->

				
				<!-- /.card-box -->

				<div class="bg-white card-box border-20 mt-40">
					<h4 class="dash-title-three">Address & Location</h4>
					<div class="row">
						<div class="col-12">
							<div class="dash-input-wrapper mb-25">
								<label for="">Office Address*</label>
								<input type="text" placeholder="Enter Company Address" bind:value={formData.officeAddress} />
								{#if formErrors.officeAddress}
									<span class="error-message text-danger">{formErrors.officeAddress}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">Country*</label>
								<select class="nice-select" bind:value={formData.country}>
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
								{#if formErrors.country}
									<span class="error-message text-danger">{formErrors.country}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">City*</label>
								<select class="nice-select" bind:value={formData.city}>
									<option>Dhaka</option>
									<option>Tokyo</option>
									<option>Delhi</option>
									<option>Shanghai</option>
									<option>Mumbai</option>
									<option>Bangalore</option>
								</select>
								{#if formErrors.city}
									<span class="error-message text-danger">{formErrors.city}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">State*</label>
								<select class="nice-select" bind:value={formData.state}>
									<option>Dhaka</option>
									<option>Tokyo</option>
									<option>Delhi</option>
									<option>Shanghai</option>
									<option>Mumbai</option>
									<option>Bangalore</option>
								</select>
								{#if formErrors.state}
									<span class="error-message text-danger">{formErrors.state}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						<div class="col-lg-3">
							<div class="dash-input-wrapper mb-25">
								<label for="">Zip Code*</label>
								<input type="number" placeholder="1708" bind:value={formData.zipCode} />
								{#if formErrors.zipCode}
									<span class="error-message text-danger">{formErrors.zipCode}</span>
								{/if}
							</div>
							<!-- /.dash-input-wrapper -->
						</div>
						
					</div>
				</div>
				<!-- /.card-box -->

				
				<!-- /.card-box -->

				<div class="button-group d-inline-flex align-items-center mt-30">
					<a href="#!" class="dash-btn-two tran3s me-3" on:click={handleSave}>Save</a>
					<a href="#!" class="dash-cancel-btn tran3s">Cancel</a>
				</div>
			</div>
		</div>
		<DeleteModel />
		<BackToTop />
	{/if}
</div>

<style>
	:global(.error-message) {
		font-size: 10px;
		display: block;
		margin-top: 4px;
	}
</style>
