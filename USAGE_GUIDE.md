# Quick Usage Guide

This document provides a concise guide to help you quickly get started with editing website content.

## 📝 Three Steps to Edit Content

### 1. Edit JSON Data Files

All website content is stored in `src/data/` directory:

- **Presentations**: `src/data/presentations.json`
- **Resources**: `src/data/resources.json`
- **Photos**: `src/data/photos.json`

### 2. Preview Locally

```bash
pnpm dev
```

Visit http://localhost:5173 to see changes

### 3. Deploy to Production

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically build and deploy.

## 🎯 Common Operations

### Add a New Presentation

Edit `src/data/presentations.json`:

```json
{
  "id": "unique-id",
  "title": "Presentation Title",
  "description": "Brief description",
  "detailedDescription": "Detailed description (optional)",
  "speaker": "Speaker Name",
  "date": "2024-11-15",
  "status": "upcoming",
  "topics": ["Topic 1", "Topic 2"],
  "slides": [
    {
      "name": "Presentation File.pdf",
      "url": "https://your-link.com/file.pdf",
      "type": "pdf",
      "size": "2.5 MB"
    }
  ],
  "recording": "https://youtube.com/watch?v=xxx",
  "materials": []
}
```

### Add a Learning Resource

Edit `src/data/resources.json`:

```json
{
  "id": "unique-id",
  "title": "Resource Title",
  "description": "Resource description",
  "category": "Programming",
  "url": "https://resource-link.com",
  "fileType": "pdf",
  "fileSize": "3.2 MB",
  "downloadable": true
}
```

**Supported File Types**:
- `pdf`, `doc`, `docx` - Documents
- `ppt`, `pptx` - Presentations
- `xls`, `xlsx` - Spreadsheets
- `image` - Images
- `video` - Videos
- `web` - Web links
- `other` - Other files

### Add a Photo

Edit `src/data/photos.json`:

```json
{
  "id": "unique-id",
  "url": "https://image-url.com/photo.jpg",
  "caption": "Photo caption"
}
```

## 📂 File Upload Recommendations

1. **Use Cloud Storage Services** (Recommended)
   - Google Drive
   - Dropbox
   - OneDrive
   - GitHub Releases

2. **Use Local Files**
   - Place files in `public/files/` directory
   - Reference with `/files/filename.pdf`

## ⚡ Quick Reference

### Presentation Status
- `"upcoming"` - Upcoming
- `"past"` - Past

### Resource Categories
- `"Programming"` - Programming
- `"Algorithms"` - Algorithms
- `"Machine Learning"` - Machine Learning
- `"Web Development"` - Web Development
- You can also create custom categories

### Date Format
- Use: `YYYY-MM-DD`
- Example: `2024-11-15`

## 🔍 Checklist

Before adding content, make sure:

- [ ] JSON format is correct (validate with [JSONLint](https://jsonlint.com/))
- [ ] ID is unique and meaningful
- [ ] Date format is correct
- [ ] File links are accessible
- [ ] All required fields are filled

## 💡 Tips

1. **Test File Links**: Open links in browser before committing to ensure they're accessible
2. **Use Meaningful IDs**: Like `"ml-intro-2024"` instead of `"1"`
3. **Keep Format Consistent**: Refer to example files `*.json.example`
4. **Backup Data**: Backup JSON files before making changes

## 📚 More Information

For detailed documentation, see: [README.md](./README.md)

## ❓ Troubleshooting

1. Check if JSON format is correct
2. Check browser console for errors
3. Refer to example files
4. Contact project maintainer

---

**Remember**: Just edit JSON files in `src/data/` to update the entire website!
