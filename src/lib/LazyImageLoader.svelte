<script>
  import { onMount } from "svelte";

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            if (src) {
              img.src = src;
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    setTimeout(() => {
      document.querySelectorAll(".lazy-img").forEach((img) => {
        observer.observe(img);
      });
    }, 350);

    // Return a cleanup function
    return () => {
      observer.disconnect();
    };
  });
</script>
