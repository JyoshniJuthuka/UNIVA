import { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  FolderGit2, 
  Award, 
  Filter, 
  Search, 
  Sparkles, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { SAMPLE_OPPORTUNITIES } from '../data/mockData';
import { OpportunityItem, OpportunityType } from '../types';
import OpportunityModal from './OpportunityModal';

export default function OpportunityHubSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | OpportunityType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<OpportunityItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'internship', label: 'Internships' },
    { id: 'course', label: 'Skill Courses' },
    { id: 'project', label: 'Guided Projects' },
    { id: 'job', label: 'Entry-Level Jobs' }
  ];

  // Filter opportunities based on category tab & search query
  const filteredOpportunities = SAMPLE_OPPORTUNITIES.filter((opp) => {
    const matchesFilter = selectedFilter === 'all' || opp.type === selectedFilter;
    const matchesQuery = 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const getTypeStyle = (type: OpportunityType) => {
    switch (type) {
      case 'internship':
        return {
          label: 'Internship',
          icon: <Briefcase className="w-3.5 h-3.5" />,
          color: 'text-blue-700 bg-blue-50 border-blue-200'
        };
      case 'course':
        return {
          label: 'Course',
          icon: <BookOpen className="w-3.5 h-3.5" />,
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
        };
      case 'project':
        return {
          label: 'Project Brief',
          icon: <FolderGit2 className="w-3.5 h-3.5" />,
          color: 'text-purple-700 bg-purple-50 border-purple-200'
        };
      case 'job':
        return {
          label: 'Entry Job',
          icon: <Award className="w-3.5 h-3.5" />,
          color: 'text-amber-800 bg-amber-50 border-amber-200'
        };
    }
  };

  return (
    <section id="opportunities" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Curated Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Opportunity Hub
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Explore internships, skill courses, guided projects, and entry-level positions aligned with your target learning roadmap.
          </p>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-8 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Sample Prototype Database:</strong> These listings represent realistic partner openings, courses, and project briefs for presentation and evaluation.
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-blue-700 font-medium">
            Demo Portal
          </span>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as 'all' | OpportunityType)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill or title..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Opportunities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOpportunities.map((opp) => {
            const typeStyle = getTypeStyle(opp.type);
            return (
              <div
                key={opp.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${typeStyle.color}`}>
                      {typeStyle.icon}
                      <span>{typeStyle.label}</span>
                    </span>

                    {opp.highlightBadge && (
                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {opp.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {opp.title}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {opp.organization}
                    </div>
                  </div>

                  {/* Metadata line */}
                  <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Format:</span>
                      <span className="font-medium text-slate-800">{opp.format}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-medium text-slate-800">{opp.durationOrExp}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div>
                    <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Required Skills
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {opp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-slate-500">
                    {opp.level}
                  </span>

                  <button
                    onClick={() => setActiveModalItem(opp)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 transition-all cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state when search produces no results */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-700 mb-1">
              No sample opportunities match "{searchQuery}"
            </p>
            <p className="text-xs text-slate-500 mb-4">
              Try searching for "React", "SQL", "JavaScript", or select "All Opportunities".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <OpportunityModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </section>
  );
}
