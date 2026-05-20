import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import Link from 'next/link';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { Code2, Wrench, Bug } from 'lucide-react';

const roles = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: Code2,
    description: 'Master backend development, system design, and coding interviews',
    scenarios: 15,
    avgDuration: '20-25 min',
  },
  {
    id: 'technical-support',
    title: 'Technical Support Engineer',
    icon: Wrench,
    description: 'Learn troubleshooting, customer communication, and IT support',
    scenarios: 12,
    avgDuration: '15-20 min',
  },
  {
    id: 'qa-tester',
    title: 'QA Tester',
    icon: Bug,
    description: 'Understand testing methodology, bug identification, and test planning',
    scenarios: 10,
    avgDuration: '15-20 min',
  },
];

export default function InterviewSelection() {
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

  const handleStartInterview = (roleId: string) => {
    router.push(`/interview-session?role=${roleId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Choose Your Role</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Select an IT role to practice with AI-powered interview scenarios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role) => (
          <GlassmorphismCard key={role.id} hover className="flex flex-col">
            <div className="p-8 flex flex-col h-full">
              <role.icon className="w-16 h-16 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{role.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{role.description}</p>
              
              <div className="space-y-2 mb-6 pt-4 border-t border-white/20 dark:border-slate-700/30">
                <p className="text-sm"><span className="font-semibold">{role.scenarios}</span> scenarios</p>
                <p className="text-sm"><span className="font-semibold">{role.avgDuration}</span> average</p>
              </div>

              <button
                onClick={() => handleStartInterview(role.id)}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
              >
                Start Interview
              </button>
            </div>
          </GlassmorphismCard>
        ))}
      </div>
    </div>
  );
}
