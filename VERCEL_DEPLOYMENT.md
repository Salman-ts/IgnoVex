# Vercel Deployment & Security Guide

This guide will walk you through pushing your cleaned IgnoVex codebase to GitHub and securely deploying it to Vercel without exposing any vulnerabilities.

## Phase 1: Pushing to GitHub Securely

Before deploying, you must push your code to a GitHub repository. We have already cleaned the codebase and configured `.gitignore` to prevent your `.env.local` file (which contains your secret keys) from being uploaded.

1. **Initialize Git (if not already done)**
   Open your terminal in the project folder (`ignovex`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for production deployment"
   ```
2. **Create a GitHub Repository**
   - Go to [GitHub.com](https://github.com/) and create a new repository (leave it empty, do not add a README or `.gitignore` from GitHub).
3. **Push the Code**
   Copy the commands provided by GitHub to push an existing repository, which look like this:
   ```bash
   git remote add origin https://github.com/YourUsername/YourRepoName.git
   git branch -M main
   git push -u origin main
   ```

> [!WARNING]
> **Check your GitHub Repo:** After pushing, look at your repository on GitHub. Make sure that `.env.local` is **NOT** there. If it is not there, your secrets are safe!

---

## Phase 2: Deploying to Vercel

1. **Log in to Vercel**
   - Go to [Vercel.com](https://vercel.com/) and log in with your GitHub account.
2. **Import Project**
   - Click **Add New...** -> **Project**.
   - Find your newly created GitHub repository in the list and click **Import**.
3. **Configure the Project**
   - **Framework Preset**: Vercel will automatically detect `Next.js`. Leave this as is.
   - **Root Directory**: Leave as `./`.

> [!IMPORTANT]
> **Environment Variables:** This is the most critical step for security. Because we correctly ignored your `.env.local` file, Vercel does not know your API keys yet. You must enter them manually in the Vercel dashboard so they are injected securely at build time.

4. **Add Environment Variables**
   Open the **Environment Variables** section in the Vercel deployment screen and copy/paste your keys exactly as they appear in your local `.env.local` file:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_test_...` (or live key)
   - `CLERK_SECRET_KEY` = `sk_test_...` (or live key)
   - `RESEND_API_KEY` = `re_...`

5. **Deploy**
   - Click the **Deploy** button. Vercel will now build your application.

---

## Phase 3: Post-Deployment Configuration

Once Vercel finishes building (usually takes 1-2 minutes), you will get a production URL (e.g., `https://ignovex.vercel.app`).

To make sure authentication works on production:

1. **Update Clerk Settings**
   - Go to your [Clerk Dashboard](https://dashboard.clerk.com/).
   - Navigate to **Domains** or **API Keys** depending on your Clerk version, and ensure your new Vercel URL is added as an allowed origin/domain for your production instance.
2. **Update Resend Settings (Optional)**
   - If you are moving out of testing in Resend, ensure you have verified your domain in the [Resend Dashboard](https://resend.com/) so you can send emails to users other than yourself.

## Security Checklist Complete 🛡️
- [x] Admin Dashboard authorization is completely hardcoded into the server logic.
- [x] Unused dependencies and database files removed.
- [x] `next.config.ts` enforces strict HTTP security headers (CSP, HSTS).
- [x] Secret API keys safely isolated from the codebase via `.env` / Vercel secrets.
