'use client'
import CountUp from 'react-countup';

export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} decimal='.' decimals={2} prefix='$' duration={2} />
    </div>
  );
};
