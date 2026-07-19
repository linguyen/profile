# careai

Personal portfolio website for [careai.vn](https://careai.vn/), built with Vite, React, TypeScript, and React Router.

## Tech Stack

- Vite
- React
- TypeScript
- React Router
- ESLint
- IIS deployment with URL Rewrite support

## Quick Start

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
	App.tsx                 React Router routes
	main.tsx                React app entry point
	features/
		contact/              Contact section
		hero/                 Homepage hero section
		work/                 Work listing and detail pages
	assets/
		data/works.json       Portfolio work data
public/
	web.config              IIS rewrite rules
	favicon.*               Site icons
.github/workflows/ci.yml  CI, build, backup, and IIS deploy workflow
```

## Routes

- `/` - Home page
- `/work` - Portfolio list
- `/work/:workLink` - Portfolio detail page, for example `/work/net-open-source-for-seo`

## IIS Deployment

The production build outputs static files to `dist/`.

This project includes `public/web.config`, which Vite copies into `dist/` during build. The IIS config handles:

- Redirecting HTTP requests to HTTPS
- Rewriting React Router deep links back to `index.html`
- Allowing real static files such as JavaScript, CSS, images, and favicons to be served normally

Required IIS setup:

- IIS site root points to `C:\inetpub\wwwroot\careai.vn`
- HTTPS binding is configured with a valid certificate
- IIS URL Rewrite module is installed
- The GitHub Actions runner account can write to `C:\inetpub\wwwroot\careai.vn`
- The GitHub Actions runner account can write backups to `C:\Backups\MyReactApp`

## CI/CD

The GitHub Actions workflow runs on a self-hosted Windows runner:

1. Install dependencies with `npm ci`
2. Run ESLint
3. Build with Node.js 20
4. Back up the current IIS deployment
5. Deploy `dist/` to `C:\inetpub\wwwroot\careai.vn`
6. Verify that `index.html` exists after deployment

## License

See [LICENSE](LICENSE).