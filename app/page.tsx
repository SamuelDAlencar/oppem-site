'use client';

import '../styles/globals.css'

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import Header from '../components/Header';
import About from './about';
import System from './system';
import Contact from './contact';
import Clients from './clients';

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeOutPoint = 600;
      const newOpacity = Math.max(1 - scrollPosition / fadeOutPoint, 0);

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <body className="font-avgard dark:bg-slate-900 dark:text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="h-full absolute overflow-x-hidden">
        <About />

        <System />
        <Clients />
        <Contact />
      </main>
    </body>
  );
}
