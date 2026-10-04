import { useState } from 'react';
import { 
  X, 
  Briefcase, 
  BookOpen, 
  FolderGit2, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { OpportunityItem } from '../types';

interface OpportunityModalProps {
  item: OpportunityItem | null;
  onClose: () => void;
}

export default function OpportunityModal({ item, onClose }: OpportunityModalProps) {
  const [applied, setApplied] = useState(false);

  if (!item) return null;

  const getTypeIcon = () => {
    switch (item.type) {
      case 'internship':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'course':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'project':
        return <FolderGit2 className="w-5 h-5 text-purple-600" />;
      case 'job':
        return <Award className="w-5 h-5 text-amber-600" />;
    }
  };

  const getActionLabel = () => {
    switch (item.type) {
      case 'internship':
        return 'Apply for Internship';
      case 'course':
        return 'Enroll in Skill Sprint';
      case 'project':
        return 'Start Project Brief';
      case 'job':
        return 'Submit Candidate Profile';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              {getTypeIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {item.type} Opportunity · Prototype Preview
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <div className="text-xs text-slate-500 font-medium">
                {item.organization}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Transparency Disclaimer */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
            <strong>Sample Listing:</strong> Curated demo opportunity modeled after real industry entry-level listings for presentation and demonstration.
          </div>

          {/* Key Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 text-[10px] uppercase font-semibold">Format & Compensation</span>
              <div className="text-slate-900 font-bold mt-0.5">{item.format}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 text-[10px] uppercase font-semibold">Duration / Experience</span>
              <div className="text-slate-900 font-bold mt-0.5">{item.durationOrExp}</div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-1.5">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Opportunity Overview
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Required Skills Badges */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Target Skills Required
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Candidate Value Proposition */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Direct alignment with UNIVA student roadmap</span>
            </div>
            {item.matchScore && (
              <span className="font-bold text-blue-600">
                {item.matchScore}% Profile Fit
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          >
            Back to Hub
          </button>

          {applied ? (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-4 py-2.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Simulated Application Logged!</span>
            </div>
          ) : (
            <button
              onClick={() => setApplied(true)}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{getActionLabel()}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
