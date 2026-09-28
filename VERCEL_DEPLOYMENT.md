# Deploying Talha Khan Portfolio to Vercel (100% Free & Fast)

Vercel provides free, instant hosting for React + Vite projects with automatic SSL certificates and custom domain support.

---

## Method 1: Deploy via GitHub (Recommended - Automatic Updates)

1. **Push your project to GitHub**:
   - Go to [GitHub](https://github.com/new) and create a repository named `TalhaPortfolio`.
   - Run these commands in your project terminal:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio commit"
     git branch -M main
     git remote add origin https://github.com/TalhaKhan1419/TalhaPortfolio.git
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **Sign Up** / **Log In** using your **GitHub account**.
   - Click **"Add New..."** -> **"Project"**.
   - Import your `TalhaPortfolio` repository.

3. **Deploy**:
   - Vercel will automatically detect **Vite** framework settings.
   - Click **"Deploy"**.
   - In ~30 seconds, your site will be live at `https://talhaportfolio.vercel.app`!

---

## Method 2: Deploy directly via Terminal (No GitHub required)

Run this single command in your project terminal:
```bash
npx vercel
```
Follow the quick prompts (Log in -> Confirm project root -> Deploy).

---

## Vercel Settings (Auto-Detected)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
