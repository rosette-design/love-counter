# GitHub Pages Deployment Guide for Love Counter

This guide will walk you through deploying your Love Counter app to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your Love Counter project code

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account.
2. Click on the "+" icon in the top right corner and select "New repository".
3. Name your repository (e.g., "love-counter").
4. Choose whether to make it public or private.
5. Click "Create repository".

## Step 2: Push Your Code to GitHub

If you haven't already initialized git in your project:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add the remote GitHub repository
git remote add origin https://github.com/yourusername/love-counter.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Make sure your repository contains the `.github/workflows/deploy.yml` file that was created.
2. Go to your GitHub repository settings:
   - Click on "Settings" in your repository
   - Scroll down to "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source
3. GitHub will automatically build and deploy your site when you push to the main branch.

### Method 2: Manual Deployment

If you prefer to deploy manually:

1. Update the Next.js configuration in `next.config.ts`:
   ```typescript
   basePath: '/love-counter', // Replace with your repository name
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Deploy to the gh-pages branch:
   ```bash
   # Install gh-pages package if you haven't
   npm install -g gh-pages

   # Deploy
   gh-pages -d out
   ```

4. In your repository settings, set GitHub Pages to use the `gh-pages` branch.

## Step 4: Access Your Deployed Site

Your site will be available at:
- `https://yourusername.github.io/love-counter/` (replace with your GitHub username and repository name)

## Troubleshooting

### If your site doesn't load properly:

1. Make sure you've correctly set the `basePath` in `next.config.ts` to match your repository name.
2. Check if all assets are being loaded with the correct paths.
3. Inspect the browser console for any errors.
4. Verify that GitHub Pages is correctly enabled in your repository settings.

### If images don't load:

1. Make sure all image paths start with the correct base path.
2. Check that images are properly placed in the `public` directory.
3. Consider using absolute URLs for images from external sources.

## Updating Your Deployed Site

Any time you push changes to your main branch, GitHub Actions will automatically rebuild and deploy your site. If you're using manual deployment, you'll need to run the build and deployment commands again. 