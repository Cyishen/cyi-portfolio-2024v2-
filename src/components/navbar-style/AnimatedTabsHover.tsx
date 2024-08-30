import { Home, PhoneCall, SquareTerminal } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import Link from 'next/link';

export function AnimatedTabsHover() {
  const TABS = [
    {
      label: 'Home',
      icon: <Home className='h-5 w-5' />,
      href: '/',
    },
    {
      label: 'Work',
      icon: <SquareTerminal className='h-5 w-5' />,
      href: '/work',
    },
  ];

  return (
    <div className='flex space-x-2 p-2'>
      <AnimatedBackground
        defaultValue={TABS[0].label}
        className='rounded-lg bg-zinc-100'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab) => (
          <button
            key={tab.label}
            data-id={tab.label}
            type='button'
            className='inline-flex h-9 w-full items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 px-2'
          >
            <Link href={tab.href}>
              <p className='flex items-center space-x-1'>
                <span className='hidden sm:block'>{tab.label}</span>
                <span>{tab.icon}</span>
              </p>
            </Link>
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
