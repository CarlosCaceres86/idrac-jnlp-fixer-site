(() => {
  const config = window.IDRAC_SITE_CONFIG || {};
  let checkoutUrl = "";
  try {
    const candidate = new URL(config.checkoutUrl);
    if (candidate.protocol === "https:"
      && candidate.hostname.endsWith(".lemonsqueezy.com")
      && /^\/checkout\/buy\/[^/]+$/.test(candidate.pathname)) {
      checkoutUrl = candidate.href;
    }
  } catch {
    // Keep purchases unavailable when configuration is missing or invalid.
  }
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
      ? "Pay once through Lemon Squeezy. The checkout shows the final total before payment."
      : "Purchases are temporarily unavailable. You can still install the free trial or contact support.";
  });

  document.querySelectorAll("[data-purchase-label]").forEach((element) => {
    element.textContent = checkoutUrl ? `Buy lifetime — ${price}` : "Purchase temporarily unavailable";
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute("aria-current", "page");
  }
})();
