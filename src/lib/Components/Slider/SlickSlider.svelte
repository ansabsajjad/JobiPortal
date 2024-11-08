<script>
  import { onMount } from "svelte";
  export let settings = {};
  export let classes = "";
  const isBrowser = typeof window !== "undefined";
  let slider;

  onMount(async () => {
    if (isBrowser) {
      console.log("SlickSlider onMount");
      const { default: Jq } = await import("jquery");
      window.$ = Jq;
      await import("slick-carousel");
      window.$(slider).slick(settings);
    }

    return () => {
      if (isBrowser) {
        const Jq = import("jquery").then(({ default: Jq }) => {
          Jq(slider).slick("unslick");
        });
      }
    };
  });
</script>

<div bind:this={slider} class={`${classes}`}>
  <slot />
</div>
