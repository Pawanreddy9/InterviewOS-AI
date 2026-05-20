import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun, LogOut } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">InterviewOS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {user && (
              <>
                <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">
                  Dashboard
                </Link>
                <Link href="/interview" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">
                  Interview
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {user ? (
              <button onClick={handleSignOut} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg">
                <LogOut className="w-5 h-5" />
              </button>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
