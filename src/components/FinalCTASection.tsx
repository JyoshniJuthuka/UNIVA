import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onStartJourney: () => void;
  onRequestDemo: () => void;
}

export default function FinalCTASection({ onStartJourney, onRequestDemo }: FinalCTAProps) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-8 sm:p-14 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Take Control of Your Career Path</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Stop wondering what to do next.
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed text-balance">
              Start building a career path that is clear, personalized, and actionable. Discover your skill gaps, follow guided milestones, and connect with real opportunities.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartJourney}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-blue-300" />
                <span>Request a Demo</span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-blue-200/70">
              Developed as a Wadhwani Foundation Venture Project · For students, mentors, and placement cells
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
