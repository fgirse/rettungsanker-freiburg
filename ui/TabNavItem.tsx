import clsx from 'clsx';
import Link from 'next/link';

export const TabNavItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
        'bg-slate-700 text-slate-100 hover:bg-yellow-500 hover:text-white hover:border-b border-b-white':
          !isActive,
        'bg-vercel-blue text-white': isActive,
      })}
    >
      {children}
    </Link>
  );
};
