# devlogex.github.io

Personal life tracking website built with Astro. Track goals, achievements, and blog posts.

## 🚀 Features

- **Goal Tracking**: Visual progress bars for personal and professional goals
- **Achievement Timeline**: Chronological feed of accomplishments
- **Blog**: Write long-form posts in Markdown
- **Static Site**: Fast, SEO-friendly, deployed on GitHub Pages

## 📁 Project Structure

```
/
├── src/
│   ├── components/       # React & Astro components
│   ├── content/
│   │   └── posts/       # Blog posts (markdown)
│   ├── data/
│   │   ├── achievements.json  # Achievement entries
│   │   └── goals.json         # Goals with progress
│   ├── layouts/         # Page layouts
│   └── pages/           # Routes
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## 🔧 Usage

### Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Adding Content

#### New Blog Post

Create a new markdown file in `src/content/posts/`:

```markdown
---
title: "My Post Title"
description: "A brief description"
pubDate: 2026-02-22
tags: ["tag1", "tag2"]
---

Your content here...
```

#### Log Achievement

Add to `src/data/achievements.json`:

```json
{
  "id": "4",
  "title": "Your achievement",
  "category": "coding",
  "date": "2026-02-22",
  "description": "Description of what you achieved"
}
```

#### Update Goal Progress

Modify `src/data/goals.json`:

```json
{
  "id": "1",
  "title": "Goal title",
  "target": 100,
  "current": 50,  // Update this value
  ...
}
```

### Deployment

Push to the `main` branch and GitHub Actions will automatically build and deploy to GitHub Pages.

## 📝 Configuration

The site is configured to deploy to `https://devlogex.github.io/`.

To modify:
- Site URL: Edit `site` in `astro.config.mjs`
- Styling: Edit CSS variables in `src/layouts/BaseLayout.astro`
- Navigation: Update nav links in `BaseLayout.astro`

## 🎨 Customization

### Color Scheme

Edit CSS variables in `BaseLayout.astro`:

```css
:root {
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #e2e8f0;
  --color-primary: #3b82f6;
  --color-accent: #10b981;
}
```

### Categories

Add new achievement/goal categories by using them in your data files. Update category colors in `AchievementTimeline.astro` and components as needed.

## 📦 Tech Stack

- [Astro](https://astro.build/) - Static site framework
- [React](https://react.dev/) - For interactive components
- [Bun](https://bun.sh/) - Package manager & runtime
- GitHub Actions - CI/CD
- GitHub Pages - Hosting

## 📄 License

MIT License - Feel free to use this as a template for your own site!
