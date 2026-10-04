import { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  AlertCircle, 
  TrendingUp, 
  Target, 
  RefreshCw, 
  Layers, 
  Briefcase,
  BookOpen,
  Info
} from 'lucide-react';
import { CAREER_TRACKS } from '../data/mockData';
import { CareerDomain, ExperienceLevel, DiscoveryResult } from '../types';

interface InteractiveDemoProps {
  onExploreFullRoadmap: (trackTitle: string) => void;
  onExploreOpportunities: (skill: string) => void;
}

export default function InteractiveDemoSection({
  onExploreFullRoadmap,
  onExploreOpportunities
}: InteractiveDemoProps) {
  // Preset interests
  const interestsList = [
    'Technology & Web',
    'Data & Analytics',
    'Product & Design',
    'Backend & Systems'
  ];

  // Pool of available selectable skills
  const availableSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git & GitHub',
    'Python',
    'SQL',
    'Excel / Spreadsheets',
    'Figma',
    'Wireframing',
    'REST APIs',
    'UI/UX'
  ];

  // State for user inputs
  const [selectedInterest, setSelectedInterest] = useState('Technology & Web');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['HTML', 'CSS', 'JavaScript']);
  const [selectedGoal, setSelectedGoal] = useState<CareerDomain>('Frontend Developer');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel>('Beginner');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<DiscoveryResult | null>(null);

  // Toggle a skill in user's selection
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Generate path logic
  const handleGeneratePath = () => {
    setIsGenerating(true);

    setTimeout(() => {
      // Find matching track
      const track = CAREER_TRACKS.find((t) => t.title === selectedGoal) || CAREER_TRACKS[0];

      // Calculate skills possessed vs needed
      const possessed = track.requiredSkills.filter((req) => 
        selectedSkills.some((s) => s.toLowerCase() === req.toLowerCase() || req.toLowerCase().includes(s.toLowerCase()))
      );

      const toImprove = track.requiredSkills.filter((req) => !possessed.includes(req));

      // Calculate match % (heuristic)
      const basePercentage = Math.round((possessed.length / track.requiredSkills.length) * 100);
      const matchScore = Math.max(30, Math.min(95, basePercentage > 0 ? basePercentage : 35));

      setResult({
        career: track,
        matchPercentage: matchScore,
        possessedSkills: possessed.length > 0 ? possessed : ['Fundamental Aptitude'],
        skillsToImprove: toImprove.length > 0 ? toImprove : ['Industry Best Practices', 'Advanced Architecture'],
        recommendedNextStep: track.recommendedFirstStep,
        roadmapPreview: track.roadmap
      });

      setIsGenerating(false);
    }, 600);
  };

  return (
    <section id="demo" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Try UNIVA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Test the career discovery engine. Input your current background and target career to simulate personalized skill-gap analysis and roadmap generation.
          </p>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-8 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Venture Prototype Notice:</strong> This demonstration uses heuristic rule algorithms to showcase UNIVA’s student experience. Recommendations are representative simulations.
            </span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-amber-700 font-medium">
            Demo v1.0
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Configure Your Profile
              </h3>
              <button
                type="button"
                onClick={() => {
                  setSelectedSkills(['HTML', 'CSS', 'JavaScript']);
                  setSelectedGoal('Frontend Developer');
                  setSelectedExperience('Beginner');
                  setResult(null);
                }}
                className="text-xs text-slate-600 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Example</span>
              </button>
            </div>

            {/* Field 1: Interest */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                1. Primary Interest Area
              </label>
              <div className="grid grid-cols-2 gap-2">
                {interestsList.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => setSelectedInterest(interest)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                      selectedInterest === interest
                        ? 'bg-blue-50 border-blue-500 text-blue-800 font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 2: Current Skills */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  2. Current Skills (Select all you know)
                </label>
                <span className="text-xs text-slate-600 tabular-nums">
                  {selectedSkills.length} selected
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 p-3 bg-slate-50 rounded-xl border border-slate-200/80 max-h-44 overflow-y-auto">
                {availableSkills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                        isSelected
                          ? 'bg-blue-600 text-white font-medium shadow-2xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 3: Career Goal */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                3. Desired Career Goal
              </label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value as CareerDomain)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
              >
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Backend Developer">Backend Developer</option>
              </select>
            </div>

            {/* Field 4: Experience Level */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                4. Experience Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Beginner', 'Intermediate', 'Final Year / Fresh Graduate'] as ExperienceLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSelectedExperience(level)}
                    className={`px-2 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer truncate ${
                      selectedExperience === level
                        ? 'bg-blue-50 border-blue-500 text-blue-800 font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                    title={level}
                  >
                    {level === 'Final Year / Fresh Graduate' ? 'Fresh Grad' : level}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              type="button"
              onClick={handleGeneratePath}
              disabled={isGenerating}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Skill Gaps...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Path</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Generated Path Results */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6 animate-in fade-in duration-300">
                
                {/* Result Top Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Diagnosis Output
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                      {result.career.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-md">
                      {result.career.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl shrink-0">
                    <div className="text-right">
                      <div className="text-[11px] text-slate-500 font-medium">Skill Match</div>
                      <div className="text-2xl font-extrabold text-blue-600 tabular-nums">
                        {result.matchPercentage}%
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      Fit
                    </div>
                  </div>
                </div>

                {/* Skills Analysis Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Possessed Skills */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="text-xs font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Skills You Already Have ({result.possessedSkills.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {result.possessedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-emerald-800 bg-white border border-emerald-200 px-2 py-0.5 rounded shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills to Improve */}
                  <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <div className="text-xs font-bold text-indigo-900 mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-indigo-600" />
                      Skills to Bridge ({result.skillsToImprove.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {result.skillsToImprove.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-indigo-800 bg-white border border-indigo-200 px-2 py-0.5 rounded shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Immediate Next Step Recommendation */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-slate-50 to-white border border-blue-200">
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                    Recommended Next Action
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {result.recommendedNextStep}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Estimated bridge timeframe: ~{result.career.averageBridgeMonths} based on {selectedExperience} baseline.
                  </div>
                </div>

                {/* Milestone Roadmap Sequence */}
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Personalized Roadmap Milestones
                  </div>
                  <div className="space-y-2">
                    {result.roadmapPreview.map((step, idx) => {
                      const isCompleted = idx < 2;
                      const isCurrent = idx === 2;
                      return (
                        <div
                          key={step.id}
                          className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                            isCompleted
                              ? 'bg-slate-50 border-slate-200 text-slate-600'
                              : isCurrent
                              ? 'bg-blue-50 border-blue-300 text-blue-950 font-semibold shadow-2xs'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 bg-white border border-slate-300 text-slate-700">
                              {isCompleted ? '✓' : idx + 1}
                            </span>
                            <span>{step.title}</span>
                          </div>
                          <span className="text-[11px] font-medium text-slate-500">
                            {isCompleted ? 'Validated' : isCurrent ? 'Active Focus' : step.duration}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    onClick={() => onExploreFullRoadmap(result.career.title)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Full Interactive Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onExploreOpportunities(result.skillsToImprove[0] || 'React')}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Browse Matched Opportunities</span>
                  </button>
                </div>

              </div>
            ) : (
              /* Idle Placeholder state before generation */
              <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[460px] space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="max-w-md space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">
                    Ready to discover your path?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Select your interest, toggle the skills you currently possess, and click <strong>"Generate My Path"</strong> to see your simulated match score, skill gap diagnostic, and custom learning roadmap.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleGeneratePath}
                  className="px-5 py-2.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                >
                  Quick Run with Example Data
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
