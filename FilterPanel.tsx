import React, { useState } from 'react';
import { Calendar, TrendingUp, Tag } from 'lucide-react';
import { FilterCriteria } from '../App';

interface FilterPanelProps {
  onFilter: (criteria: FilterCriteria) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter }) => {
  const [yearRange, setYearRange] = useState<[number, number]>([2020, 2024]);
  const [minCitations, setMinCitations] = useState(0);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const popularKeywords = [
    'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Neural Networks',
    'Computer Vision', 'Natural Language Processing', 'Quantum Computing', 'Blockchain',
    'Bioinformatics', 'Climate Change', 'Renewable Energy', 'Cancer Research'
  ];

  const handleKeywordToggle = (keyword: string) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const applyFilters = () => {
    onFilter({
      yearRange,
      categories: [],
      minCitations,
      keywords: selectedKeywords
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
      
      {/* Year Range */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
          <Calendar className="w-4 h-4" />
          Publication Year
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={yearRange[0]}
            onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="1900"
            max="2024"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="1900"
            max="2024"
          />
        </div>
      </div>

      {/* Citations */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
          <TrendingUp className="w-4 h-4" />
          Minimum Citations
        </label>
        <input
          type="number"
          value={minCitations}
          onChange={(e) => setMinCitations(parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          min="0"
          placeholder="0"
        />
      </div>

      {/* Keywords */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
          <Tag className="w-4 h-4" />
          Keywords
        </label>
        <div className="flex flex-wrap gap-2">
          {popularKeywords.map(keyword => (
            <button
              key={keyword}
              onClick={() => handleKeywordToggle(keyword)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedKeywords.includes(keyword)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
};