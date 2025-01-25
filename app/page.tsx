'use client';

import './globals.css';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

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
      <header className="fixed w-full flex py-7 justify-around z-10 bg-white">
        <img src="/icons/oppem_icon.png " alt="oppem_icon" className="w-12 content-center" />

        <section className="flex justify-around w-5/12">
          <button className="tracking-widest">Sobre a Oppem</button>
          <button className="tracking-widest">Nosso sistema</button>
          <button className="tracking-widest">Clientes</button>
          <button className="tracking-widest">Contato</button>
        </section>

        <button className="float-right" onClick={toggleTheme}>
          {theme === 'light' ? <img src="/icons/moon.png" alt="" className="w-8" /> : <img src="/icons/sun.png" alt="" className="w-8" />}
        </button>
      </header>

      <main className="h-full absolute overflow-x-hidden">
        <section className="flex items-center h-[100vh]">
          <section className="w-2/5 pl-64">
            <h1 className="text-7xl mt-8 h-72">
              Novas formas
              <br />
              de construir
              <br />o <span className="text-teal-500 font-medium">futuro</span>.
            </h1>

            <p className="text-2xl">
              Acreditamos em um futuro digital e online para indústrias que buscam transformar os processos burocráticos da gestão de contratos em etapas automatizadas,
              digitalizadas e eficientes.
            </p>
          </section>

          <section className="flex mr-[-600px]">
            <img src="/images/macbook-white.png" className="w-[1080px] absolute h-[575px] ml-96" alt="" />
            <img src="/images/main-page.png" className="w-[1010px] ml-[576px] mt-11" alt="" />
          </section>
        </section>

        <section className="flex items-center h-[100vh]">
          <section className="w-2/5 pl-64">
            <h1 className="text-7xl mt-8 h-72">Quem somos</h1>

            <p className="text-2xl">
              Somos uma startup de tecnologia do setor industrial (Indtech) fundada em 2018. Temos como missão inovar e transformar digitalmente a gestão de contratos industriais
              de forma eficiente e sustentável.
            </p>
          </section>

          <section>
            <img src="/images/oppem-team.jpg" alt="oppem-team" className="w-[810px] ml-[376px] mt-11" />
          </section>
        </section>

        <section className="flex items-center h-[100vh]">
          <section className="w-2/5 pl-64">
            <h1 className="text-7xl mt-8 h-72">Nosso sistema</h1>
          </section>

          <section></section>
        </section>

        <section className="flex items-center h-[100vh]">
          <section className="w-2/5 pl-64">
            <h1 className="text-7xl mt-8 h-72">Clientes</h1>
          </section>

          <section></section>
        </section>

        <section>
          <section className="w-2/5 pl-64">
            <h1 className="text-7xl mt-8 h-72">Entre em contato</h1>
          </section>

          <section></section>
        </section>
      </main>
    </body>
  );
}
