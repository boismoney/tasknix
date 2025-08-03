# TaskNix AI Contribution Guide

This guide helps AI agents understand the TaskNix codebase structure and contribute effectively.

## Project Overview

TaskNix is a Jekyll-based product review site focusing on productivity tools. The site uses:
- Jekyll for static site generation with GitHub Pages
- SCSS for styling with CSS custom properties
- Markdown for content
- Liquid templates for dynamic content
- Remote theme: jekyll/minima (with custom overrides)

## Key File Structure

```
tasknix/
├── _pages/          # Static pages
├── _posts/          # Product reviews (YYYY-MM-DD-tool-name-review.md)
├── _layouts/        # Page templates
├── _includes/       # Reusable components (header.html, etc.)
├── assets/
│   ├── css/
│   │   ├── style.scss    # Main theme stylesheet (774 lines)
│   │   └── main.scss     # Additional components
│   └── images/      # Site images and graphics
├── _sass/           # SCSS partials
│   ├── mixins.scss
│   ├── _highlights.scss
│   └── _svg-icons.scss
└── Drafts/         # Draft reviews
```

## Critical Technical Requirements

### 1. Jekyll & GitHub Pages Compatibility
- **ALWAYS** include Jekyll front matter in SCSS files:
  ```scss
  ---
  ---
  // Your SCSS content here
  ```
- Use `remote_theme: jekyll/minima` instead of local theme for GitHub Pages
- Set `header_pages:` (empty) in `_config.yml` to disable auto-navigation

### 2. Navigation System
- **DO NOT** rely on minima's auto-generated navigation
- Use custom `_includes/header.html` for consistent navigation
- Curated menu: Reviews | Categories | Comparisons | About | Contact
- Override minima navigation with custom header include

### 3. CSS Architecture
- Main stylesheet: `assets/css/style.scss` (Jekyll processed)
- Additional components: `assets/css/main.scss`
- Use CSS custom properties for theming (`:root` variables)
- Mobile-first responsive design
- Component-based structure (BEM-like naming)

## Content Patterns

### Review Posts
- Location: `_posts/YYYY-MM-DD-tool-name-review.md`
- Required frontmatter:
```yaml
---
layout: post
title: "Tool Name Review YYYY: Complete Analysis"
date: YYYY-MM-DD
rating: 4.5  # Scale of 1-5
price_range: "FREEMIUM"  # FREE, FREEMIUM, PREMIUM
categories: ["category1", "category2"]
tags: ["tool-name", "review", "YYYY"]
featured_image: url
excerpt: "Brief description"
seo_title: "Tool Name Review YYYY - Pros, Cons & Analysis"
meta_description: "Comprehensive review..."
last_updated: YYYY-MM-DD
permalink: /tool-name-review/
---
```

### Category Pages
- Location: `_pages/category-name.md`
- Required frontmatter:
```yaml
---
layout: default
title: "Category Name"
description: "Category description"
permalink: /category-name/
date: YYYY-MM-DD
---
```

### Page Structure
Standard sections in review pages:
1. Quick Verdict (🎯)
2. Overview (📚)
3. Features (✨)
4. Pricing (💰)
5. Setup (🛠️)
6. Performance (📈)
7. Limitations (🤔)
8. Comparisons (🔄)
9. Conclusion (🏆)

## Style Conventions

### SCSS Organization
- CSS custom properties in `:root` (always use variables, not hard-coded values)
- Mobile-first responsive design with `@media` queries
- Component naming: `.category-card`, `.review-preview`, `.button.secondary`
- CSS sections marked with `// =================`
- Import structure:
  ```scss
  @import "mixins";
  @import "highlights";  
  @import "svg-icons";
  ```

### Critical CSS Classes
**Homepage Components:**
- `.category-grid` - 8-column grid for tool categories
- `.category-card` - Individual category cards with hover effects
- `.category-icon` - Emoji icons for categories
- `.review-preview` - Latest reviews section
- `.affiliate-disclosure` - Transparency notice with dismiss button

