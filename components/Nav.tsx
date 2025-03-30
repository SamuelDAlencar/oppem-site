'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <header className="fixed w-full">
      <nav className="flex py-7 justify-around z-10 bg-white">
        <Link href="/">
          <img src="/icons/oppem_icon.png " alt="oppem_icon" className="w-12 content-center" />
        </Link>

        <section className="flex justify-around w-5/12">
          <Link href="/about" className="link_component tracking-widest">
            Sobre a Oppem
          </Link>
          <Link href="/products" className="link_component tracking-widest">
            Nossos Produtos
          </Link>
          <Link href="/clients" className="link_component tracking-widest">
            Clientes
          </Link>
          <Link href="/contact" className="link_component tracking-widest">
            Contato
          </Link>
        </section>

        <Link href="/"></Link>
      </nav>
    </header>
  );
}
