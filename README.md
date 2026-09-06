# iDRAC JNLP Fixer website

Public static website for [iDRAC JNLP Fixer](https://github.com/CarlosCaceres86/-iDRAC-JNLP-Fixer), a small Chromium extension that fixes legacy iDRAC JNLP download filenames.

The repository contains only the public website. It has no backend, analytics,
external font request or runtime dependency.

## GitHub Pages

The site is deployed from `main` with GitHub Actions. After GitHub Pages is
enabled, the project URL will be:

<https://carloscaceres86.github.io/idrac-jnlp-fixer-site/>

The workflow can also be started manually from the Actions tab.

## Enable the Live checkout

The purchase buttons intentionally remain disabled until Lemon Squeezy Live is
approved. Set the real Live checkout URL in [`config.js`](config.js):

```js
checkoutUrl: "https://<live-store>.lemonsqueezy.com/checkout/buy/<live-checkout-id>",
```

Do not put a Test Mode checkout URL, license key or API key in this repository.

Support contact: `idracjnlpfixer@proton.me`.
