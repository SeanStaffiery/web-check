# Environment Variables Configuration Guide

This document describes all available environment variables for configuring Web-Check.

## Deployment Configuration

### `PLATFORM`
- **Type**: `string`
- **Default**: `node`
- **Options**: `vercel`, `netlify`, `cloudflare`, `node`
- **Description**: Determines which deployment adapter to use. The build process will automatically configure the appropriate adapter based on this value.

### `OUTPUT`
- **Type**: `string`
- **Default**: `server`
- **Options**: `server`, `static`
- **Description**: Astro output mode. Use `server` for SSR or `static` for static site generation.

### `SITE_URL`
- **Type**: `string`
- **Default**: `https://web-check.xyz`
- **Description**: The fully qualified domain name (FQDN) where the site is hosted. Used for sitemaps and canonical URLs.

### `BASE_URL`
- **Type**: `string`
- **Default**: `/`
- **Description**: The base URL if serving the application from a subdirectory.

### `BOSS_SERVER`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enable "boss mode" which shows the marketing homepage instead of redirecting to `/check`.

## API Configuration

### `PUBLIC_API_ENDPOINT`
- **Type**: `string`
- **Default**: `/api`
- **Description**: The endpoint for the API. Can be a local path or remote URL.

### `PUBLIC_API_TIMEOUT_LIMIT`
- **Type**: `number` (milliseconds)
- **Default**: `60000` (60 seconds)
- **Description**: Timeout for frontend API requests. Requests exceeding this duration will be marked as timed out.

### `API_TIMEOUT_LIMIT`
- **Type**: `number` (milliseconds)
- **Default**: `10000` (10 seconds)
- **Description**: Backend API request timeout limit.

## Troubleshooting

### Website Not Loading
1. Check that `PLATFORM` matches your deployment environment
2. Verify `SITE_URL` and `BASE_URL` are correct
3. Ensure `PUBLIC_API_ENDPOINT` points to your API

### API Timeouts
1. Increase `PUBLIC_API_TIMEOUT_LIMIT` for frontend requests (default 60s)
2. Increase `API_TIMEOUT_LIMIT` for backend requests (default 10s)
3. Check network connectivity and server performance
