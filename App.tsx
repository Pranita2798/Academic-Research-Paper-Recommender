import React, { useState } from 'react';
import { Search, Filter, BookOpen, Users, Calendar, ExternalLink, Star, Download, Eye } from 'lucide-react';
import { mockPapers } from './data/mockPapers';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { PaperCard } from './components/PaperCard';
import { Header } from './components/Header';
import { RecommendationPanel } from './components/RecommendationPanel';

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  journal: string;
  citations: number;
  keywords: string[];
  category: string;
  doi: string;
  pdfUrl: string;
  isBookmarked: boolean;
  rating: number;
}

export interface FilterCriteria {
  yearRange: [number, number];
  categories: string[];
  minCitations: number;
  keywords: string[];
}

function App() {
  const [papers, setPapers] = useState<Paper[]>(mockPapers);
  const [filteredPapers, setFilteredPapers] = useState<Paper[]>(mockPapers);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedPapers, setBookmarkedPapers] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Computer Science', 'Physics', 'Mathematics', 'Biology', 'Chemistry', 'Medicine'];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterPapers(query, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterPapers(searchQuery, category);
  };

  const filterPapers = (query: string, category: string) => {
    let filtered = papers;

    if (query) {
      filtered = filtered.filter(paper =>
        paper.title.toLowerCase().includes(query.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(query.toLowerCase()) ||
        paper.authors.some(author => author.toLowerCase().includes(query.toLowerCase())) ||
        paper.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter(paper => paper.category === category);
    }

    setFilteredPapers(filtered);
  };

  const toggleBookmark = (paperId: string) => {
    setBookmarkedPapers(prev => 
      prev.includes(paperId) 
        ? prev.filter(id => id !== paperId)
        : [...prev, paperId]
    );
  };

  const getRecommendations = () => {
    if (bookmarkedPapers.length === 0) return [];
    
    const bookmarkedKeywords = papers
      .filter(paper => bookmarkedPapers.includes(paper.id))
      .flatMap(paper => paper.keywords);
    
    return papers
      .filter(paper => !bookmarkedPapers.includes(paper.id))
      .filter(paper => 
        paper.keywords.some(keyword => bookmarkedKeywords.includes(keyword))
      )
      .slice(0, 5);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <SearchBar onSearch={handleSearch} />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                {filteredPapers.length} papers found
                {searchQuery && ` for "${searchQuery}"`}
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <FilterPanel onFilter={(criteria) => {
                  // Apply advanced filters
                  console.log('Advanced filters:', criteria);
                }} />
              </div>
            )}

            {/* Papers List */}
            <div className="space-y-6">
              {filteredPapers.map(paper => (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  isBookmarked={bookmarkedPapers.includes(paper.id)}
                  onToggleBookmark={() => toggleBookmark(paper.id)}
                />
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No papers found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <RecommendationPanel 
              recommendations={getRecommendations()}
              bookmarkedCount={bookmarkedPapers.length}
              onToggleBookmark={toggleBookmark}
              bookmarkedPapers={bookmarkedPapers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;