(() => {
  const config = window.IDRAC_SITE_CONFIG || {};
  const checkoutUrl = typeof config.checkoutUrl === "string" && /^https:\/\//.test(config.checkoutUrl)
    ? config.checkoutUrl
    : "";
  const price = config.price || "€2.99";
  const supportEmail = config.supportEmail || "idracjnlpfixer@proton.me";

  document.querySelectorAll("[data-price]").forEach((element) => {
    element.textContent = price;
  });

  document.querySelectorAll("[data-support-email]").forEach((element) => {
    element.textContent = supportEmail;
  });

  document.querySelectorAll("[data-support-link]").forEach((element) => {
    element.href = `mailto:${supportEmail}`;
  });

  document.querySelectorAll("[data-checkout-link]").forEach((element) => {
    if (checkoutUrl) {
      element.href = checkoutUrl;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      element.classList.remove("is-disabled");
      element.setAttribute("aria-disabled", "false");
      element.tabIndex = 0;
      return;
    }

    element.removeAttribute("href");
    element.classList.add("is-disabled");
    element.setAttribute("aria-disabled", "true");
    element.tabIndex = -1;
    element.addEventListener("click", (event) => event.preventDefault());
  });

  document.querySelectorAll("[data-checkout-status]").forEach((element) => {
    element.textContent = checkoutUrl
      ? "Secure Lemon Squeezy checkout is ready."
      : "Live checkout is being prepared while the store completes verification.";
  });

  document.querySelectorAll("[data-purchase-label]").forEach((element) => {
    element.textContent = checkoutUrl ? `Purchase for ${price}` : "Purchase link coming soon";
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute("aria-current", "page");
  }
})();
