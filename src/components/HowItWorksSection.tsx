import { useState } from 'react';
import { 
  Compass, 
  BarChart2, 
  Hammer, 
  Rocket, 
  ArrowRight, 
  Check, 
  Code, 
  Layers, 
  Briefcase,
  Sparkles
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

interface HowItWorksProps {
  onTryInteractiveDemo: () => void;
}

export default function HowItWorksSection({ onTryInteractiveDemo }: HowItWorksProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-6 h-6 text-blue-600" />;
      case 1:
        return <BarChart2 className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <Hammer className="w-6 h-6 text-purple-600" />;
      case 3:
        return <Rocket className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  // Preview interactive artifact for each step
  const renderStepPreview = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Discovery Assessment
              </span>
              <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium">
                Step 1 of 4
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-500 mb-1">Identified Natural Strengths</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Visual Hierarchy</span>
                  <span className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Analytical Logic</span>
                  <span className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Problem Decomposition</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg">
                <div className="text-xs font-semibold text-blue-900 mb-1">Top Career Compatibility</div>
                <div className="text-sm font-bold text-slate-900 flex items-center justify-between">
                  <span>Frontend Engineering</span>
                  <span className="text-blue-700 text-xs font-semibold">High Affinity</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Skill Diagnostic Matrix
              </span>
              <span className="text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
                Step 2 of 4
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                  <span>Frontend Core Mastery</span>
                  <span className="text-indigo-600 font-bold tabular-nums">68%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: '68%' }} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-900 font-medium">
                  ✓ HTML, CSS, JavaScript
                </div>
                <div className="p-2 bg-amber-50 border border-amber-200 rounded text-amber-900 font-medium">
                  ⏳ React, APIs, UI Testing
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Personalized Learning Sequence
              </span>
              <span className="text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-medium">
                Step 3 of 4
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-slate-800 line-through text-slate-400">Milestone 1: Web Foundations</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200 text-purple-950 font-semibold">
                <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shrink-0" />
                <span>Milestone 2: React Component Hierarchy</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200 text-slate-600">
                <Code className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Capstone: Production E-Commerce State Engine</span>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Targeted Opportunity Matching
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                Step 4 of 4
              </span>
            </div>
            <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-950">Frontend Development Intern</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded shadow-2xs">
                  92% Roadmap Fit
                </span>
              </div>
              <div className="text-xs text-emerald-800">
                FinTech Pulse · Remote · Stipend ₹18,000/mo
              </div>
              <div className="text-[11px] text-slate-600 pt-1">
                Matched 3 completed roadmap proof projects
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            The UNIVA Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            From initial career uncertainty to industry readiness in four structured phases.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector List */}
          <div className="lg:col-span-7 space-y-3.5">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {getStepIcon(index)}
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-600 tracking-wider">
                          {step.number} — {step.phase}
                        </span>
                        {isActive && (
                          <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                            Active Stage
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {isActive && (
                        <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 mt-2">
                          {step.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
                    Stage Visualizer
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Phase 0{activeStepIndex + 1}/04
                </span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {HOW_IT_WORKS_STEPS[activeStepIndex].phase}: {HOW_IT_WORKS_STEPS[activeStepIndex].title}
                </h4>
                <p className="text-xs text-slate-400">
                  {HOW_IT_WORKS_STEPS[activeStepIndex].detail}
                </p>
              </div>

              {/* Dynamic Step Artifact Container */}
              <div className="text-slate-900">
                {renderStepPreview(activeStepIndex)}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Interactive career roadmap engine
                </div>
                <button
                  onClick={onTryInteractiveDemo}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Test with your profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
