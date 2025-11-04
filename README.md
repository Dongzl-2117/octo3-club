# Octo3 Club Website

This is a static website for Octo3 Club, built with React + TypeScript + Vite, designed for GitHub Pages deployment.

## 📚 Table of Contents

- [Quick Start](#quick-start)
- [Editing Website Content](#editing-website-content)
- [File Structure](#file-structure)
- [Development Guide](#development-guide)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Tech Stack](#tech-stack)

## 🚀 Quick Start

### Requirements

- Node.js 18+
- pnpm (recommended) or npm

### Install Dependencies

```bash
pnpm install
```

### Run Locally

```bash
# Start development server (with hot reload)
pnpm dev
```

Visit http://localhost:5173 to view the website

### Build for Production

```bash
# Build static files to dist directory
pnpm build

# Preview build result
pnpm preview
```

## ✏️ Editing Website Content

All website data is stored in JSON files under the `src/data/` directory. Edit these files to update website content without modifying code.

### 1. Edit Presentations (`src/data/presentations.json`)

The presentations data file contains all presentation records. Each presentation entry follows this format:

```json
{
  "id": "1",
  "title": "Presentation Title",
  "description": "Brief description shown on the card",
  "detailedDescription": "Detailed presentation description shown on the detail page",
  "speaker": "Speaker Name",
  "date": "2024-01-15",
  "status": "upcoming",
  "topics": ["Machine Learning", "Deep Learning", "Neural Networks"],
  "slides": [
    {
      "name": "Presentation Slides",
      "url": "https://example.com/slides.pdf",
      "type": "pdf",
      "size": "2.5 MB"
    },
    {
      "name": "Additional Notes",
      "url": "https://example.com/notes.docx",
      "type": "docx",
      "size": "1.2 MB"
    }
  ],
  "recording": "https://youtube.com/watch?v=xxxxx",
  "materials": [
    {
      "name": "Code Examples",
      "url": "https://github.com/example/repo",
      "type": "web"
    },
    {
      "name": "Dataset",
      "url": "https://example.com/dataset.xlsx",
      "type": "xlsx",
      "size": "5.8 MB"
    }
  ]
}
```

**Field Descriptions:**

- `id`: Unique identifier (string, required)
- `title`: Presentation title (required)
- `description`: Brief description shown on list page (required)
- `detailedDescription`: (Optional) Detailed description shown on detail page
- `speaker`: Speaker name (required)
- `date`: Presentation date in `YYYY-MM-DD` format (required)
- `status`: Presentation status (required)
  - `"upcoming"` - Upcoming presentations
  - `"past"` - Past presentations
- `topics`: (Optional) Array of topic tags covered in the presentation
- `slides`: (Optional) Array of presentation files, each containing:
  - `name`: File name
  - `url`: File URL
  - `type`: File type (`"pdf"`, `"ppt"`, `"pptx"`, `"doc"`, `"docx"`, `"xls"`, `"xlsx"`, `"image"`, `"video"`, `"web"`, `"other"`)
  - `size`: (Optional) File size
- `recording`: (Optional) Recording link (supports YouTube embedding)
- `materials`: (Optional) Array of additional materials, same format as `slides`

**Adding a New Presentation:**

```json
[
  {
    "id": "1",
    "title": "Introduction to Machine Learning",
    "description": "An overview of machine learning concepts and common algorithms",
    "detailedDescription": "This presentation will dive deep into the core concepts of machine learning, including supervised learning, unsupervised learning, and reinforcement learning.",
    "speaker": "John Smith",
    "date": "2024-11-10",
    "status": "upcoming",
    "topics": ["Machine Learning", "Python", "Data Science"],
    "slides": [
      {
        "name": "ML Introduction.pdf",
        "url": "https://example.com/ml-intro.pdf",
        "type": "pdf",
        "size": "3.2 MB"
      }
    ],
    "materials": [
      {
        "name": "Example Code",
        "url": "https://github.com/example/ml-examples",
        "type": "web"
      }
    ]
  }
]
```

**Click on any presentation card to view the detail page with complete information, all files, and recordings.**

### 2. Edit Resources (`src/data/resources.json`)

The resources data file contains all recommended learning resources. It supports multiple file types including PDF, Word, PPT, Excel, images, videos, and web links.

Each resource entry follows this format:

```json
{
  "id": "1",
  "title": "Resource Title",
  "description": "Resource description",
  "category": "Category Name",
  "url": "https://example.com/resource.pdf",
  "fileType": "pdf",
  "fileSize": "2.5 MB",
  "downloadable": true
}
```

**Field Descriptions:**

- `id`: Unique identifier (string, required)
- `title`: Resource title (required)
- `description`: Resource description (required)
- `category`: Resource category (required)
  - Recommended categories: `"Programming"`, `"Algorithms"`, `"Machine Learning"`, `"Web Development"`, etc.
  - You can create custom categories
- `url`: Resource URL (required)
- `fileType`: File type (required)
  - Supported types: `"pdf"`, `"doc"`, `"docx"`, `"ppt"`, `"pptx"`, `"xls"`, `"xlsx"`, `"image"`, `"video"`, `"web"`, `"other"`
- `fileSize`: (Optional) File size, e.g., `"2.5 MB"`
- `downloadable`: (Optional) Whether the file can be downloaded, defaults to `true`. Set to `false` to hide download button

**File Type Descriptions:**

- `pdf` - PDF documents (red icon)
- `doc/docx` - Word documents (blue icon)
- `ppt/pptx` - PowerPoint presentations (orange icon)
- `xls/xlsx` - Excel spreadsheets (green icon)
- `image` - Image files (purple icon)
- `video` - Video files (pink icon)
- `web` - Web links (blue icon, no download button)
- `other` - Other file types (gray icon)

**Adding New Resources:**

```json
[
  {
    "id": "1",
    "title": "Python Official Tutorial",
    "description": "Official Python programming language tutorial for beginners",
    "category": "Programming",
    "url": "https://docs.python.org/3/tutorial/",
    "fileType": "web"
  },
  {
    "id": "2",
    "title": "Introduction to Algorithms PDF",
    "description": "Classic textbook on algorithms and data structures",
    "category": "Algorithms",
    "url": "https://example.com/algorithms-book.pdf",
    "fileType": "pdf",
    "fileSize": "15.2 MB",
    "downloadable": true
  },
  {
    "id": "3",
    "title": "Machine Learning Course Notes",
    "description": "Complete notes from Stanford CS229 Machine Learning course",
    "category": "Machine Learning",
    "url": "https://example.com/ml-notes.docx",
    "fileType": "docx",
    "fileSize": "3.8 MB"
  },
  {
    "id": "4",
    "title": "Data Analysis Template",
    "description": "Common Excel template for data analysis with charts and formulas",
    "category": "Machine Learning",
    "url": "https://example.com/analysis-template.xlsx",
    "fileType": "xlsx",
    "fileSize": "1.2 MB"
  }
]
```

**Resource Page Features:**

- Automatically grouped by category
- Different icons and colors based on file type
- Support for online viewing and downloading
- File size information displayed

### 3. Edit Photos (`src/data/photos.json`)

The photos data file contains all photos in the gallery. Each photo entry follows this format:

```json
{
  "id": "1",
  "url": "https://example.com/photo.jpg",
  "caption": "Photo description"
}
```

**Field Descriptions:**

- `id`: Unique identifier (string)
- `url`: Image URL (can be external link or relative path)
- `caption`: Photo caption text

**Adding New Photos:**

```json
[
  {
    "id": "1",
    "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    "caption": "Group study session at the library"
  },
  {
    "id": "2",
    "url": "/images/hackathon-2024.jpg",
    "caption": "2024 Hackathon Event"
  }
]
```

**Image Recommendations:**

- Recommended to use external image hosting (e.g., Unsplash, imgur) or place images in `public/images/` directory
- If using local images, place them in `public/images/` folder and reference with `/images/filename.jpg`
- Recommended image size: 800-1200px width
- Recommended format: JPG or WebP

### 4. Modify Page Content

If you need to modify page text, styles, or layout, edit the corresponding component files:

- **Home Page**: `src/pages/Home.tsx`
- **Presentations List**: `src/pages/Presentations.tsx`
- **Presentation Detail**: `src/pages/PresentationDetail.tsx`
- **Resources Page**: `src/pages/Resources.tsx`
- **Gallery Page**: `src/pages/Gallery.tsx`
- **About Page**: `src/pages/About.tsx`
- **Navigation**: `src/components/Header.tsx`
- **Footer**: `src/components/Footer.tsx`

These are React TypeScript components where you can directly edit HTML structure and Tailwind CSS styles.

**Note**: If you modify data structures (e.g., add new fields), you also need to update type definitions in `src/types/index.ts`.

## 📁 File Structure

```
hku-cs-study-group-static/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Home page
│   │   ├── Presentations.tsx      # Presentations list page
│   │   ├── PresentationDetail.tsx # Presentation detail page
│   │   ├── Resources.tsx    # Resources page
│   │   ├── Gallery.tsx      # Gallery page
│   │   └── About.tsx        # About page
│   ├── data/                # Data files (important!)
│   │   ├── presentations.json  # Presentations data
│   │   ├── resources.json      # Resources data
│   │   └── photos.json         # Photos data
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Data type interfaces
│   ├── utils/               # Utility functions
│   │   └── fileIcons.tsx    # File icon and color utilities
│   ├── App.tsx              # Main app component and routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets directory
│   ├── 404.html            # GitHub Pages 404 handling
│   └── images/             # Local images storage (create if needed)
├── dist/                    # Build output directory (generated by pnpm build)
├── package.json             # Project dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Important Directories

- **`src/data/`**: All website content data is stored here. **Edit JSON files in this directory to update website content**
- **`src/pages/`**: Page components. Edit these files to modify page layout and styles
- **`public/`**: Static assets such as local images, favicon, etc.
- **`dist/`**: Production build files, automatically generated, no manual editing needed

## 🛠 Development Guide

### Common Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview build result
pnpm preview

# Type checking
pnpm type-check
```

### Development Workflow

1. **Edit Content**: Edit JSON files under `src/data/`
2. **Preview Locally**: Run `pnpm dev` to see changes
3. **Test Build**: Run `pnpm build` to ensure build succeeds
4. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Update content: describe your changes"
   git push
   ```
5. **Auto Deploy**: GitHub Actions will automatically deploy to GitHub Pages

### Adding New Pages

If you need to add a new page:

1. Create a new `.tsx` file in `src/pages/`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-path" component={YourPage} />
   ```
3. Add navigation link in `src/components/Header.tsx`

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment. Each push to the `main` branch will trigger deployment:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Wait a few minutes, then visit your GitHub Pages URL to see the updates.

### Manual Deployment

```bash
# Build project
pnpm build

# Deploy to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

### GitHub Pages Configuration

1. Go to your GitHub repository Settings
2. Click Pages on the left sidebar
3. Select `gh-pages` branch as Source
4. Select `/ (root)` as directory
5. Save settings

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🔧 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Wouter** - Lightweight routing library
- **Lucide React** - Beautiful icon library

## 💡 Frequently Asked Questions

### Q: Website doesn't update after modifying JSON files?

A: If you're in the development server (`pnpm dev`), changes should hot reload automatically. If not, try refreshing the browser. For production, you need to rebuild and redeploy.

### Q: How to use local images?

A: Place images in the `public/images/` directory (create the images folder if needed), then reference them in JSON files using `/images/filename.jpg`.

### Q: JSON file format error?

A: Use online tools like [JSONLint](https://jsonlint.com/) to validate JSON format. Common errors:
- Missing or extra commas
- Using single quotes instead of double quotes
- Extra comma after last element

### Q: How to modify website color theme?

A: Edit color configuration in `tailwind.config.js` file, or directly modify Tailwind CSS class names in components.

### Q: 404 page doesn't redirect after deployment?

A: Make sure `public/404.html` file exists and contains the correct redirect script (already configured in the project).

### Q: How to upload PDF, Word and other files?

A: Recommended to upload files to cloud storage services (e.g., Google Drive, Dropbox, OneDrive), then get share links and fill in the `url` field in JSON files. You can also place files in `public/files/` directory (create if needed) and reference with `/files/filename.pdf`.

### Q: What file types are supported?

A: The following file types are supported, each displaying different icons and colors:
- PDF (`"pdf"`)
- Word (`"doc"`, `"docx"`)
- PowerPoint (`"ppt"`, `"pptx"`)
- Excel (`"xls"`, `"xlsx"`)
- Image (`"image"`)
- Video (`"video"`)
- Web link (`"web"`)
- Other (`"other"`)

### Q: How to use the presentation detail page?

A: Click on any presentation card in the presentations list page to enter the detail page. The detail page displays complete presentation information, all files, and recordings. Make sure to correctly fill in the `id` field in JSON, as routing uses ID for navigation.

## 📝 License

MIT License

---

**Tip**: If you encounter issues, check [GitHub Issues](https://github.com/your-repo/issues) or contact the project maintainer.