**Layout & Navigation:**
- `.site-header` - Main navigation header
- `.wrapper` - Content container (max-width: 1200px)
- `.container` - Content wrapper (max-width: 800px for posts)
- `.nav-item` - Navigation links

**Interactive Elements:**
- `.button` - Primary buttons
- `.button.secondary` - Outlined buttons
- `.skip-link` - Accessibility skip navigation

### Markdown Formatting
- Use proper heading hierarchy (h1 → h2 → h3)
- Add `{: .class-name}` for styling images
- Include `alt` text for all images
- Use `---` for section breaks
- Hero images: `{: .hero-image loading="lazy" alt="description"}`

## Common Tasks & Solutions

### Adding a New Review
1. Create file in `_posts/` with correct date format
2. Copy frontmatter template with all required fields
3. Follow standard section structure with emoji prefixes
4. Add images to `/images/` directory
5. Test locally before committing

### Fixing CSS Issues
1. **Always check Jekyll front matter** in SCSS files first
2. Verify CSS custom properties are defined in `:root`
3. Check for duplicate CSS rules or conflicting selectors
4. Ensure responsive design uses mobile-first approach
5. Test with browser dev tools before committing

### Navigation Problems
- Check `_config.yml` has `header_pages:` (empty)
- Verify `_includes/header.html` exists and is being used
- Ensure `_layouts/default.html` includes custom header
- Never rely on minima's automatic page generation

### Updating Categories
1. Add new category to homepage `category-grid`
2. Create category page in `_pages/`
3. Update main navigation if major category
4. Add category to post frontmatter taxonomy

## Troubleshooting Guide

### Site Build Failures
1. **SCSS compilation errors**: Check Jekyll front matter in CSS files
2. **Missing imports**: Verify `_sass/` files exist and are properly named
3. **Layout errors**: Ensure layouts inherit from `default.html`
4. **Navigation broken**: Check custom header include and config settings

### Styling Issues
1. **Components not appearing**: Check CSS class names match HTML
2. **Mobile layout broken**: Verify mobile-first media queries
3. **Colors/fonts inconsistent**: Use CSS custom properties, not hard-coded values
4. **Hover effects not working**: Check transition properties and browser compatibility

### GitHub Pages Deployment
1. **CSS not loading**: Ensure Jekyll front matter in SCSS files
2. **Navigation auto-generating**: Set `header_pages:` in `_config.yml`
3. **Theme conflicts**: Use custom includes instead of theme defaults
4. **Build time errors**: Check Jekyll and plugin compatibility

## Best Practices

### Code Quality
1. Always use CSS custom properties for colors, spacing, fonts
2. Follow mobile-first responsive design principles
3. Keep CSS organized with clear section comments
4. Use semantic HTML with proper accessibility attributes
5. Test across different screen sizes and browsers

### Content Standards
1. Keep review formats consistent across all posts
2. Use emoji prefixes for major sections (🎯, 📚, ✨, etc.)
3. Include specific examples and real-world testing data
4. Maintain proper heading hierarchy for SEO
5. Update pricing information monthly

### Performance & SEO
1. Optimize images with proper alt text and lazy loading
2. Use semantic markup and structured data
3. Implement proper meta descriptions and titles
4. Keep page load times under 3 seconds
5. Ensure mobile responsiveness and accessibility

## Testing & Validation

### Before Committing
1. **Local Jekyll build**: `bundle exec jekyll serve`
2. **Mobile responsiveness**: Test with browser dev tools
3. **Accessibility**: Check skip links, keyboard navigation, contrast
4. **CSS validation**: Ensure no syntax errors or conflicts
5. **Content review**: Verify all links work and images load

### GitHub Pages Deployment
1. **Build logs**: Check Actions tab for deployment status
2. **Live site testing**: Verify all pages load correctly
3. **Cross-browser testing**: Test in Chrome, Firefox, Safari
4. **Mobile testing**: Test on actual mobile devices
5. **Performance monitoring**: Check load times and user experience

---

**Last Updated**: August 3, 2025
**Current Site Status**: ✅ Fully functional and deployed
**Key Lessons**: Always use Jekyll front matter, custom navigation includes, and CSS custom properties
