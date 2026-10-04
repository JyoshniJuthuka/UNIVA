import { 
  Sparkles, 
  BarChart3, 
  Route, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { CORE_FEATURES } from '../data/mockData';

interface FeaturesSectionProps {
  onFeatureSelect: (index: number) => void;
}

export default function FeaturesSection({ onFeatureSelect }: FeaturesSectionProps) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-indigo-600" />;
      case 'Route':
        return <Route className="w-6 h-6 text-cyan-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-purple-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Everything you need to move forward.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Built from first principles for college students and recent graduates who want clear, verified direction instead of guesswork.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-slate-50/60 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {index + 1}. {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                <span className="text-slate-600">UNIVA Core Engine</span>
                <button
                  onClick={() => onFeatureSelect(index)}
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Feature</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Bottom Summary Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900">
              Designed as an end-to-end guidance ecosystem
            </div>
            <div className="text-xs text-slate-600">
              No fragmented tools. Diagnostic, roadmap, project verification, and opportunity discovery in sync.
            </div>
          </div>
          <a
            href="#demo"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors"
          >
            Launch Interactive Simulation
          </a>
        </div>

      </div>
    </section>
  );
}
