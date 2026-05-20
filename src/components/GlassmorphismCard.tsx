import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassmorphismCard({ children, className = '', hover = false }: Props) {
  return (
    <div
      className={`
        bg-white/40 dark:bg-slate-800/40
        backdrop-blur-xl
        border border-white/20 dark:border-slate-700/30
        rounded-2xl
        shadow-lg
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
