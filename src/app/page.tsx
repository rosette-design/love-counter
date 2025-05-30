'use client';

import LoveCounter from '@/components/LoveCounter';

export default function Home() {
  // Hardcoded configuration values
  const hardcodedConfig = {
    // Set your anniversary date here (YYYY-MM-DD format)
    startDate: new Date('2023-02-14'),
    // Set your names here
    person1Name: 'Alex',
    person2Name: 'Jordan',
    // Set your background image URL or gradient
    backgroundImage: 'linear-gradient(to right, #ff758c, #ff7eb3)'
    // Alternatively, use an image URL:
    // backgroundImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7'
  };

  return (
    <main>
      <LoveCounter 
        startDate={hardcodedConfig.startDate}
        person1Name={hardcodedConfig.person1Name}
        person2Name={hardcodedConfig.person2Name}
        backgroundImage={hardcodedConfig.backgroundImage}
      />
    </main>
  );
}
