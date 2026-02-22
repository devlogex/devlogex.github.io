# Setup Guide

## Initial Setup

Your personal life tracking website is ready! Here's what you need to do to deploy it to GitHub Pages.

## 📋 Prerequisites

- GitHub account (devlogex)
- Git installed locally
- Bun installed (already set up)

## 🚀 Deployment Steps

### 1. Create GitHub Repository

Go to GitHub and create a new repository:
- Repository name: **devlogex.github.io**
- Make it **public** (required for GitHub Pages on free tier)
- Don't initialize with README (we already have one)

### 2. Push Your Code

```bash
# Add all files to git
git add .

# Commit your initial version
git commit -m "Initial commit: Personal life tracking website"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/devlogex/devlogex.github.io.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically deploy your site

### 4. Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- Check the **Actions** tab to see the deployment progress
- Once complete, your site will be live at: **https://devlogex.github.io/**

## 📝 Daily Usage

### Updating Goal Progress

Edit `src/data/goals.json`:
```json
{
  "id": "1",
  "title": "Read 24 books in 2026",
  "target": 24,
  "current": 5,  // Increment this
  ...
}
```

### Adding New Achievement

Add to `src/data/achievements.json`:
```json
{
  "id": "new-id",
  "title": "Completed a marathon",
  "category": "fitness",
  "date": "2026-02-22",
  "description": "Ran my first marathon!"
}
```

### Writing a Blog Post

Create `src/content/posts/my-new-post.md`:
```markdown
---
title: "My New Post"
description: "A quick summary"
pubDate: 2026-02-22
tags: ["personal", "reflection"]
---

Your content here...
```

### Deploy Changes

```bash
git add .
git commit -m "Update goals and add new achievement"
git push
```

Your site will automatically rebuild and deploy!

## 🛠️ Local Development

```bash
# Start dev server
bun run dev

# Visit http://localhost:4321/

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🎨 Customization

See the main [README.md](./README.md) for customization options including:
- Color scheme
- Navigation
- Categories
- Adding new sections

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## ❓ Troubleshooting

### GitHub Actions fails
- Check that the repository is public
- Ensure GitHub Pages is set to "GitHub Actions" source
- Check Actions tab for error messages

### Changes not deploying
- Make sure you committed and pushed your changes
- Check the Actions tab for deployment status
- Clear browser cache

### Local dev server not working
- Run `bun install` to ensure dependencies are installed
- Check port 4321 is not in use
- Try `bun run build` to check for errors

---

**You're all set!** 🎉 Start tracking your life journey!
