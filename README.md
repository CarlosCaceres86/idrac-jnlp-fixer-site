# iDRAC JNLP Fixer website

Public static website for [iDRAC JNLP Fixer](https://chromewebstore.google.com/detail/idrac-jnlp-fixer/iemmfodijpapnnbdpbaeaimnkflbcakn), a small Chromium extension that fixes legacy iDRAC JNLP download filenames.

The repository contains only the public website. It has no backend, analytics,
external font request or runtime dependency.

## GitHub Pages

The site is deployed from `main` with GitHub Actions at:

<https://carloscaceres86.github.io/idrac-jnlp-fixer-site/>

The workflow can also be started manually from the Actions tab.

## Purchase and free trial

The Live checkout is configured in [`config.js`](config.js). The free trial
includes three matching JNLP renames, followed by a €2.99 lifetime license for
unlimited renames on up to three active browser profiles. Checkout links are
enabled only for valid HTTPS Lemon Squeezy `/checkout/buy/` URLs:

```js
checkoutUrl: "https://<live-store>.lemonsqueezy.com/checkout/buy/<live-checkout-id>",
```

Do not put a Test Mode checkout URL, license key or API key in this repository.

Store installation links include fixed UTM campaign tags for aggregate Chrome
Web Store reports. There is no website or extension event tracking. Review
links are optional, carry no incentives and never change trial or license access.

Before deploying, check the home, purchase and support pages on desktop and a
mobile viewport; confirm the trial and lifetime terms agree, the install links
open the published store listing, and the checkout points to the Live product.

Support contact: `idracjnlpfixer@proton.me`.
