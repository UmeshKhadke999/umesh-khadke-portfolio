# Umesh Santosh Khadke — Corporate Portfolio Website

Official personal corporate identity website showcasing U.S. Residential Mortgage Operations experience, Credit Analysis, Financial Analytics, and Business Intelligence projects.

## 1. Setup & Customization Before Deployment
1. **Update Contact Placeholders (`index.html`):**
   - Replace `umesh.khadke.placeholder@example.com` in Section 9 with your active professional email address.
   - Replace `https://www.linkedin.com/in/your-linkedin-handle` with your actual LinkedIn profile URL.
2. **Add Your PDF Resume:**
   - Export your updated resume as a PDF named `Umesh_Khadke_Resume.pdf` and place it inside the `assets/` folder.
3. **Update Canonical URLs (`index.html`, `robots.txt`, `sitemap.xml`):**
   - Replace `https://yourusername.github.io/` with your actual GitHub Pages URL once deployed.

## 2. Free Deployment via GitHub Pages
1. Create a free account on [GitHub](https://github.com).
2. Create a new public repository named `<your-username>.github.io` (for a root subdomain) or `portfolio`.
3. Upload all project files (`index.html`, `404.html`, `styles.css`, `script.js`, `data.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`, and `assets/`).
4. Navigate to **Repository Settings → Pages**.
5. Under **Build and deployment → Source**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
6. Your site will go live automatically at `https://<your-username>.github.io/` within 1–2 minutes with free HTTPS.

## 3. Adding Future Projects or Insights Articles
- Open `data.js`.
- Copy any existing object inside `PROJECTS_DATA` or `INSIGHTS_DATA`, paste it at the top of the array, update the text/metrics, and save. The UI and interactive modals update automatically.

## 4. Pre-Launch Testing Checklist
- [ ] Verify desktop (1280px+), tablet (768px), and mobile (375px) responsive layouts.
- [ ] Test mobile hamburger menu and all anchor navigation links (`#about` through `#contact`).
- [ ] Click all 3 category filter buttons and open each of the 12 Case Study modals.
- [ ] Click **Download PDF Resume** and confirm `assets/Umesh_Khadke_Resume.pdf` downloads cleanly.
- [ ] Submit the Contact form and confirm it launches your default email client with pre-filled subject and body.
- [ ] Verify `404.html` renders when navigating to a non-existent path on GitHub Pages.
