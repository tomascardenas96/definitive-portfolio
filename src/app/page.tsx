import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Networks from "@/components/Networks";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stacks from "@/components/Stacks";
import Testimonials from "@/components/Testimonials";
import DesktopHeader from "@/components/ui/DesktopHeader";
import InformativeCard from "@/components/ui/InformativeCard";
import SendMe from "@/components/ui/SendMe";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { JSX } from "react";

export default async function Home(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return (
    <main
      className="
      h-[calc(100%-2.6rem)]
      mx-2
      mt-2
      justify-self-center
      max-w-[27rem]
      xl:mt-4
      xl:max-w-[68rem]
      custom:max-w-[88rem]
      2xl:max-w-[80rem]
      "
    >
      <div className="grid gap-[.4rem] h-full xl:grid-cols-[1fr_1.45fr] xl:grid-rows-[2.4rem_1fr] xl:gap-2 2xl:grid-rows-[2.6rem_1fr] 2xl:grid-cols-[1fr_1.4fr]">
        <nav className="h-[2.4rem] container-styles hidden rows col-span-full !rounded-[.2rem] xl:grid 2xl:h-[2.6rem] ">
          <DesktopHeader />
        </nav>

        {/* Left */}
        <div className="grid grid-rows-[8.2rem_25rem_17.3rem] gap-[.4rem] xl:gap-2 xl:grid-rows-[7.6rem_2fr_1.4fr] 2xl:grid-rows-[9.5rem_2fr_1.6fr] ">
          {/* 3 cartitas informativas */}
          <section className="grid grid-cols-3 gap-1 xl:gap-2">
            <InformativeCard num={0} title="Proyectos" icon="proyects" />
            <InformativeCard
              num={2}
              title="Clientes Felices"
              icon="clients"
              plus={true}
            />
            <InformativeCard
              num={5}
              title="Experiencia"
              plus={true}
              icon="experience"
            />
          </section>

          {/* Presentacion (contenido principal) */}
          <section className="container-styles grid items-center">
            <div className="grid grid-rows-[7rem_.6fr_max-content] gap-[.4rem] items-center py-5 px-3 xl:gap-0 xl:py-0 xl:max-h-[25rem] xl:grid-rows-[6rem_.6fr_max-content] 2xl:py-3 2xl:px-3 2xl:pb-6 2xl:grid-rows-[8rem_.6fr_max-content] 2xl:gap-1">
              <Presentation />
              <Skills />
              <SendMe />
            </div>
          </section>

          {/* Stack Tecnologico */}
          <section className="container-styles grid items-center" id="stack">
            <Stacks />
          </section>
        </div>

        {/* Right */}
        <div className="grid gap-[.4rem] xl:gap-2 xl:grid-rows-[1fr_1fr]">
          <div className="grid grid-rows-[28rem_26rem] gap-[.4rem] xl:grid-rows-1 xl:grid-cols-[57%_41.9%] xl:gap-2">
            {/* Testimonios (Mensajes) */}
            <section className="container-styles grid" id="testimonials">
              <Testimonials session={session} />
            </section>

            {/* Mis proyectos */}
            <section className="container-styles" id="projects">
              <Projects />
            </section>
          </div>

          <div className="grid grid-rows-[24rem_31rem] gap-[.4rem] xl:grid-rows-1 xl:grid-cols-[45%_53.9%] 2xl:gap-2">
            <section className="container-styles">
              <Networks />
            </section>

            <section className="container-styles flex justify-center mb-[5.3rem] xl:mb-0">
              <Footer session={session} />
            </section>
          </div>
        </div>
      </div>

      <nav className="h-20 col-span-full fixed left-0 bottom-0 w-full xl:hidden">
        <Header session={session} />
      </nav>
    </main>
  );
}
