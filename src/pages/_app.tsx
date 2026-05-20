import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/hooks/useTheme';

export default function App({ Component, pageProps }: AppProps) {
  useTheme();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
