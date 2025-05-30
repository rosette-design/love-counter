'use client';

import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface LoveCounterProps {
  startDate: Date;
  person1Name: string;
  person2Name: string;
  backgroundImage: string;
}

export default function LoveCounter({ 
  startDate, 
  person1Name, 
  person2Name, 
  backgroundImage 
}: LoveCounterProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      
      // Calculate total time differences
      const totalDays = differenceInDays(now, startDate);
      const totalHours = differenceInHours(now, startDate);
      const totalMinutes = differenceInMinutes(now, startDate);
      const totalSeconds = differenceInSeconds(now, startDate);
      
      // Calculate relative values
      setDays(totalDays);
      setHours(totalHours % 24);
      setMinutes(totalMinutes % 60);
      setSeconds(totalSeconds % 60);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-md bg-black/40 p-8 rounded-3xl shadow-2xl text-white max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-rose-200">
          {person1Name} & {person2Name}
        </h1>
        <h2 className="text-2xl text-center mb-8 text-rose-100">In love for</h2>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold">{days}</div>
            <div className="text-sm opacity-80">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold">{hours}</div>
            <div className="text-sm opacity-80">Hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold">{minutes}</div>
            <div className="text-sm opacity-80">Minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-bold">{seconds}</div>
            <div className="text-sm opacity-80">Seconds</div>
          </div>
        </div>
        
        <div className="text-center italic text-sm opacity-70">
          Since {startDate.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
} 