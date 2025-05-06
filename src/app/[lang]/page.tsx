import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from '@/components/organisms/contact-form';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/types/i18n';
import { Header } from '@/components/templates/header';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} />
      <section className="bg-[#FFCC00] relative">
        <div className="min-h-[700px] h-[calc(49vw-122px)] container mx-auto max-w-7xl flex flex-row items-center justify-between px-6 2xl:px-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-[80px] font-medium leading-[88px]">
              {dict.hero.title} <span className="font-bold">{dict.hero.company}</span>
            </h1>
            <p className="text-lg font-medium leading-[30px]">{dict.hero.description}</p>
            <div className="flex flex-row gap-4 mt-12">
              <Button variant="default" size="lg" endIcon={<ArrowRight />}>
                {dict.hero.buttons.learnMore}
              </Button>
              <Button variant="outline" size="lg">
                {dict.hero.buttons.contact}
              </Button>
            </div>
          </div>
          <div className="flex-1 shrink-0 basis-auto min-w-1/2 h-full"></div>
          <div className="" />
          <Image
            src="/hero-background.jpg"
            unoptimized
            width={946}
            height={943}
            alt="hero-background"
            className="absolute right-0 -bottom-[122px] max-w-[49vw]"
          />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl flex flex-row items-center justify-between mt-56 px-6 2xl:px-0">
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">{dict.stats.projects.count}</span>
          <span className="text-2xl text-[#646464]">{dict.stats.projects.label}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">{dict.stats.team.count}</span>
          <span className="text-2xl text-[#646464]">{dict.stats.team.label}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">{dict.stats.clients.count}</span>
          <span className="text-2xl text-[#646464]">{dict.stats.clients.label}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-7xl font-medium text-[#0E0E0E]">
            {dict.stats.satisfaction.count}
          </span>
          <span className="text-2xl text-[#646464]">{dict.stats.satisfaction.label}</span>
        </div>
      </section>

      <section className="bg-[#0E0E0E] w-full mt-28 relative max-h-[1558px]">
        <div className="absolute size-[100px] bg-white top-0 left-[100px]" />
        <div className="absolute size-[100px] bg-white top-[100px] left-0" />
        <div className="container mx-auto max-w-7xl translate-y-1/7 px-6 2xl:px-0">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex flex-row gap-3 items-center mb-6">
              <span className="w-10 h-px bg-white" />
              <span className="text-base tracking-widest text-white uppercase">
                {dict.services.title}
              </span>
              <span className="w-10 h-px bg-white" />
            </div>
            <h2 className="text-6xl font-medium text-white mb-4 max-w-[500px]">
              {dict.services.heading}
            </h2>
            <p className="text-[#E7E7E7] text-lg leading-[30px] mt-12">
              {dict.services.description}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-14 gap-y-18">
            {/* Card 1 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample1.png"
                width={500}
                height={579}
                alt={dict.services.items.projectManagement.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  {dict.services.items.projectManagement.title}
                </h3>
                <p className="text-[#FFD43E] text-lg leading-[30px] font-medium">
                  {dict.services.items.projectManagement.description}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample2.png"
                width={500}
                height={579}
                alt={dict.services.items.clientRepresentation.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  {dict.services.items.clientRepresentation.title}
                </h3>
                <p className="text-[#FFD43E] text-lg lea font-medium">
                  {dict.services.items.clientRepresentation.description}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample3.png"
                width={500}
                height={579}
                alt={dict.services.items.constructionManagement.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-white">
                  {dict.services.items.constructionManagement.title}
                </h3>
                <p className="text-[#FFD43E] text-lg lea font-medium">
                  {dict.services.items.constructionManagement.description}
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample1.png"
                width={500}
                height={579}
                alt={dict.services.items.sustainableRenovation.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  {dict.services.items.sustainableRenovation.title}
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  {dict.services.items.sustainableRenovation.description}
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample2.png"
                width={500}
                height={579}
                alt={dict.services.items.costConsulting.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  {dict.services.items.costConsulting.title}
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  {dict.services.items.costConsulting.description}
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="overflow-hidden flex gap-6 flex-col">
              <Image
                src="/sample3.png"
                width={500}
                height={579}
                alt={dict.services.items.technicalDueDiligence.title}
                className="w-full object-cover"
              />
              <div className="flex-1 flex gap-3 flex-col">
                <h3 className="text-[27px] leading-[40px] font-semibold text-[#0E0E0E]">
                  {dict.services.items.technicalDueDiligence.title}
                </h3>
                <p className="text-[#646464] text-lg leading-[30px] font-medium">
                  {dict.services.items.technicalDueDiligence.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFCC00] relative h-[651px] overflow-hidden mt-[550px] flex">
        <div className="container mx-auto max-w-7xl flex flex-row gap-10 items-center h-full px-6 2xl:px-0">
          <div className="flex flex-col gap-24">
            <div>
              <div className="flex flex-row gap-2 items-center mb-4">
                <div className="w-7 h-px bg-[#0E0E0E]" />
                <span className="text-[#0E0E0E] font-medium text-base uppercase">
                  {dict.projects.title}
                </span>
              </div>
              <h2 className="text-6xl font-medium text-[#0E0E0E]">{dict.projects.heading}</h2>
            </div>
            <div>
              <p className="text-[#2F2F2F] text-lg leading-[30px] mb-10">
                {dict.projects.description}
              </p>
              <div className="flex flex-row gap-11">
                <Button variant="default" size="lg" endIcon={<ArrowRight />}>
                  {dict.projects.buttons.view}
                </Button>
                <Button variant="outline" size="lg">
                  {dict.projects.buttons.contact}
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

      <section className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-12 justify-between mt-28 px-6 2xl:px-0">
        <div className="flex flex-col gap-10 basis-1/2">
          <div className="relative">
            <div className="absolute size-[100px] bg-[#FFCC00] top-0 left-0" />
            <Image src="/worker1.jpg" alt="worker1" width={596} height={535} />
          </div>
          <p className="font-medium text-lg leading-[30px] text-[#646464]">
            {dict.about.paragraphs['1']}
          </p>
          <div className="relative mt-3">
            <div className="absolute size-[100px] bg-[#FFCC00] top-0 left-0" />
            <Image src="/worker2.jpg" alt="worker2" width={596} height={535} />
          </div>
          <p className="font-medium text-lg leading-[30px] text-[#646464]">
            {dict.about.paragraphs['2']}
          </p>
        </div>
        <div className="flex flex-col gap-10 basis-1/2">
          <div className="flex flex-col gap-0">
            <div className="flex flex-row gap-2 items-center mb-4">
              <div className="w-7 h-px bg-[#0E0E0E]" />
              <span className="text-[#0E0E0E] font-medium text-base uppercase">
                {dict.about.title}
              </span>
            </div>
            <h2 className="text-6xl leading-[70px] font-medium text-[#0E0E0E]">
              {dict.about.heading}
            </h2>
          </div>
          <div className="relative mt-10">
            <div className="absolute size-[100px] bg-[#FFCC00] bottom-0 right-0" />
            <Image src="/worker3.jpg" alt="worker3" width={596} height={535} />
          </div>
          <p className="font-medium text-lg leading-[30px] text-[#646464]">
            {dict.about.paragraphs['3']}
          </p>
          <div className="relative mt-3">
            <div className="absolute size-[100px] bg-[#FFCC00] top-0 left-0" />
            <Image src="/worker4.jpg" alt="worker4" width={596} height={535} />
          </div>
          <p className="font-medium text-lg leading-[30px] text-[#646464]">
            {dict.about.paragraphs['4']}
          </p>
        </div>
      </section>

      <section className="bg-[#0E0E0E] w-full mt-28 py-28 relative text-white">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-24 justify-between px-6 2xl:px-0">
          <div className="flex flex-col md:w-1/2 gap-0">
            <div className="mb-8">
              <h2 className="text-[82px] font-medium leading-[88px] mb-6">{dict.contact.title}</h2>
              <p className="text-lg font-medium leading-[30px] text-[#C5C5C5]">
                {dict.contact.description}
              </p>
            </div>
            <div className="flex flex-col gap-10 mb-20">
              <div className="flex gap-4">
                <Image src="/icons/email.svg" alt="email" width={53} height={39} />
                <div>
                  <span className="block text-md text-[#939393] tracking-widest uppercase">
                    {dict.contact.email.label}
                  </span>
                  <a
                    href="mailto:contact@ReNova.com"
                    className="font-semibold text-lg text-white hover:underline inline-flex items-center gap-3"
                  >
                    {dict.contact.email.address}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Image src="/icons/call-calling.svg" alt="call-calling" width={53} height={39} />
                <div>
                  <span className="block text-md text-[#939393] tracking-widest uppercase">
                    {dict.contact.phone.label}
                  </span>
                  <a
                    href="tel:+15555555555"
                    className="font-semibold text-lg text-white hover:underline inline-flex items-center gap-3"
                  >
                    {dict.contact.phone.number}
                    <span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <span className="block text-2xl font-semibold mb-4">{dict.contact.social.title}</span>
              <div className="flex flex-row gap-6 mt-2">
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/facebook.svg" alt="facebook" width={28} height={28} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/instagram.svg" alt="instagram" width={28} height={28} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/twitter.svg" alt="twitter" width={28} height={28} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/pintrest.svg" alt="pintrest" width={28} height={28} />
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="absolute size-[100px] bg-white bottom-[100px] left-0 hidden 2xl:block" />
        <div className="absolute size-[100px] bg-white bottom-0 left-[100px] hidden 2xl:block" />
        <div className="absolute size-[100px] bg-[#0E0E0E] -bottom-[100px] right-1/2 translate-x-1/2" />
        <div className="absolute size-[100px] bg-[#0E0E0E] -bottom-[200px] right-[calc(50%-100px)] translate-x-1/2" />
        <div className="absolute size-[100px] bg-[#0E0E0E] -bottom-[200px] right-[calc(50%+100px)] translate-x-1/2" />
      </section>

      <section className="container mx-auto max-w-7xl mt-[300px] text-center px-6 2xl:px-0">
        <div className="flex flex-row gap-3 items-center mb-6 justify-center">
          <span className="w-7 h-px bg-[#0E0E0E]" />
          <span className="text-base tracking-widest text-[#0E0E0E] uppercase">
            {dict.global.title}
          </span>
          <span className="w-7 h-px bg-[#0E0E0E]" />
        </div>
        <h4 className="text-6xl font-medium text-leading-[70px] text-[#0E0E0E] mt-[100px]">
          {dict.global.heading}
        </h4>
        <p className="text-lg font-medium leading-[30px] text-[#646464] mt-12">
          {dict.global.description}
        </p>
        <Image
          unoptimized
          src="/world.png"
          alt="world"
          width={1284}
          height={604}
          className="mt-12"
        />
      </section>

      <footer className="bg-[#0E0E0E] w-full py-20 mt-30 relative">
        <div className="container mx-auto max-w-7xl flex flex-col gap-12 h-full px-6 2xl:px-0">
          <div className="flex flex-row items-center mb-6">
            <p className="max-w-[520px] text-white text-[42px] leading-[52px] font-medium">
              {dict.footer.cta}
            </p>
            <div className="flex-1" />
            <Button
              variant="default"
              size="lg"
              endIcon={<ArrowRight />}
              className="bg-white text-[#0E0E0E] hover:bg-white/80"
            >
              {dict.footer.getQuote}
            </Button>
            <div className="flex-1" />
          </div>
          <div className="flex flex-row gap-0 border-t border-b border-[#FFCC00]">
            <div className="basis-[240px] border-r border-[#FFCC00] flex flex-col gap-5 py-2.5">
              <div className="flex flex-row items-center gap-2">
                <Image src="/logo-orange.svg" width={44} height={44} alt="BMP-logo" />
                <span className="text-2xl text-white font-medium leading-[52px]">ReNova</span>
              </div>
              <div className="flex flex-row gap-6">
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/facebook.svg" alt="facebook" width={18} height={18} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/instagram.svg" alt="instagram" width={18} height={18} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/twitter.svg" alt="twitter" width={18} height={18} />
                </a>
                <a href="#" className="hover:text-[#FFD43E]">
                  <Image src="/icons/pintrest.svg" alt="pintrest" width={18} height={18} />
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-8 text-base font-medium text-[#F5F5F5] uppercase">
              <span>{dict.footer.navigation.home}</span>
              <span>{dict.footer.navigation.services}</span>
              <span>{dict.footer.navigation.projects}</span>
              <span>{dict.footer.navigation.about}</span>
              <span>{dict.footer.navigation.contact}</span>
            </div>
          </div>
        </div>
        <div className="absolute size-[100px] bg-[#FFCC00] top-0 right-[100px] hidden xl:block" />
        <div className="absolute size-[100px] bg-[#FFCC00] top-[100px] right-0 hidden xl:block" />
      </footer>
    </>
  );
}
