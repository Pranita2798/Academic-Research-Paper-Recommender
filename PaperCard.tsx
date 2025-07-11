import React from 'react';
import { Users, Calendar, TrendingUp, ExternalLink, Star, Download, Eye, Bookmark } from 'lucide-react';
import { Paper } from '../App';

interface PaperCardProps {
  paper: Paper;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper, isBookmarked, onToggleBookmark }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {paper.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{paper.authors.join(', ')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{paper.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>{paper.citations} citations</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{paper.rating}</span>
          </div>
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
        {paper.abstract}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {paper.keywords.map(keyword => (
          <span
            key={keyword}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{paper.journal}</span> • {paper.category}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:text-blue-800 transition-colors">
            <Eye className="w-4 h-4" />
            <span className="text-sm">View</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-green-600 hover:text-green-800 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">PDF</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">DOI</span>
          </button>
        </div>
      </div>
    </div>
  );
};