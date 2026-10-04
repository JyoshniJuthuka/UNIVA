import { 
  GraduationCap, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Award, 
  Users2,
  Building2,
  BookOpenCheck
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Academic-to-Industry Bridge',
      description: 'Translating traditional college degree subjects into the practical, stack-specific skills demanded by contemporary hiring teams.',
      icon: <Building2 className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Action-First Learning',
      description: 'Moving students away from passive video-watching into verified portfolio projects and tangible milestone deliverables.',
      icon: <BookOpenCheck className="w-5 h-5 text-indigo-600" />
    },
    {
      title: 'Opportunity Transparency',
      description: 'Connecting learning milestones directly to real internships and junior roles, eliminating the guessing game of job requirements.',
      icon: <Target className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Venture Background & Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            About UNIVA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            An early-stage EdTech initiative developed as part of the Wadhwani Foundation Venture Initiative to solve career confusion for the next generation of learners.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Wadhwani Foundation Venture Track</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              "Every student deserves a clear roadmap, not a guessing game."
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In college campuses across India and emerging economies, students possess high ambition but suffer from severe informational asymmetry. They don't know what career paths suit their instincts, what skills employers actually require, or what to study after standard coursework.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              UNIVA was conceived to replace scattered Google searches and tutorial rabbit holes with a single, intelligent operating system. By analyzing skill baselines, charting milestone roadmaps, and linking directly to opportunities, UNIVA democratizes high-quality career steering for every student.
            </p>

            {/* Credibility Callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Venture Presentation Standards:</strong> We uphold honest prototype integrity. All demonstration algorithms, skill matches, and opportunity listings are explicitly framed as prototype models for mentor, customer, and judge evaluation.
              </div>
            </div>
          </div>

          {/* Right Narrative Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-7 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>UNIVA Mission Charter</span>
              </div>
              <blockquote className="text-lg font-semibold text-slate-100 leading-snug">
                "Your Future. Your Skills. Your Path."
              </blockquote>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empowering college students and fresh graduates with personalized diagnostics, actionable learning roadmaps, and verified proof-of-work to launch meaningful technical and creative careers.
              </p>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Wadhwani Foundation Project</span>
                <span className="text-slate-300 font-medium">EdTech Venture 2026</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-6 text-slate-900 space-y-2">
              <div className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                Target Stakeholders
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li>Undergraduate college students seeking structured guidance</li>
                <li>Fresh graduates wanting to transition into technical roles</li>
                <li>University placement cells & faculty mentors</li>
                <li>Hiring startups looking for verified skill competence</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
