# CourtCompass Australia — controlled preview

This is a **static, non-production preview**. It contains no live legal backend, no document upload and no payments.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Kosta1985/Kosta1985/tree/courtcompass-preview-control/courtcompass-preview)

The template is isolated in this subdirectory and uses Cloudflare Workers + Static Assets only.

After deployment, `/api/status` reports that the backend, legal AI, uploads and payments are disabled. Any other `/api/*` request returns `503` by design.
