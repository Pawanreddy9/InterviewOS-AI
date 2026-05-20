import Link from 'next/link';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { Zap, Users, Brain, Volume2, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Master IT Interviews with AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Practice realistic AI-powered interviews for Technical Support, Software Engineering, and QA roles
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/login" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
            Get Started Free
          </Link>
          <Link href="#features" className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800 font-semibold">
            Learn More
          </Link>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose InterviewOS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: 'AI-Powered', desc: 'Real-time feedback from Google Gemini' },
            { icon: Volume2, title: 'Voice Interviews', desc: 'Practice with speech recognition' },
            { icon: Target, title: 'Role-Specific', desc: '3 IT roles with realistic scenarios' },
            { icon: TrendingUp, title: 'Progress Tracking', desc: 'Monitor your improvement' },
            { icon: Users, title: 'Expert Questions', desc: 'Curated by industry professionals' },
            { icon: Zap, title: 'Instant Feedback', desc: 'Score & recommendations immediately' },
          ].map((feature, i) => (
            <GlassmorphismCard key={i} hover>
              <div className="p-6">
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Supported IT Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Technical Support', scenarios: 12 },
            { title: 'Software Engineer', scenarios: 15 },
            { title: 'QA Tester', scenarios: 10 },
          ].map((role, i) => (
            <GlassmorphismCard key={i} hover>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{role.scenarios} scenarios</p>
                <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  Start Practicing →
                </Link>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to ace your IT interviews?</h2>
        <Link href="/login" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg font-semibold text-lg">
          Start Your Free Interview Now
        </Link>
      </section>
    </div>
  );
}
