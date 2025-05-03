import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-[#FFCC00] relative">
        <div className="min-h-[800px] container mx-auto max-w-7xl flex flex-row items-center ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-[80px] font-medium leading-[88px]">
              Willkommen bei <span className="font-bold">ReNova</span>
            </h1>
            <p className="text-lg font-medium leading-[30px]">
              Ihrem Experten für nachhaltige Sanierung, Renovierung und Modernisierung von Wohn- und
              Gewerbeimmobilien. Als kompetenter Baumanagement-Dienstleister für eine reibungslose
              und effiziente Umsetzung Ihrer Bauprojekte. Von der ersten Idee bis zur finalen
              Fertigstellung bieten wir umfassende Beratungs- und Managementleistungen: Wir
              entwickeln maßgeschneiderte Konzepte, koordinieren erfahrene Fachhandwerker und
              überwachen den gesamten Bauprozess, um höchste Qualität, Nachhaltigkeit und Effizienz
              sicherzustellen.
            </p>
          </div>
          <div className="min-w-1/2 h-full"></div>
        </div>

        <Image
          src="/hero-background.png"
          width={946}
          height={943}
          alt="hero-background"
          className="absolute right-0 top-0 max-w-[49vw]"
        />
      </div>
    </>
  );
}
