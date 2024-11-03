'use client';

import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [opacity, setOpacity] = useState(1);

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
    <>
      <Header />

      <main>
        <section className="linesDesign_section" style={{ opacity: opacity }}>
          <div className="firstLine_div"></div>
          <div className="secondLine_div"></div>
          <div className="thirdLine_div"></div>
          <div className="fourthLine_div"></div>
        </section>

        <div className="sectionsContainer_div">
          <section className="slogan_section section">
            <h1>
              Novas formas
              <br />
              de construir
              <br />o <span className="future_span">futuro</span>.
            </h1>
          </section>

          <div className="divisionLine"></div>

          <section className="clients_section section">nossos clientes:</section>
        </div>
      </main>

      <Footer />
    </>
  );
}
