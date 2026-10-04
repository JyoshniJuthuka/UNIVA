import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  CircleDot, 
  Flame, 
  TrendingUp, 
  Award,
  ChevronRight,
  ExternalLink,
  Target
} from 'lucide-react';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onHowItWorksClick: () => void;
  onSelectNextStep: () => void;
}

export default function HeroSection({
  onDiscoverClick,
  onHowItWorksClick,
  onSelectNextStep
}: HeroSectionProps) {
  // Interactive role switch in hero mockup
  const [activeHeroTrack, setActiveHeroTrack] = useState<'frontend' | 'data' | 'design'>('frontend');

  const heroProfiles = {
    frontend: {
      role: 'Frontend Developer',
      matchScore: 68,
      currentSkills: ['HTML', 'CSS', 'JavaScript'],
      skillsToDevelop: ['React', 'Git & GitHub', 'APIs', 'UI/UX'],
      nextStep: 'Learn React Fundamentals',
      nextModule: 'Module 4: Components & State Hooks',
      timeEstimate: '3 weeks left',
      completedCount: 3,
      totalCount: 7,
      growthRate: '+14% this month'
    },
    data: {
      role: 'Data Analyst',
      matchScore: 54,
      currentSkills: ['Excel', 'Spreadsheets', 'Basic Math'],
      skillsToDevelop: ['SQL', 'Python', 'Pandas', 'Power BI'],
      nextStep: 'Master Relational SQL Queries',
      nextModule: 'Module 2: JOINs & Subqueries',
      timeEstimate: '4 weeks left',
      completedCount: 2,
      totalCount: 6,
      growthRate: '+18% this month'
    },
    design: {
      role: 'UI/UX Designer',
      matchScore: 72,
      currentSkills: ['Design Principles', 'Color Theory', 'Wireframing'],
      skillsToDevelop: ['Figma Variants', 'Design Systems', 'Usability Testing'],
      nextStep: 'Build Responsive Component Systems',
      nextModule: 'Module 3: Auto Layout 5.0 & Tokens',
      timeEstimate: '2.5 weeks left',
      completedCount: 3,
      totalCount: 5,
      growthRate: '+22% this month'
    }
  };

  const profile = heroProfiles[activeHeroTrack];

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50">
      {/* Decorative ambient subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl overflow-hidden -z-10">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply" />
        <div className="absolute top-8 right-1/4 w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Venture Initiative Tagline */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Wadhwani Foundation Venture Initiative</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-700/80 font-normal">Next-Gen Career Intelligence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
              Your Future. <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Your Skills.
              </span> <br />
              Your Path.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              UNIVA is an AI-powered career guidance platform that helps college students and fresh graduates discover suitable career paths, identify skill gaps, build personalized learning roadmaps, and find relevant opportunities — all in one place.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Discover Your Path</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onHowItWorksClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Markers & Academic Alignment */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Personalized to your background</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Industry skill benchmarking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Actionable learning roadmap</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Floating UI Card 1: Top Right - Career Match */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-xl p-3 max-w-[190px] hidden sm:flex items-center gap-2.5 animate-bounce-subtle">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-slate-500">Career Match</div>
                <div className="text-base font-bold text-slate-900 tabular-nums">
                  {profile.matchScore}% Fit
                </div>
              </div>
            </div>

            {/* Floating UI Card 2: Bottom Left - Learning Progress */}
            <div className="absolute -bottom-5 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-xl p-3 max-w-[210px] hidden sm:flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-slate-500">Learning Progress</div>
                <div className="text-xs font-semibold text-slate-900">
                  {profile.completedCount} of {profile.totalCount} Milestones
                </div>
                <div className="text-[10px] text-emerald-600 font-medium">{profile.growthRate}</div>
              </div>
            </div>

            {/* Main Interactive Product Dashboard Container */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all">
              
              {/* Dashboard Top Header Bar */}
              <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-medium text-slate-300 ml-2">
                    UNIVA Intelligence Console
                  </span>
                </div>

                {/* Track Switcher */}
                <div className="flex items-center gap-1 bg-slate-800/90 p-0.5 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setActiveHeroTrack('frontend')}
                    className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                      activeHeroTrack === 'frontend'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setActiveHeroTrack('data')}
                    className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                      activeHeroTrack === 'data'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Data
                  </button>
                  <button
                    onClick={() => setActiveHeroTrack('design')}
                    className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                      activeHeroTrack === 'design'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Design
                  </button>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 space-y-5">
                
                {/* Career Goal & Readiness Score */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                      Active Target Goal
                    </div>
                    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <span>{profile.role}</span>
                      <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Junior Track
                      </span>
                    </div>
                  </div>

                  {/* Readiness Progress Ring/Metric */}
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/70 px-3.5 py-2 rounded-xl">
                    <div className="relative w-11 h-11 flex items-center justify-center">
                      <svg className="w-11 h-11 transform -rotate-90">
                        <circle
                          cx="22"
                          cy="22"
                          r="18"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          className="text-slate-200"
                          fill="transparent"
                        />
                        <circle
                          cx="22"
                          cy="22"
                          r="18"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          className="text-blue-600 transition-all duration-700"
                          fill="transparent"
                          strokeDasharray={113}
                          strokeDashoffset={113 - (113 * profile.matchScore) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute text-xs font-bold text-slate-900 tabular-nums">
                        {profile.matchScore}%
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">Skill Readiness</div>
                      <div className="text-[11px] text-slate-500">{profile.timeEstimate}</div>
                    </div>
                  </div>
                </div>

                {/* Current Skills vs Skills to Develop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Current Skills */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Current Skills ({profile.currentSkills.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.currentSkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-md shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills to Develop */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-indigo-900 flex items-center gap-1.5">
                        <CircleDot className="w-3.5 h-3.5 text-indigo-600" />
                        Skills to Develop ({profile.skillsToDevelop.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.skillsToDevelop.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-indigo-700 bg-indigo-50/80 border border-indigo-200/80 px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Next Recommended Step Card */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white border border-blue-200/90 rounded-xl p-4 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          Next Recommended Step
                        </span>
                        <span className="text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          Priority 1
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-slate-900">
                        {profile.nextStep}
                      </div>
                      <p className="text-xs text-slate-600">
                        {profile.nextModule} · Hands-on sprint with portfolio proof
                      </p>
                    </div>

                    <button
                      onClick={onSelectNextStep}
                      className="shrink-0 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Micro Action Bar */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="text-slate-400">
                    Interactive prototype data preview
                  </span>
                  <button
                    onClick={onDiscoverClick}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Run full career diagnostic</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
