import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="bg-[#FFCC00] relative">
        <div className="min-h-[700px] h-[calc(49vw-122px)] container mx-auto max-w-7xl flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
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
            <div className="flex flex-row gap-2 mt-12">
              <Button variant="default" size="lg" endIcon={<ArrowRight />}>
                Mehr erfahren
              </Button>
              <Button variant="outline" size="lg">
                Kontakt
              </Button>
            </div>
          </div>
          <div className="flex-1 shrink-0 basis-auto min-w-1/2 h-full"></div>
          <div className="" />
          <Image
            src="/hero-background.jpg"
            width={946}
            height={943}
            alt="hero-background"
            className="absolute right-0 -bottom-[122px] max-w-[49vw]"
          />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl flex flex-row items-center justify-between mt-56">
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">350+</span>
          <span className="text-2xl text-[#646464]">Erfolgreiche Projekte</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">65+</span>
          <span className="text-2xl text-[#646464]">Teammitglieder</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">80+</span>
          <span className="text-2xl text-[#646464]">Zufriedene Kunden</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">100%</span>
          <span className="text-2xl text-[#646464]">Kundenzufriedenheit</span>
        </div>
      </section>

      <section className="bg-[#0E0E0E] w-full mt-28 relative max-h-[1558px]">
        <div className="absolute size-[100px] bg-white top-0 left-[100px]" />
        <div className="absolute size-[100px] bg-white top-[100px] left-0" />
        <div className="container mx-auto max-w-7xl translate-y-1/7 ">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex flex-row gap-3 items-center mb-6">
              <span className="w-10 h-px bg-white" />
              <span className="text-base tracking-widest text-white uppercase">Services</span>
              <span className="w-10 h-px bg-white" />
            </div>
            <h2 className="text-6xl font-medium text-white mb-4 max-w-[500px]">
              Unsere Dienstleistungen
            </h2>
            <p className="text-[#E7E7E7] text-lg leading-[30px] mt-12">
              Mit unseren maßgeschneiderten Service-Modulen – Projektmanagement, Projektleitung und
              Projektcontrolling – bieten wir umfassende Unterstützung für einen reibungslosen
              Projektablauf. Als Ihr engagiertes Baumanagement-Team übernehmen wir
              projektspezifische Aufgaben – sei es durch fachkundige Beratung oder durch die
              Übernahme zentraler Steuerungs- und Kontrollfunktionen. Wir kümmern uns um die
              Herausforderungen, damit Sie sich ganz auf die Transformation Ihrer Immobilie
              konzentrieren können.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-14 gap-y-18">
            {/* Card 1 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample1.png"
                width={500}
                height={579}
                alt="Projektmanagement"
                className="w-full  object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  Projektmanagement
                </h3>
                <p className="text-[#FFD43E] text-lg leading-[30px] font-medium">
                  Ganzheitliche Steuerung und Koordination aller Projektphasen für einen
                  erfolgreichen Bauablauf.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample2.png"
                width={500}
                height={579}
                alt="Bauherrenvertretung"
                className="w-full  object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  Bauherrenvertretung
                </h3>
                <p className="text-[#FFD43E] text-lg lea font-medium">
                  Wir vertreten Ihre Interessen und steuern Ihr Bauprojekt professionell von Anfang
                  bis Ende.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample3.png"
                width={500}
                height={579}
                alt="Baumanagement"
                className="w-full  object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  Baumanagement
                </h3>
                <p className="text-[#FFD43E] text-lg lea font-medium">
                  Effiziente Planung, Koordination und Überwachung für eine reibungslose
                  Bauabwicklung.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample1.png"
                width={500}
                height={579}
                alt="Nachhaltiges Sanieren"
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  Nachhaltiges Sanieren
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  Ressourcenschonende Modernisierung für energieeffiziente und zukunftsfähige
                  Gebäude.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample2.png"
                width={500}
                height={579}
                alt="Kostenberatung"
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  Kostenberatung
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  Transparente Budgetplanung und -kontrolle für eine wirtschaftliche Umsetzung Ihres
                  Projekts.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample3.png"
                width={500}
                height={579}
                alt="Malibu Beach, CA"
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  Malibu Beach, CA
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  Lorem ipsum dolor sit amet consectetur id senectus velit faucibus quisque at
                  lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFCC00] relative h-[651px] overflow-hidden mt-[550px] flex">
        <div className="container mx-auto max-w-7xl flex flex-row gap-10 items-center h-full">
          <div className="flex flex-col gap-24">
            <div>
              <div className="flex flex-row gap-2 items-center mb-4">
                <div className="w-7 h-px bg-[#0E0E0E]" />
                <span className="text-[#0E0E0E] font-medium text-base uppercase">Projekte</span>
              </div>
              <h2 className="text-6xl font-medium text-[#0E0E0E]">Demnächst verfügbar...</h2>
            </div>
            <div>
              <p className="text-[#2F2F2F] text-lg leading-[30px] mb-10">
                Bald präsentieren wir Ihnen an dieser Stelle unsere spannenden Projekte
              </p>
              <div className="flex flex-row gap-11">
                <Button variant="default" size="lg" endIcon={<ArrowRight />}>
                  Anzeigen
                </Button>
                <Button variant="outline" size="lg">
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
          <div className="min-w-1/2" />
        </div>
        <Image
          src="/projects.png"
          width={921}
          height={650}
          alt="projects"
          className="absolute right-0 top-0 w-1/2 h-full"
        />
        <div className="size-[100px] bg-[#FFCC00] absolute top-0 right-0" />
        <div className="size-[100px] bg-[#FFCC00] absolute bottom-0 right-0" />
        <div className="size-[100px] bg-[#FFCC00] absolute bottom-0 right-[200px]" />
        <div className="size-[100px] bg-[#FFCC00] absolute bottom-[100px] right-[100px]" />
      </section>
    </>
  );
}
