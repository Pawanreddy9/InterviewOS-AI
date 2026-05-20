import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { BarChart3, Briefcase, TrendingUp, Award } from 'lucide-react';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.displayName}! 👋</h1>
        <p className="text-gray-600 dark:text-gray-400">Continue your interview practice</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Briefcase, label: 'Interviews Done', value: '0' },
          { icon: BarChart3, label: 'Average Score', value: '—' },
          { icon: TrendingUp, label: 'Last Practice', value: 'Never' },
          { icon: Award, label: 'Best Score', value: '—' },
        ].map((stat, i) => (
          <GlassmorphismCard key={i} hover>
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </GlassmorphismCard>
        ))}
      </div>

      <GlassmorphismCard className="p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ready for an interview?</h2>
            <p className="text-gray-600 dark:text-gray-400">Practice with AI-powered questions tailored to your chosen role</p>
          </div>
          <Link href="/interview" className="mt-4 md:mt-0 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
            Start Interview
          </Link>
        </div>
      </GlassmorphismCard>

      <GlassmorphismCard>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Recent Interviews</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">No interviews yet. Start your first interview!</p>
        </div>
      </GlassmorphismCard>
    </div>
  );
}
