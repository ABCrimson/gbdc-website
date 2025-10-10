# Environment Setup Guide

This guide will help you configure all required environment variables for the Great Beginnings Day Care website.

## Table of Contents

- [Quick Start](#quick-start)
- [Google Maps Setup](#google-maps-setup)
- [EmailJS Setup](#emailjs-setup)
- [Error Tracking (Optional)](#error-tracking-optional)
- [Analytics (Optional)](#analytics-optional)
- [Validation](#validation)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in required values** (see sections below)

3. **Restart your development server:**
   ```bash
   bun run dev
   ```

4. **Verify validation:**
   - Check console for ✅ "Environment variables validated successfully"
   - Or ❌ error messages if something is missing

---

## Google Maps Setup

The website uses Google Maps for:
- Interactive map on Contact page
- Photo gallery from Google Places

### Step 1: Get an API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project or select existing one
3. Click **"Create Credentials"** → **"API Key"**
4. Copy your API key

### Step 2: Enable Required APIs

Enable these APIs in your Google Cloud project:

1. **Maps JavaScript API**
   - Go to [APIs & Services → Library](https://console.cloud.google.com/apis/library)
   - Search for "Maps JavaScript API"
   - Click **"Enable"**

2. **Places API**
   - Search for "Places API"
   - Click **"Enable"**

### Step 3: Restrict Your API Key (Production)

**⚠️ Important for production:**

1. Go to [API Credentials](https://console.cloud.google.com/apis/credentials)
2. Click on your API key
3. Under **"Application restrictions"**:
   - Select **"HTTP referrers"**
   - Add your domains:
     ```
     https://yourdomain.com/*
     https://www.yourdomain.com/*
     localhost:3000/*  (for development)
     ```

4. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Choose: Maps JavaScript API, Places API

### Step 4: Get Place ID for Photo Gallery

1. Use [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for "Great Beginnings Day Care, Roselle IL"
3. Copy the Place ID (starts with `ChIJ...`)

### Step 5: Create Map ID (Optional - for Advanced Markers)

1. Go to [Map Management](https://console.cloud.google.com/google/maps-apis/studio/maps)
2. Click **"Create Map ID"**
3. Choose **"JavaScript"** platform
4. Copy the Map ID

### Environment Variables

Add to `.env.local`:

```env
# Required
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...your_key_here

# Required for photo gallery
NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID=ChIJ...your_place_id

# Optional - for 3D markers
NEXT_PUBLIC_GOOGLE_MAP_ID=your_map_id
```

---

## EmailJS Setup

The website uses EmailJS for:
- Contact form submissions
- Tour request form submissions

### Step 1: Create Account

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Free tier includes 200 emails/month

### Step 2: Add Email Service

1. Go to **Email Services** → **Add New Service**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the connection steps
4. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates

#### Contact Form Template

1. Go to **Email Templates** → **Create New Template**
2. Name it: "Contact Form"
3. Template content:

```
From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

4. Copy the **Template ID** (e.g., `template_contact`)

#### Tour Request Template

1. Create another template: "Tour Request"
2. Template content:

```
Tour Request from {{parent_name}}

Contact Information:
- Email: {{parent_email}}
- Phone: {{parent_phone}}

Child Information:
- Child's Name: {{child_name}}
- Age: {{child_age}}
- Preferred Start Date: {{start_date}}

Additional Notes:
{{additional_notes}}
```

3. Copy the **Template ID** (e.g., `template_tour`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

### Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_contact
NEXT_PUBLIC_EMAILJS_TOUR_TEMPLATE_ID=template_tour
```

---

## Error Tracking (Optional)

### Option 1: Sentry

1. Sign up at [sentry.io](https://sentry.io)
2. Create a new project (Next.js)
3. Copy your DSN

```env
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
SENTRY_AUTH_TOKEN=your_auth_token
```

4. Install Sentry:
```bash
bun add @sentry/nextjs
bunx @sentry/wizard@latest -i nextjs
```

### Option 2: LogRocket

1. Sign up at [logrocket.com](https://logrocket.com)
2. Create a new project
3. Copy your App ID

```env
NEXT_PUBLIC_LOGROCKET_APP_ID=your_app_id
```

4. Install LogRocket:
```bash
bun add logrocket
```

---

## Analytics (Optional)

### Vercel Analytics

If deployed to Vercel, analytics are automatically enabled.

For local development or self-hosted:

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

Install the package:
```bash
bun add @vercel/analytics
```

---

## Validation

The project includes automatic environment validation using Zod.

### How it Works

1. **Development Mode:**
   - Validation runs on module load
   - Shows warnings but continues execution
   - Helpful error messages in console

2. **Production Mode:**
   - Validation runs via `instrumentation.ts`
   - **Fails fast** if any required variables are missing
   - Prevents deployment with invalid config

### Validation Messages

✅ **Success:**
```
✅ Environment variables validated successfully
✅ Server environment validation successful
```

❌ **Error:**
```
❌ Environment validation failed:

📝 Missing required environment variables:
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

💡 Copy .env.example to .env.local and fill in the values
```

### Manual Validation

Check validation status:

```typescript
import { validateEnv } from '@/lib/env'

try {
  const env = validateEnv()
  console.log('All environment variables are valid')
} catch (error) {
  console.error('Validation failed:', error)
}
```

---

## Troubleshooting

### Google Maps Not Loading

**Error:** "InvalidKeyMapError"

**Solutions:**
1. Check API key is correct in `.env.local`
2. Verify Maps JavaScript API is enabled
3. Check API key restrictions (domain/IP whitelist)
4. Restart dev server after adding env variables

### EmailJS Not Sending

**Error:** Form submits but no email received

**Solutions:**
1. Verify all 4 EmailJS variables are set
2. Check template IDs match exactly (case-sensitive)
3. Test service connection in EmailJS dashboard
4. Check spam folder
5. Verify email service is connected (Gmail, Outlook)

### Photos Not Loading in Gallery

**Error:** No photos appear in gallery

**Solutions:**
1. Verify `NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID` is set
2. Check Places API is enabled
3. Ensure business has public photos on Google Maps
4. Test Place ID in [Place Details](https://developers.google.com/maps/documentation/javascript/examples/place-details)

### Environment Variables Not Loading

**Common issues:**

1. **File name:** Must be `.env.local` (not `.env`)
2. **No quotes:** Values should NOT be in quotes
   ```env
   # ✅ Correct
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza123abc

   # ❌ Wrong
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIza123abc"
   ```
3. **Restart required:** Always restart dev server after changing `.env.local`
4. **Git ignored:** `.env.local` should be in `.gitignore`

### Validation Fails in Production

**Error:** Build fails with environment validation error

**Solutions:**

1. **Vercel/Netlify:**
   - Add all env vars in dashboard
   - Redeploy after adding variables

2. **Self-hosted:**
   - Ensure `.env.local` is copied to server
   - Or set environment variables in hosting platform
   - Check file permissions (readable by Node.js)

---

## Security Best Practices

### ✅ DO:

- ✅ Use `.env.local` for local development
- ✅ Set env vars in hosting platform dashboard for production
- ✅ Restrict API keys to specific domains in production
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Rotate API keys periodically

### ❌ DON'T:

- ❌ Commit `.env.local` to Git
- ❌ Share API keys publicly
- ❌ Use production keys in development
- ❌ Leave API keys unrestricted
- ❌ Hardcode sensitive values in code

---

## Next Steps

After completing environment setup:

1. ✅ Verify all variables are set correctly
2. ✅ Test contact form submission
3. ✅ Test tour request form
4. ✅ Verify map loads on Contact page
5. ✅ Check photo gallery displays images
6. ✅ Run production build: `bun run build`

**Need help?** Check our [main README](../README.md) or create an issue.
