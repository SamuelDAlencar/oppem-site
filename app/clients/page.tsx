export default function Clients() {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen py-16">
      <section className="w-full md:w-2/5 px-8 md:pl-16 lg:pl-24 xl:pl-32 2xl:pl-64 mb-12 md:mb-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl">Clientes</h1>
      </section>

      <section className="w-full md:w-3/5 px-8">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
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
              <div key={index} className="flex items-center justify-center">
                <img src={logo} alt="Company logo" className="max-w-full max-h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
