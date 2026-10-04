import { useState } from 'react';
import { 
  Check, 
  CircleDot, 
  Clock, 
  FolderGit2, 
  BookOpen, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  Target
} from 'lucide-react';
import { CAREER_TRACKS } from '../data/mockData';
import { RoadmapStep } from '../types';

interface RoadmapSectionProps {
  onApplySkillFilter: (skill: string) => void;
}

export default function RoadmapSection({ onApplySkillFilter }: RoadmapSectionProps) {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [activeStepId, setActiveStepId] = useState<string | null>(null);

  const activeTrack = CAREER_TRACKS[selectedTrackIndex];
  
  // Calculate completed / current / upcoming counts
  const completedSteps = activeTrack.roadmap.filter((s) => s.status === 'completed');
  const progressPercentage = Math.round((completedSteps.length / activeTrack.roadmap.length) * 100);

  // Selected step for detail modal/drawer
  const selectedStep = activeTrack.roadmap.find((s) => s.id === activeStepId) || activeTrack.roadmap.find((s) => s.status === 'current') || activeTrack.roadmap[0];

  const getStatusBadge = (status: RoadmapStep['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
            <Check className="w-3 h-3 text-emerald-600" />
            <span>Completed</span>
          </span>
        );
      case 'current':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full animate-pulse">
            <CircleDot className="w-3 h-3 text-blue-600" />
            <span>Current Focus</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" />
            <span>Upcoming</span>
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Sequential Learning Paths
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Know exactly what to learn next.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            No more tutorial paralysis or random online videos. Follow an ordered, milestone-driven curriculum crafted for college students bridging into industry roles.
          </p>

          {/* Career Track Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {CAREER_TRACKS.map((track, idx) => (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedTrackIndex(idx);
                  setActiveStepId(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedTrackIndex === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>

        {/* Track Progress Indicator Bar */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {activeTrack.title} Milestone Journey
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {completedSteps.length} of {activeTrack.roadmap.length} Milestones Achieved ({progressPercentage}% Complete)
            </div>
          </div>

          <div className="w-full sm:w-64 flex items-center gap-3">
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-700"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="font-mono text-xs font-bold text-slate-700 tabular-nums">
              {progressPercentage}%
            </span>
          </div>
        </div>

        {/* Roadmap Nodes & Detail Drawer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Sequential Node Path (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Sequential Milestone Milestones
            </div>

            {activeTrack.roadmap.map((step, index) => {
              const isSelected = selectedStep.id === step.id;
              const isCompleted = step.status === 'completed';
              const isCurrent = step.status === 'current';

              return (
                <div key={step.id} className="relative">
                  
                  {/* Connecting Vertical Line (unless last item) */}
                  {index < activeTrack.roadmap.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -z-0" />
                  )}

                  <div
                    onClick={() => setActiveStepId(step.id)}
                    className={`relative z-10 p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                        : isCompleted
                        ? 'bg-slate-50/70 border-slate-200 hover:bg-white'
                        : isCurrent
                        ? 'bg-blue-50/60 border-blue-200 hover:bg-blue-50'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Node Status Circle */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : isCurrent
                          ? 'bg-blue-600 text-white shadow-sm ring-4 ring-blue-100'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : `0${index + 1}`}
                    </div>

                    {/* Node Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-900 truncate">
                          {step.title}
                        </h3>
                        {getStatusBadge(step.status)}
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 mb-2">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{step.duration}</span>
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-600 font-medium">
                          {step.difficulty}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-blue-600 font-medium hover:underline flex items-center gap-0.5">
                          <span>Inspect Topics & Project</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Milestone Inspector (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Milestone Deep-Dive
                  </span>
                </div>
                {getStatusBadge(selectedStep.status)}
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">
                  {selectedStep.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedStep.description}
                </p>
              </div>

              {/* Timeframe & Difficulty */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase font-medium">Target Timeframe</div>
                  <div className="text-white font-bold mt-0.5">{selectedStep.duration}</div>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase font-medium">Curriculum Tier</div>
                  <div className="text-blue-400 font-bold mt-0.5">{selectedStep.difficulty}</div>
                </div>
              </div>

              {/* Key Concept Mastery */}
              <div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                  Core Competencies to Master
                </div>
                <div className="space-y-1.5">
                  {selectedStep.keyTopics.map((topic) => (
                    <div
                      key={topic}
                      className="p-2.5 bg-slate-800/60 rounded-lg text-xs text-slate-200 border border-slate-700/60 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Proof / Capstone Project */}
              <div className="p-4 bg-blue-950/60 border border-blue-800/60 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300 uppercase tracking-wide">
                  <FolderGit2 className="w-4 h-4 text-blue-400" />
                  <span>Verified Proof Project</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {selectedStep.suggestedProject}
                </div>
                <div className="text-[11px] text-slate-300">
                  Completing this project adds verified proof directly to your UNIVA student portfolio.
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#opportunities"
                  onClick={() => onApplySkillFilter(selectedStep.keyTopics[0])}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Find Opportunities Needing These Skills</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
