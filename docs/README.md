# Documentation

Welcome to the Great Beginnings Day Care website documentation.

## 📚 Available Guides

### [Environment Setup](./ENVIRONMENT_SETUP.md)
Complete guide for configuring all required environment variables:
- Google Maps API setup
- EmailJS configuration
- Error tracking (Sentry/LogRocket)
- Analytics integration
- Troubleshooting guide

### [Testing Guide](./TESTING.md)
Comprehensive testing documentation:
- Unit & Component tests with Vitest
- E2E tests with Playwright
- Visual regression testing
- CI/CD integration
- Best practices & troubleshooting

## 🚀 Quick Links

### Getting Started
1. [Environment Setup](./ENVIRONMENT_SETUP.md) - **Start here!**
2. [Main README](../README.md) - Project overview
3. [.env.example](../.env.example) - Environment variables template

### Development
- **Validation:** Environment variables are validated automatically via `lib/env.ts`
- **Instrumentation:** Server startup validation via `instrumentation.ts`
- **Type Safety:** Full TypeScript support with Zod schemas

## 🔧 Common Tasks

### Setup Environment Variables
```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
# See ENVIRONMENT_SETUP.md for detailed instructions

# Restart dev server
bun run dev
```

### Verify Environment
```bash
# Check console for:
✅ Environment variables validated successfully
✅ Server environment validation successful
```

### Troubleshooting
See [Troubleshooting Section](./ENVIRONMENT_SETUP.md#troubleshooting) in Environment Setup guide.

## 📝 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Zod Documentation](https://zod.dev/)

---

**Need help?** Create an issue or check the troubleshooting guides.
