export default function About() {
  return (
    <section>
      <section className="flex items-center h-[100vh]">
        <section className="w-2/5 pl-64">
          <h1 className="text-7xl mt-8 h-72">
            Novas formas
            <br />
            de construir
            <br />o <span className="text-teal-500 font-medium">futuro</span>.
          </h1>

          <p className="text-2xl">
            Acreditamos em um futuro digital e online para indústrias que buscam transformar os processos burocráticos da gestão de contratos em etapas automatizadas, digitalizadas
            e eficientes.
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
            Somos uma startup de tecnologia do setor industrial (Indtech) fundada em 2018. Temos como missão inovar e transformar digitalmente a gestão de contratos industriais de
            forma eficiente e sustentável.
          </p>
        </section>

        <section>
          <img src="/images/oppem-team.jpg" alt="oppem-team" className="w-[810px] ml-[376px] mt-11" />
        </section>
      </section>
    </section>
  );
}
