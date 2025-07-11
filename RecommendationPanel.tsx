import React from 'react';
import { Lightbulb, Bookmark, Star, TrendingUp } from 'lucide-react';
import { Paper } from '../App';

interface RecommendationPanelProps {
  recommendations: Paper[];
  bookmarkedCount: number;
  onToggleBookmark: (paperId: string) => void;
  bookmarkedPapers: string[];
}

export const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  recommendations,
  bookmarkedCount,
  onToggleBookmark,
  bookmarkedPapers
}) => {
  return (
    <div className="space-y-6">
      {/* Bookmarks Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bookmark className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">My Library</h3>
        </div>
        <div className="text-3xl font-bold text-blue-600 mb-2">{bookmarkedCount}</div>
        <p className="text-sm text-gray-600">Papers bookmarked</p>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-gray-900">Recommended</h3>
        </div>
        
        {recommendations.length > 0 ? (
          <div className="space-y-4">
            {recommendations.map(paper => (
              <div key={paper.id} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-1 leading-tight text-sm">
                  {paper.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {paper.authors[0]} et al. ({paper.year})
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{paper.rating}</span>
                    <TrendingUp className="w-3 h-3" />
                    <span>{paper.citations}</span>
                  </div>
                  <button
                    onClick={() => onToggleBookmark(paper.id)}
                    className="p-1 rounded hover:bg-gray-100 transition-colors"
                  >
                    <Bookmark className="w-3 h-3 text-gray-400 hover:text-blue-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Lightbulb className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-600">
              Bookmark papers to get personalized recommendations
            </p>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Papers indexed</span>
            <span className="text-sm font-medium text-gray-900">2.5M+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Categories</span>
            <span className="text-sm font-medium text-gray-900">50+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Updated</span>
            <span className="text-sm font-medium text-gray-900">Daily</span>
          </div>
        </div>
      </div>
    </div>
  );
};