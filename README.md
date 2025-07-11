# Academic Research Paper Recommender

A modern, responsive web application for discovering, searching, and managing academic research papers. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Advanced Search**: Search papers by title, author, keywords, or abstract content
- **Smart Filtering**: Filter by publication year, category, citation count, and keywords
- **Category Browsing**: Browse papers by academic disciplines
- **Bookmarking System**: Save papers to your personal library
- **Personalized Recommendations**: Get paper suggestions based on your bookmarked papers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### User Interface
- **Clean, Professional Design**: Modern academic-focused interface
- **Intuitive Navigation**: Easy-to-use search and filtering tools
- **Paper Cards**: Detailed paper information at a glance
- **Statistics Dashboard**: Track your reading progress and library stats
- **Interactive Elements**: Smooth animations and hover effects

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components
- **State Management**: Efficient state handling with React hooks
- **Performance Optimized**: Fast loading and smooth interactions
- **Accessibility**: WCAG compliant design patterns

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── Header.tsx              # Application header with branding
│   ├── SearchBar.tsx           # Main search functionality
│   ├── FilterPanel.tsx         # Advanced filtering options
│   ├── PaperCard.tsx           # Individual paper display
│   └── RecommendationPanel.tsx # Sidebar recommendations
├── data/
│   └── mockPapers.ts           # Sample research papers data
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles
```

### Key Components

#### SearchBar
- Real-time search functionality
- Searches across titles, authors, abstracts, and keywords
- Responsive input design with search icon

#### FilterPanel
- Advanced filtering options
- Year range selection
- Citation count filtering
- Keyword-based filtering
- Category selection

#### PaperCard
- Comprehensive paper information display
- Author details, publication year, citations
- Abstract preview with keyword highlighting
- Bookmark functionality
- Quick action buttons (View, Download, DOI)

#### RecommendationPanel
- Personalized paper recommendations
- Library statistics
- Bookmarked papers counter
- Quick stats about the database

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/academic-research-recommender.git
   cd academic-research-recommender
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Usage Guide

### Searching for Papers
1. **Basic Search**: Enter keywords in the search bar to find relevant papers
2. **Category Filter**: Use category buttons to filter by academic discipline
3. **Advanced Filters**: Click "Filters" to access year range, citation count, and keyword filters

### Managing Your Library
1. **Bookmark Papers**: Click the bookmark icon on any paper card
2. **View Recommendations**: Check the sidebar for personalized suggestions
3. **Track Progress**: Monitor your library statistics in the sidebar

### Exploring Papers
1. **Paper Details**: Each card shows comprehensive information
2. **Quick Actions**: Use View, Download, and DOI buttons for quick access
3. **Keywords**: Click on keywords to discover related papers

## 🔧 Configuration

### Customizing Categories
Edit the `categories` array in `App.tsx` to add or modify academic disciplines:

```typescript
const categories = [
  'all', 
  'Computer Science', 
  'Physics', 
  'Mathematics', 
  'Biology', 
  'Chemistry', 
  'Medicine'
];
```

### Adding New Papers
Add paper data to `src/data/mockPapers.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Paper Title',
  authors: ['Author 1', 'Author 2'],
  abstract: 'Paper abstract...',
  year: 2024,
  journal: 'Journal Name',
  citations: 100,
  keywords: ['keyword1', 'keyword2'],
  category: 'Computer Science',
  doi: '10.1000/example',
  pdfUrl: 'https://example.com/paper.pdf',
  isBookmarked: false,
  rating: 4.5
}
```

## 🎨 Styling & Theming

The application uses Tailwind CSS for styling with a professional academic color scheme:

- **Primary**: Blue (#3B82F6) - For main actions and highlights
- **Secondary**: Gray tones - For text and subtle elements
- **Accent**: Yellow (#F59E0B) - For ratings and special indicators
- **Success**: Green (#10B981) - For positive actions
- **Warning**: Orange (#F97316) - For attention-grabbing elements

### Customizing Colors
Modify the Tailwind configuration in `tailwind.config.js` to change the color scheme.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Layout Adaptations
- **Mobile**: Single column layout, stacked filters
- **Tablet**: Adjusted spacing and component sizes
- **Desktop**: Full multi-column layout with sidebar

## 🔮 Future Enhancements

### Planned Features
- [ ] **User Authentication**: Personal accounts and preferences
- [ ] **Paper Collections**: Organize papers into custom collections
- [ ] **Citation Analysis**: Visualize citation networks
- [ ] **Export Functionality**: Export papers in various formats (BibTeX, RIS, etc.)
- [ ] **Advanced Analytics**: Reading time tracking and progress analytics
- [ ] **Social Features**: Share papers and collections with colleagues
- [ ] **API Integration**: Connect with real academic databases (arXiv, PubMed, etc.)
- [ ] **Offline Mode**: Cache papers for offline reading
- [ ] **PDF Viewer**: Built-in PDF reader with annotation tools
- [ ] **Citation Generator**: Generate citations in various formats

### Technical Improvements
- [ ] **Performance**: Implement virtual scrolling for large datasets
- [ ] **Search**: Add fuzzy search and semantic search capabilities
- [ ] **Data**: Integrate with real academic APIs
- [ ] **Testing**: Add comprehensive unit and integration tests
- [ ] **PWA**: Convert to Progressive Web App for better mobile experience

## 🤝 Contributing

We welcome contributions to improve the Academic Research Paper Recommender! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Add TypeScript types for all new code
- Write clear, descriptive commit messages
- Update documentation for new features
- Test your changes thoroughly

### Areas for Contribution
- **UI/UX Improvements**: Enhanced design and user experience
- **Performance Optimization**: Speed and efficiency improvements
- **New Features**: Additional functionality and capabilities
- **Bug Fixes**: Fix issues and improve stability
- **Documentation**: Improve and expand documentation
- **Testing**: Add tests for better code coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the excellent React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide Icons**: For the beautiful icon set
- **Vite**: For the fast build tool and development server
- **TypeScript**: For type safety and better development experience

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues**: Look for existing issues on GitHub
2. **Create an Issue**: Report bugs or request features
3. **Discussions**: Join community discussions
4. **Documentation**: Refer to this README for guidance

---

**Built with ❤️ for the academic community**

*Making research discovery easier, one paper at a time.*