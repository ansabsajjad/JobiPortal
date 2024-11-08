import { browser } from "$app/environment";

export async function niceSelect() {
  if (browser) {
    const { default: Jq } = await import("jquery");
    window.$ = Jq;
    window.jQuery = Jq;
    await import("jquery-nice-select/js/jquery.nice-select.min.js");

    window.$("input,textarea").each(function () {
      window.$(this).data("holder", window.$(this).attr("placeholder"));
      window.$(this).on("focusin", function () {
        window.$(this).attr("placeholder", "");
      });
      window.$(this).on("focusout", function () {
        window.$(this).attr("placeholder", window.$(this).data("holder"));
      });
    });

    setTimeout(() => {
      if (window.$(".nice-select").length) {
        window.$(".nice-select").niceSelect();
      }
    }, 351);
  }
}
