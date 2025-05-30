# Love Counter

A beautiful, modern, and customizable counter to celebrate your love journey. The app displays how long you've been in love in days, hours, minutes, and seconds.

## Features

- 💕 Customizable names for you and your partner
- 📅 Set your relationship start date
- 🖼️ Custom background image support
- ⏱️ Real-time counter updates
- 💫 Modern, sleek design with Tailwind CSS
- 📱 Fully responsive for all devices

## Live Demo

Access the live demo [here](#) (replace with your deployed GitHub Pages URL).

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/love-counter.git
   cd love-counter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. Fork this repository or push your code to your GitHub repository.

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

3. The GitHub Action workflow will automatically deploy your app whenever you push to the main branch.

### Method 2: Manual Deployment

1. Build the static files:
   ```bash
   npm run build
   ```

2. Configure your repository for GitHub Pages:
   - Create a new branch called `gh-pages`
   - Push the contents of the `out` directory to this branch

3. In your repository settings, set GitHub Pages to use the `gh-pages` branch.

## Customization

### Background Images

You can use:
1. Your own images by placing them in the `public/backgrounds` directory
2. Direct URLs to images from the web
3. The default gradient background

### Setting a Custom Base Path

If you're deploying to a subdirectory (e.g., `username.github.io/love-counter`), uncomment and update the `basePath` in `next.config.ts`:

```typescript
basePath: '/love-counter',
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by all love stories around the world
- Special thanks to the open-source community
