'use client';


import { AnimatedNumber } from '@/components/framer-motion/AnimatedNumber';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function AnimatedNumberInView() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(614);
  }

  return (
    <div className='flex w-full items-center justify-center' ref={ref}>
      <AnimatedNumber
        className='inline-flex items-center font-bold text-2xl'
        springOptions={{
          bounce: 0,
          duration: 5000,
        }}
        value={value}
      />
    </div>
  );
}
