# TaskNix - Productivity Tools Review Site

TaskNix is a Jekyll-based website providing expert reviews and comparisons of productivity tools, project management software, and automation platforms.

## 🚀 Quick Start

1. **Install Jekyll and dependencies:**
   ```bash
   gem install jekyll bundler
   bundle install
   ```

2. **Run locally:**
   ```bash
   bundle exec jekyll serve
   ```

3. **Visit:** http://localhost:4000

## 📁 Project Structure

```
tasknix/
├── _pages/           # Static pages (about, categories, etc.)
├── _posts/           # Blog posts and reviews
├── _layouts/         # Page templates
├── _includes/        # Reusable components
├── assets/           # CSS, JS, images
│   └── css/          # Stylesheets
├── images/           # Site images
├── _config.yml       # Jekyll configuration
└── index.md          # Homepage
```

## 🔧 Development

### Adding New Reviews

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-tool-name-review.md`
2. Use the following front matter template:

```yaml
---
layout: post
title: "Tool Name Review 2025"
date: 2025-MM-DD
rating: 4.5
price_range: "FREEMIUM"
categories: ["category"]
tags: ["tool-name", "review", "2025"]
featured_image: /images/tool-screenshot.jpg
excerpt: "Brief description of the tool review."
seo_title: "Tool Name Review 2025 - Pros, Cons & Analysis"
meta_description: "Comprehensive review of Tool Name with testing results and comparison."
last_updated: 2025-MM-DD
permalink: /tool-name-review/
---
```

### Adding New Categories

1. Create a new page in `_pages/` with proper permalink
2. Add category to navigation in `_config.yml`
3. Update homepage category grid in `index.md`

## 🎨 Styling

- Main styles: `assets/css/style.scss` 
- Additional components: `assets/css/main.scss`
- CSS Variables for theming in `:root`
- Jekyll processes SCSS automatically

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 1200px
- Grid system using CSS Grid and Flexbox
- All review images are responsive with `.review-img` class

## 🔍 SEO Features

- Jekyll SEO Tag plugin
- Open Graph meta tags
- Structured data for reviews
- Optimized images with lazy loading
- Custom permalinks for clean URLs

## 🚀 Deployment

The site is configured for GitHub Pages deployment with the Minima theme. Push to main branch to deploy.

### Key Configuration
- Theme: `jekyll/minima` (remote theme)
- Plugins: SEO tag, feed generation, sitemap
- Build: Automatic via GitHub Actions

## 📊 Current Content

- **{{ site.posts.size }} tool reviews** across productivity categories
- **8 category pages** with curated tool lists
- **Professional review format** with ratings, pros/cons, and detailed analysis

## 📧 Contact

- Website: https://tasknix.com
- Repository: https://github.com/username/tasknix

## 🛠️ Technical Stack

- **Jekyll 3.10.0** with GitHub Pages
- **Minima theme** with custom overrides
- **SCSS** for styling with CSS custom properties
- **Responsive design** with mobile-first approach
- **SEO optimized** with structured data

## 📝 Content Guidelines

### Review Structure
1. Quick verdict with rating
2. Pros vs Cons table
3. Detailed feature analysis
4. Pricing breakdown
5. Competitor comparison
6. Final recommendations

### Image Standards
- Featured images: 1200x630px for social sharing
- Review screenshots: Responsive with `.review-img` class
- Alt text required for all images
- Lazy loading implemented

## 🔄 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your review following the template
4. Test locally with `bundle exec jekyll serve`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with Jekyll and hosted on GitHub Pages. Helping teams find the right productivity tools since 2025.*
