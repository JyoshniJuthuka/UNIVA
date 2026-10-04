import { 
  Compass, 
  UserX, 
  HelpCircle, 
  TrendingDown, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { STUDENT_PROBLEMS } from '../data/mockData';

interface ProblemSectionProps {
  onLearnMoreClick: () => void;
}

export default function ProblemSection({ onLearnMoreClick }: ProblemSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-rose-600" />;
      case 'UserX':
        return <UserX className="w-5 h-5 text-amber-600" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-indigo-600" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            The Student Reality
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Career planning shouldn't feel confusing.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Every year, millions of bright college students and fresh graduates get trapped in analysis paralysis. With endless contradictory advice, the transition from college to career is broken.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {STUDENT_PROBLEMS.map((problem, index) => (
            <div
              key={problem.id}
              className={`p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 group flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(problem.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Pain Point 0{index + 1}</span>
                <span className="text-slate-500">Academic disconnect</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge Card */}
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-10 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-500/20 text-blue-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>The UNIVA Solution</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                UNIVA turns career confusion into a clear, actionable path.
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                We combine AI diagnostics, industry skill benchmarks, structured learning roadmaps, and direct opportunity matching into a single intelligent platform.
              </p>
            </div>

            <button
              onClick={onLearnMoreClick}
              className="shrink-0 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-blue-50 font-semibold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>See the 4-Step Process</span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
