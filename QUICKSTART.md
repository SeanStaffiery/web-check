# Web-Check Quick Start Guide

This guide will help you get Web-Check up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en) (v18.16.1 or later)
- [Yarn](https://yarnpkg.com/getting-started/install) package manager
- [Git](https://git-scm.com/)

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lissy93/web-check.git
   cd web-check
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```
   
   _Note: If you encounter Puppeteer download issues, use:_
   ```bash
   PUPPETEER_SKIP_DOWNLOAD=true yarn install
   ```

3. **Build the application**
   ```bash
   yarn build
   ```
   
   This step is **required** before running the application. It compiles the Astro application and creates the necessary files in the `dist/` directory.

4. **Start the server**
   ```bash
   yarn start
   ```
   
   Or for development mode with hot-reload:
   ```bash
   yarn dev
   ```

5. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Troubleshooting

### Website not loading or showing "not compiled" error

**Solution**: You need to build the application first using `yarn build`. The server requires the compiled files in the `dist/` directory to function properly.

### Puppeteer installation errors

**Solution**: Set the `PUPPETEER_SKIP_DOWNLOAD` environment variable:
```bash
PUPPETEER_SKIP_DOWNLOAD=true yarn install
```

Some features like screenshots may not work without Puppeteer, but the core website functionality will still operate.

### Port already in use

**Solution**: Change the port by setting the `PORT` environment variable:
```bash
PORT=3001 yarn start
```

## Browser Compatibility

Web-Check is tested and works on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Next Steps

- See [README.md](./.github/README.md) for full documentation
- Check [ENVIRONMENT_VARIABLES.md](./docs/ENVIRONMENT_VARIABLES.md) for API configuration
- Visit the [GitHub repository](https://github.com/lissy93/web-check) for support

## Production Deployment

For production deployment, use:
```bash
yarn build
yarn start
```

Or use PM2 for process management:
```bash
yarn start-pm
```

For deployment to cloud platforms (Netlify, Vercel, Cloudflare), see the deployment options in the main README.
