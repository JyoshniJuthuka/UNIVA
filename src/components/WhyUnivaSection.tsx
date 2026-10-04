import { 
  Sliders, 
  Target, 
  Network, 
  HeartHandshake 
} from 'lucide-react';
import { WHY_UNIVA_BENEFITS } from '../data/mockData';

export default function WhyUnivaSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'personalized':
        return <Sliders className="w-6 h-6 text-blue-600" />;
      case 'actionable':
        return <Target className="w-6 h-6 text-indigo-600" />;
      case 'connected':
        return <Network className="w-6 h-6 text-purple-600" />;
      case 'accessible':
        return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      default:
        return <Target className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Value Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Why UNIVA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Designed to bridge the gap between academic education and industry readiness with uncompromised clarity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_UNIVA_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(benefit.id)}
                </div>

                <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Pillar 0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {benefit.title}
                </h3>

                <div className="text-xs font-semibold text-slate-700 mb-3">
                  {benefit.tagline}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Student-centric</span>
                <span className="text-blue-600 font-semibold">Principle</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
