export default function About() {
  return (
    <section className="flex items-center h-[100vh]">
      <section className="w-2/5 pl-64">
        <h1 className="text-7xl mt-8 h-72">Quem somos</h1>

        <p className="text-2xl">
          Somos uma startup de tecnologia do setor industrial (Indtech) fundada em 2018. Temos como missão inovar e transformar digitalmente a gestão de contratos industriais de
          forma eficiente e sustentável.
        </p>
      </section>

      <section>
        <img src="/images/oppem-team.jpg" alt="oppem-team" className="w-[810px] ml-[376px] mt-11" />
      </section>
    </section>
  );
}
