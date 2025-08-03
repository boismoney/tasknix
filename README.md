> March, 2016: If you're on an old version of Jekyll Now and run into a) build warnings or b) syntax highlighting issues caused by [Jekyll 3 and GitHub Pages updates](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0), just :sparkles:[update your _config.yml](https://github.com/barryclark/jekyll-now/pull/445/files):sparkles: and you'll be set!

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
├── _sass/            # SCSS partials
├── assets/           # Images, CSS, JS
├── images/           # Site images
├── _layouts/         # Page templates
├── _config.yml       # Jekyll configuration
└── style.scss        # Main stylesheet
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
---
```

### Adding New Categories

1. Create a new page in `_pages/` with proper permalink
2. Add category to navigation in `_layouts/default.html`
3. Update homepage category grid

## 🎨 Styling

- Main styles: `style.scss` and `assets/css/main.scss`
- Component styles in `_sass/` directory
- CSS Variables for theming in `:root`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 1200px
- Grid system using CSS Grid and Flexbox

## 🔍 SEO Features

- Jekyll SEO Tag plugin
- Open Graph meta tags
- Structured data for reviews
- Optimized images with lazy loading

## 🚀 Deployment

The site is configured for GitHub Pages deployment. Push to main branch to deploy.

## 📧 Contact

- Website: https://tasknix.com
- Email: hello@tasknix.com
## Questions?

[Open an Issue](https://github.com/barryclark/jekyll-now/issues/new) and let's chat!

## Other forkable themes

You can use the [Quick Start](https://github.com/barryclark/jekyll-now#quick-start) workflow with other themes that are set up to be forked too! Here are some of my favorites:

- [Hyde](https://github.com/poole/hyde) by MDO
- [Lanyon](https://github.com/poole/lanyon) by MDO
- [mojombo.github.io](https://github.com/mojombo/mojombo.github.io) by Tom Preston-Werner
- [Left](https://github.com/holman/left) by Zach Holman
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose
- [Skinny Bones](https://github.com/mmistakes/skinny-bones-jekyll) by Michael Rose

## Credits

- [Jekyll](https://github.com/jekyll/jekyll) - Thanks to its creators, contributors and maintainers.
- [SVG icons](https://github.com/neilorangepeel/Free-Social-Icons) - Thanks, Neil Orange Peel. They're beautiful.
- [Solarized Light Pygments](https://gist.github.com/edwardhotchkiss/2005058) - Thanks, Edward.
- [Joel Glovier](http://joelglovier.com/writing/) - Great Jekyll articles. I used Joel's feed.xml in this repository.
- [David Furnes](https://github.com/dfurnes), [Jon Uy](https://github.com/jonuy), [Luke Patton](https://github.com/lkpttn) - Thanks for the design/code reviews.
- [Bart Kiers](https://github.com/bkiers), [Florian Simon](https://github.com/vermluh), [Henry Stanley](https://github.com/henryaj), [Hun Jae Lee](https://github.com/hunjaelee), [Javier Cejudo](https://github.com/javiercejudo), [Peter Etelej](https://github.com/etelej), [Ben Abbott](https://github.com/jaminscript), [Ray Nicholus](https://github.com/rnicholus), [Erin Grand](https://github.com/eringrand), [Léo Colombaro](https://github.com/LeoColomb), [Dean Attali](https://github.com/daattali), [Clayton Errington](https://github.com/cjerrington), [Colton Fitzgerald](https://github.com/coltonfitzgerald), [Trace Mayer](https://github.com/sunnankar) - Thanks for your [fantastic contributions](https://github.com/barryclark/jekyll-now/commits/master) to the project!

## Contributing

Issues and Pull Requests are greatly appreciated. If you've never contributed to an open source project before I'm more than happy to walk you through how to create a pull request.

You can start by [opening an issue](https://github.com/barryclark/jekyll-now/issues/new) describing the problem that you're looking to resolve and we'll go from there.

I want to keep Jekyll Now as minimal as possible. Every line of code should be one that's useful to 90% of the people using it. Please bear that in mind when submitting feature requests. If it's not something that most people will use, it probably won't get merged. :guardsman:
