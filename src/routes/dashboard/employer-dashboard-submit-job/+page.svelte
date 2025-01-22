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
	let skills = '';
	let formErrors = {};
	let selectedBenefits = {
		healthInsurance: false,
		paidTimeOff: false,
		lifeInsurance: false,
		flexibleSchedule: false,
		retirement: false,
		parentalLeave: false,
		meal: {
			enabled: false,
			breakfast: false,
			lunch: false,
			dinner: false
		},
		performanceBonus: false,
		gym: false
	};
	let formData = {
		jobTitle: '',
		vacancies: '',
		companyName: '',
		industry: '',
		employmentType: '',
		locationType: '',
		workShift: '',
		workweek: '',
		shiftStart: '',
		shiftEnd: '',
		educationLevel: '',
		fieldOfStudy: '',
		experienceRequired: '',
		jobDescription: '',
		skills: '',
		minSalary: '',
		maxSalary: ''
	};

	function validateForm() {
		formErrors = {};
		let isValid = true;

		// Validate Job Title
		if (!formData.jobTitle.trim()) {
			formErrors.jobTitle = 'Job title is required';
			isValid = false;
		}

		// Validate Vacancies
		if (!formData.vacancies || formData.vacancies < 1) {
			formErrors.vacancies = 'Number of vacancies is required and must be at least 1';
			isValid = false;
		}

		// Validate Company Name
		if (!formData.companyName.trim()) {
			formErrors.companyName = 'Company name is required';
			isValid = false;
		}

		// Validate Industry
		if (!formData.industry) {
			formErrors.industry = 'Industry is required';
			isValid = false;
		}

		// Validate Employment Type
		if (!formData.employmentType) {
			formErrors.employmentType = 'Employment type is required';
			isValid = false;
		}

		// Validate Location Type
		if (!formData.locationType) {
			formErrors.locationType = 'Location type is required';
			isValid = false;
		}

		// Validate Work Shift
		if (!formData.workShift) {
			formErrors.workShift = 'Work shift is required';
			isValid = false;
		}

		// Validate Workweek
		if (!formData.workweek) {
			formErrors.workweek = 'Workweek is required';
			isValid = false;
		}

		// Validate Shift Times
		if (!formData.shiftStart) {
			formErrors.shiftStart = 'Shift start time is required';
			isValid = false;
		}
		if (!formData.shiftEnd) {
			formErrors.shiftEnd = 'Shift end time is required';
			isValid = false;
		}

		// Validate Education
		if (!formData.educationLevel) {
			formErrors.educationLevel = 'Education level is required';
			isValid = false;
		}
		if (!formData.fieldOfStudy) {
			formErrors.fieldOfStudy = 'Field of study is required';
			isValid = false;
		}

		// Validate Experience
		if (!formData.experienceRequired) {
			formErrors.experienceRequired = 'Experience is required';
			isValid = false;
		}

		// Validate Job Description
		if (!formData.jobDescription.trim()) {
			formErrors.jobDescription = 'Job description is required';
			isValid = false;
		}

		// Validate Skills
		if (!formData.skills.trim()) {
			formErrors.skills = 'Skills are required';
			isValid = false;
		}

		// Validate Salary
		if (!formData.minSalary || formData.minSalary < 0) {
			formErrors.minSalary = 'Minimum salary is required and must be positive';
			isValid = false;
		}
		if (!formData.maxSalary || formData.maxSalary < 0) {
			formErrors.maxSalary = 'Maximum salary is required and must be positive';
			isValid = false;
		}
		if (Number(formData.maxSalary) <= Number(formData.minSalary)) {
			formErrors.maxSalary = 'Maximum salary must be greater than minimum salary';
			isValid = false;
		}

		return isValid;
	}

	function handleSubmit() {
		if (validateForm()) {
			// Proceed with form submission
			console.log('Form is valid, submitting...', formData);
		} else {
			console.log('Form has errors', formErrors);
		}
	}

	onMount(() => {
		niceSelect();
	});
</script>

