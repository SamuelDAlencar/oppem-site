export default function Header({ theme, toggleTheme }: { theme: String; toggleTheme: () => void }) {
  return (
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
  );
}
