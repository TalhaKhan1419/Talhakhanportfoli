# Deploying Talha Khan Portfolio to Hostinger

This project is built using React + Vite and generates a production-ready `dist` folder that can be directly hosted on Hostinger Web Hosting or Hostinger VPS.

---

## Quick Deployment Steps (Hostinger hPanel)

1. **Build the Project**
   Open your terminal in the project directory and run:
   ```bash
   npm run build
   ```
   This creates a optimized `dist/` folder in your project root.

2. **Zip the `dist` Contents**
   - Open the `dist` folder.
   - Select all files inside `dist` (`index.html`, `assets/`, `resume.pdf`, `favicon.svg`, etc.).
   - Compress them into a `.zip` file (e.g., `portfolio-dist.zip`).

3. **Upload to Hostinger**
   - Log in to your [Hostinger hPanel](https://hpanel.hostinger.com).
   - Go to **Websites** -> Select your domain -> Click **File Manager**.
   - Navigate to `public_html` directory.
   - Upload `portfolio-dist.zip` and extract it directly inside `public_html`.

4. **Setup `.htaccess` for React SPA Routing (Recommended)**
   Create a file named `.htaccess` inside `public_html` with the following content to handle client-side routing smoothly:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **Replacing the Resume PDF**
   To update your resume anytime:
   - Replace `public/resume.pdf` in your project codebase and rebuild, **OR**
   - Directly upload your updated `resume.pdf` into Hostinger's `public_html/` folder!

---

## Local Development & Testing

To test locally before deploying:
```bash
npm run dev
```

To preview the production build locally:
```bash
npm run preview
```