<div class="main-page-wrapper">
	<Preloader bind:isPreloading />
	{#if !isPreloading}
		<LazyImageLoader />
		<EmployerDashboardAside activeMenu={'SubmitJob'} />
		<div class="dashboard-body">
			<div class="position-relative">
				<DashboardHeader />
				<!-- Your dashboard content goes here -->
				<h2 class="main-title">Post a New Job</h2>
				<div class="bg-white card-box border-20">
					<h4 class="dash-title-three">Job Details</h4>
					<div class="dash-input-wrapper mb-30">
						<label for="jobTitle">Job Title*</label>
						<input 
							type="text" 
							id="jobTitle" 
							bind:value={formData.jobTitle}
							class:error={formErrors.jobTitle}
							placeholder="Ex: Product Designer" 
						/>
						{#if formErrors.jobTitle}
							<span class="error-message">{formErrors.jobTitle}</span>
						{/if}
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="vacancies">Number of Vacancies*</label>
								<input 
									type="number" 
									id="vacancies" 
									bind:value={formData.vacancies}
									class:error={formErrors.vacancies}
									placeholder="Enter number of vacancies" 
									min="1" 
								/>
								{#if formErrors.vacancies}
									<span class="error-message">{formErrors.vacancies}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="companyName">Company Name*</label>
								<input 
									type="text" 
									id="companyName" 
									bind:value={formData.companyName}
									class:error={formErrors.companyName}
									placeholder="Enter company name" 
								/>
								{#if formErrors.companyName}
									<span class="error-message">{formErrors.companyName}</span>
								{/if}
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="industry">Industry*</label>
								<select 
									class="nice-select" 
									id="industry" 
									bind:value={formData.industry}
									class:error={formErrors.industry}
								>
									<option value="">Select Industry</option>
									<option value="it">IT & Software</option>
									<option value="banking">Banking</option>
									<option value="healthcare">Healthcare</option>
									<!-- Add more industries -->
								</select>
								{#if formErrors.industry}
									<span class="error-message">{formErrors.industry}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Gender Preference</label>
								<select class="nice-select">
									<option value="none">No Preference</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Employment Type*</label>
								<select 
									class="nice-select" 
									id="employmentType" 
									bind:value={formData.employmentType}
									class:error={formErrors.employmentType}
								>
									<option value="permanent">Permanent</option>
									<option value="contract">Contract</option>
									<option value="internship">Internship</option>
									<option value="apprenticeship">Apprenticeship</option>
									<option value="freelance">Freelance</option>
									<option value="parttime">Part-time</option>
									<option value="thirdparty">3rd-Party Contract</option>
								</select>
								{#if formErrors.employmentType}
									<span class="error-message">{formErrors.employmentType}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Sub Field</label>
								<input type="text" placeholder="Enter sub field details" />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<div class="dash-input-wrapper mb-30">
								<label>Location Type*</label>
								<select 
									class="nice-select" 
									id="locationType" 
									bind:value={formData.locationType}
									class:error={formErrors.locationType}
								>
									<option value="onsite">Onsite</option>
									<option value="hybrid">Hybrid</option>
									<option value="remote">Remote</option>
								</select>
								{#if formErrors.locationType}
									<span class="error-message">{formErrors.locationType}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-4">
							<div class="dash-input-wrapper mb-30">
								<label>Work Shift*</label>
								<select 
									class="nice-select" 
									id="workShift" 
									bind:value={formData.workShift}
									class:error={formErrors.workShift}
								>
									<option value="morning">Morning</option>
									<option value="afternoon">Afternoon</option>
									<option value="night">Night</option>
								</select>
								{#if formErrors.workShift}
									<span class="error-message">{formErrors.workShift}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-4">
							<div class="dash-input-wrapper mb-30">
								<label>Workweek*</label>
								<select 
									class="nice-select" 
									id="workweek" 
									bind:value={formData.workweek}
									class:error={formErrors.workweek}
								>
									<option value="5">5 days a week</option>
									<option value="6">6 days a week</option>
								</select>
								{#if formErrors.workweek}
									<span class="error-message">{formErrors.workweek}</span>
								{/if}
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Shift Start Time*</label>
								<input 
									type="time" 
									id="shiftStart" 
									bind:value={formData.shiftStart}
									class:error={formErrors.shiftStart}
								/>
								{#if formErrors.shiftStart}
									<span class="error-message">{formErrors.shiftStart}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Shift End Time*</label>
								<input 
									type="time" 
									id="shiftEnd" 
									bind:value={formData.shiftEnd}
									class:error={formErrors.shiftEnd}
								/>
								{#if formErrors.shiftEnd}
									<span class="error-message">{formErrors.shiftEnd}</span>
								{/if}
							</div>
						</div>
					</div>

					<h4 class="dash-title-three pt-50 lg-pt-30">Education & Experience</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Education Level*</label>
								<select 
									class="nice-select" 
									id="educationLevel" 
									bind:value={formData.educationLevel}
									class:error={formErrors.educationLevel}
								>
									<option value="">Select Degree</option>
									<option value="bachelors">Bachelor's Degree</option>
									<option value="masters">Master's Degree</option>
									<option value="phd">PhD</option>
								</select>
								{#if formErrors.educationLevel}
									<span class="error-message">{formErrors.educationLevel}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Field of Study*</label>
								<select 
									class="nice-select" 
									id="fieldOfStudy" 
									bind:value={formData.fieldOfStudy}
									class:error={formErrors.fieldOfStudy}
								>
									<option value="">Select Field</option>
									<option value="cs">Computer Science</option>
									<option value="business">Business Administration</option>
									<option value="engineering">Engineering</option>
								</select>
								{#if formErrors.fieldOfStudy}
									<span class="error-message">{formErrors.fieldOfStudy}</span>
								{/if}
							</div>
						</div>
					</div>

					<div class="dash-input-wrapper mb-30">
						<label>Experience Required*</label>
						<select 
							class="nice-select" 
							id="experienceRequired" 
							bind:value={formData.experienceRequired}
							class:error={formErrors.experienceRequired}
						>
							<option value="fresh">Fresh</option>
							<option value="less-than-1">Less than a year</option>
							{#each Array(20) as _, i}
								<option value={i + 1}>{i + 1} Year{i !== 0 ? 's' : ''}</option>
							{/each}
							<option value="20-plus">20+ Years</option>
						</select>
						{#if formErrors.experienceRequired}
							<span class="error-message">{formErrors.experienceRequired}</span>
						{/if}
					</div>

					<div class="dash-input-wrapper mb-30">
						<label for="">Job Description*</label>
						<textarea 
							class="size-lg" 
							id="jobDescription" 
							bind:value={formData.jobDescription}
							class:error={formErrors.jobDescription}
							placeholder="Write about the job in details..." 
						></textarea>
						{#if formErrors.jobDescription}
							<span class="error-message">{formErrors.jobDescription}</span>
						{/if}
					</div>
					<div class="dash-input-wrapper mb-30">
						<label for="">Key Skills Required*</label>
						<textarea 
							class="size-lg" 
							id="skills" 
							bind:value={formData.skills}
							class:error={formErrors.skills}
							placeholder="UI, UX, Frontend, Backend..." 
						></textarea>
						{#if formErrors.skills}
							<span class="error-message">{formErrors.skills}</span>
						{/if}
						Add Max 10 skills
					</div>
					
					<h4 class="dash-title-three pt-50 lg-pt-30">Salary</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Minimum Salary (PKR)*</label>
								<input 
									type="number" 
									id="minSalary" 
									bind:value={formData.minSalary}
									class:error={formErrors.minSalary}
									placeholder="Enter minimum salary" 
								/>
								{#if formErrors.minSalary}
									<span class="error-message">{formErrors.minSalary}</span>
								{/if}
							</div>
						</div>
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label>Maximum Salary (PKR)*</label>
								<input 
									type="number" 
									id="maxSalary" 
									bind:value={formData.maxSalary}
									class:error={formErrors.maxSalary}
									placeholder="Enter maximum salary" 
								/>
								{#if formErrors.maxSalary}
									<span class="error-message">{formErrors.maxSalary}</span>
								{/if}
							</div>
						</div>
					</div>

					<div class="benefits-section lg-pt-30 mb-30">
						<h4 class="dash-title-three pt-50 lg-pt-30">Benefits</h4>
						<div class="row">
							{#each Object.entries(selectedBenefits) as [benefit, value]}
								{#if benefit !== 'meal'}
									<div class="col-md-4 mb-3">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												id={benefit}
												bind:checked={selectedBenefits[benefit]}
											/>
											<label class="form-check-label" for={benefit}>
												{benefit.charAt(0).toUpperCase() + benefit.slice(1).replace(/([A-Z])/g, ' $1')}
											</label>
										</div>
									</div>
								{:else}
									<div class="col-md-12 mb-3">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												id="meal"
												bind:checked={selectedBenefits.meal.enabled}
											/>
											<label class="form-check-label" for="meal">Meal</label>
										</div>
										{#if selectedBenefits.meal.enabled}
											<div class="ms-4 mt-2">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														id="breakfast"
														bind:checked={selectedBenefits.meal.breakfast}
													/>
													<label class="form-check-label" for="breakfast">Breakfast</label>
												</div>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														id="lunch"
														bind:checked={selectedBenefits.meal.lunch}
													/>
													<label class="form-check-label" for="lunch">Lunch</label>
												</div>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														id="dinner"
														bind:checked={selectedBenefits.meal.dinner}
													/>
													<label class="form-check-label" for="dinner">Dinner</label>
												</div>
											</div>
										{/if}
									</div>
								{/if}
							{/each}
						</div>
					</div>

					<h4 class="dash-title-three pt-50 lg-pt-30">Screening Questions</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Are you willing to undergo a background check, in accordance with local law/regulations?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="backgroundCheck" value="Yes" id="backgroundCheckYes" required style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="backgroundCheck" value="No" id="backgroundCheckNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Are you willing to take a medical test, in accordance with local law/regulations?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="medicalTest" value="Yes" id="medicalTestYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="medicalTest" value="No" id="medicalTestNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Are you willing to take a background check, in accordance with local law/regulations?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="backgroundCheck" value="Yes" id="backgroundCheckYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="backgroundCheck" value="No" id="backgroundCheckNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Do you have a valid driver's license?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="driverLicense" value="Yes" id="driverLicenseYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="driverLicense" value="No" id="driverLicenseNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Have you completed the following level of education: ________?</label>
								<select class="nice-select" name="educationLevel">
									<option value="">Select Education Level</option>
									<option value="High School">High School</option>
									<option value="Diploma">Diploma</option>
									<option value="Bachelor's">Bachelor's</option>
									<option value="Master's">Master's</option>
									<option value="Ph.D.">Ph.D.</option>
								</select>
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Are you currently residing in the city where the job is located?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="currentResidence" value="Yes" id="currentResidenceYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="currentResidence" value="No" id="currentResidenceNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Do you have the experience of same industry as required?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="industryExperience" value="Yes" id="industryExperienceYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="industryExperience" value="No" id="industryExperienceNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">Are you comfortable commuting to this job's location?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="commuteComfort" value="Yes" id="commuteComfortYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="commuteComfort" value="No" id="commuteComfortNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>

						<div class="col-md-6">
							<div class="dash-input-wrapper mb-30">
								<label for="" style="display: block; margin-bottom: 10px;">We must fill this position urgently. Can you start immediately?</label>
								<label style="display: inline-block; margin-right: 20px;">
									<input type="radio" name="startImmediately" value="Yes" id="startImmediatelyYes" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;Yes
								</label>
								<label style="display: inline-block; margin-left: 15px; margin-right: 20px;">
									<input type="radio" name="startImmediately" value="No" id="startImmediatelyNo" style="height: 15px; width: 15px;" />&nbsp;&nbsp;&nbsp;&nbsp;No
								</label><br />
							</div>
						</div>
					</div>
					<div class="button-group d-inline-flex align-items-center mt-30">
						<button type="submit" class="dash-btn-two tran3s me-3" on:click={handleSubmit}>Submit Job</button>
						<button type="button" class="dash-cancel-btn tran3s">Cancel</button>
					</div>
				</div>
				<!-- /.card-box -->
			</div>
			<DeleteModel />
			<BackToTop />
		</div>
	{/if}
</div>

<style>
	.error {
		border-color: #dc3545 !important;
	}
	.error-message {
		color: #dc3545;
		font-size: 0.875rem;
		margin-top: 0.25rem;
		display: block;
	}
</style>
