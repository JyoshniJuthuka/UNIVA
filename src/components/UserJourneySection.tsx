import { useState } from 'react';
import { 
  HelpCircle, 
  Compass, 
  BarChart2, 
  Route, 
  FolderGit2, 
  Briefcase, 
  Sparkles, 
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { USER_JOURNEY_STAGES } from '../data/mockData';

export default function UserJourneySection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <HelpCircle className="w-5 h-5 text-amber-600" />;
      case 1:
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 2:
        return <BarChart2 className="w-5 h-5 text-indigo-600" />;
      case 3:
        return <Route className="w-5 h-5 text-purple-600" />;
      case 4:
        return <FolderGit2 className="w-5 h-5 text-cyan-600" />;
      case 5:
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 6:
        return <Sparkles className="w-5 h-5 text-emerald-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Transformation Arc
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            The Student Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            How UNIVA guides an uncertain learner through confidence, skill mastery, and real opportunity placement.
          </p>
        </div>

        {/* Desktop / Tablet Horizontal Sequence */}
        <div className="hidden lg:grid grid-cols-7 gap-3 mb-12">
          {USER_JOURNEY_STAGES.map((step, idx) => {
            const isCurrent = activeStageIndex === idx;
            return (
              <div
                key={step.stage}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[170px] ${
                  isCurrent
                    ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      {getStageIcon(idx)}
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      #{step.stage}
                    </span>
                  </div>

                  <h3 className={`text-xs font-bold leading-tight ${step.statusColor}`}>
                    "{step.state}"
                  </h3>
                </div>

                <div className="text-[11px] text-slate-500 line-clamp-3 mt-2 leading-relaxed">
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline Flow */}
        <div className="lg:hidden space-y-3 max-w-xl mx-auto mb-10">
          {USER_JOURNEY_STAGES.map((step, idx) => {
            const isCurrent = activeStageIndex === idx;
            return (
              <div key={step.stage} className="relative">
                {idx < USER_JOURNEY_STAGES.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-slate-200 -z-0" />
                )}

                <div
                  onClick={() => setActiveStageIndex(idx)}
                  className={`relative z-10 p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isCurrent
                      ? 'bg-white border-blue-500 shadow-sm'
                      : 'bg-white/90 border-slate-200'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    {getStageIcon(idx)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-400 font-bold">
                        Stage {step.stage}
                      </span>
                      <h3 className={`text-sm font-bold ${step.statusColor}`}>
                        "{step.state}"
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Callout Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              {getStageIcon(activeStageIndex)}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Stage 0{activeStageIndex + 1} Spotlight
              </span>
              <div className="text-base font-bold text-slate-900">
                "{USER_JOURNEY_STAGES[activeStageIndex].state}"
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-600 max-w-md text-center md:text-left">
            {USER_JOURNEY_STAGES[activeStageIndex].description}
          </div>

          <a
            href="#demo"
            className="shrink-0 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-2xs transition-colors"
          >
            Experience This Path
          </a>
        </div>

      </div>
    </section>
  );
}
