export default function Clients() {
  return (
    <section className="flex items-center h-screen">
      <section className="w-2/5 pl-64">
        <h1 className="text-7xl mt-8 h-72">Clientes</h1>
      </section>

      <section className="w-3/5 flex items-center">
        <div className="w-full overflow-hidden relative">
          <div className="flex flex-col animate-carousel">
            {[
              '/images/aperam.png',
              '/images/arcelormittal.png',
              '/images/nestle.png',
              '/images/kaefer.png',
              '/images/gerdau.png',
              '/images/arcadis.png',
              '/images/bunge.png',
              '/images/suzano.png',
              '/images/timenow.png',
            ].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-8">
                <img src={logo} alt="Company logo" className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
