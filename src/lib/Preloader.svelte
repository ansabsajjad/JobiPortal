<script>
  import { onMount } from "svelte";
  export let isPreloading = true;
  onMount(() => {
    const timer = setTimeout(() => {
      isPreloading = false;
      document.body.style.overflow = "visible"; // Make the body scrollable again
    }, 350); // Assuming 350ms is enough for your site to be considered "loaded"

    return () => clearTimeout(timer); // Cleanup the timer
  });
</script>

{#if isPreloading}
 <div id="preloader">
			<div id="ctn-preloader" class="ctn-preloader">
				<div class="icon"><img src="/assets/images/loader.svg" alt="" class="m-auto d-block" width="60"></div>
				<div class="txt-loading">
					<span data-text-preloader="j" class="letters-loading">
						j
					</span>
					<span data-text-preloader="o" class="letters-loading">
						o
					</span>
					<span data-text-preloader="b" class="letters-loading">
						b
					</span>
					<span data-text-preloader="i" class="letters-loading">
						i
					</span>
				</div>
			</div>
		</div>

{/if}
