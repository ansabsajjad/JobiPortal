import { cubicOut } from "svelte/easing";

export function fadeInUp(
  node,
  { delay = 100, duration = 500, easing = cubicOut }
) {
  return {
    delay: delay + 200,
    duration,
    easing,
    css: (t) => `
      opacity: ${t};
      transform: translateY(${(1 - t) * 20}px);
    `,
  };
}
export function fadeInDown(
  node,
  { delay = 100, duration = 500, easing = cubicOut }
) {
  return {
    delay: delay + 200,
    duration,
    easing,
    css: (t) => `
      opacity: ${t};
      transform: translateY(${(-1 + t) * 20}px);
    `,
  };
}

export function fadeInLeft(
  node,
  { delay = 0, duration = 500, easing = cubicOut }
) {
  return {
    delay: delay + 200,
    duration,
    easing,
    css: (t) => `
      opacity: ${t};
      transform: translateX(${(-1 + t) * 20}px);
    `,
  };
}

export function fadeInRight(
  node,
  { delay = 100, duration = 500, easing = cubicOut }
) {
  return {
    delay: delay + 200,
    duration,
    easing,
    css: (t) => `
      opacity: ${t};
      transform: translateX(${(1 - t) * 20}px);
    `,
  };
}

export function useIntersectionObserver(node, others) {
  const { setVisibility, threshold } = others;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.boundingClientRect.top <= entry.rootBounds.bottom + threshold) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

export function useAnimation(node) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.boundingClientRect.top <= entry.rootBounds.bottom) {
        const delay = node.getAttribute("data-wow-delay") || "0s";
        const duration = node.getAttribute("data-wow-duration") || "1s";
        const animation = Array.from(node.classList).find((className) =>
          className.startsWith("fade")
        );
        node.style.visibility = "visible";
        node.style.animationFillMode = "both";
        node.style.animationDuration = duration;
        node.style.animationDelay = delay;
        node.style.animationName = animation ?? "fadeInUp";
        observer.unobserve(node);
      } else {
        node.style.visibility = "hidden";
        node.style.animationName = "none";
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}

