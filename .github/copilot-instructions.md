# TaskNix AI Contribution Guide

This guide helps AI agents understand the TaskNix codebase structure and contribute effectively.

## Project Overview

TaskNix is a Jekyll-based product review site focusing on productivity tools. The site uses:
- Jekyll for static site generation
- SCSS for styling with CSS custom properties
- Markdown for content
- Liquid templates for dynamic content

## Key File Structure

```
tasknix/
├── _pages/          # Static pages
├── _posts/          # Product reviews
├── _layouts/        # Page templates
├── _includes/       # Reusable components
├── assets/
│   └── css/        # Stylesheets
└── Drafts/         # Draft reviews
```

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
- CSS custom properties in `:root`
- Mobile-first responsive design
- BEM-like naming: `.category-card`, `.review-preview`
- CSS sections marked with `// =================`

### Markdown Formatting
- Use proper heading hierarchy (h1 → h2 → h3)
- Add `{: .class-name}` for styling images
- Include `alt` text for all images
- Use `---` for section breaks

## Common Tasks

### Adding a New Review
1. Create file in `_posts/` with correct date format
2. Copy frontmatter template
3. Follow standard section structure
4. Add images to `/images/`
5. Test locally before committing

### Updating Categories
1. Add new category to `_config.yml`
2. Create category page in `_pages/`
3. Update homepage grid in `index.md`
4. Add category to navigation if major

### Style Updates
1. Locate relevant section in `style.scss`
2. Follow existing CSS custom property usage
3. Add responsive breakpoints as needed
4. Test across device sizes

## Best Practices

1. Keep review formats consistent
2. Use emoji prefixes for major sections
3. Include specific examples in reviews
4. Maintain proper heading hierarchy
5. Follow mobile-first responsive design
6. Use CSS custom properties for theming
7. Keep image sizes optimized

## Testing Changes

1. Check mobile responsiveness
2. Verify dark mode appearance
3. Test accessibility features
4. Validate links and references
5. Check category organization
