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
      mt-2
      mx-1
      sm:m-2
      sm:justify-self-center
      xl:h-[calc(100%-2.6rem)]
      xl:mt-4
      xl:w-[68rem]
      2xl:w-[80rem]
      "
    >
      <div
        className="
        grid 
        gap-[.4rem] 
        h-full 
        xl:grid-cols-[1fr_1.45fr] 
        xl:grid-rows-[2.4rem_1fr] 
        xl:gap-2 
        2xl:grid-rows-[2.6rem_1fr] 
        2xl:grid-cols-[1fr_1.4fr]
        "
      >
        <nav
          className="
          h-[2.4rem] 
          bg-[var(--container-background)]
          dark:bg-[var(--container-background-dark)]
          container-styles 
          hidden 
          rows 
          col-span-full 
          !rounded-[.2rem] 
          xl:grid 
          2xl:h-[2.6rem] 
          "
        >
          <DesktopHeader />
        </nav>

        {/* Left */}
        <div
          className="
          grid 
          grid-rows-[6.5rem_23rem_17.3rem] 
          gap-[.4rem] 
          xs:grid-rows-[8.2rem_25rem_17.3rem] 
          xl:gap-2 
          xl:grid-rows-[7.6rem_2fr_1.4fr] 
          2xl:grid-rows-[9.5rem_2fr_1.6fr]
        "
        >
          {/* 3 cartitas informativas */}
          <section
            className="
              grid 
              grid-cols-3 
              gap-1 
              xl:gap-2"
          >
            <InformativeCard />
            <InformativeCard
              num={0}
              title="Clientes Felices"
              icon="clients"
              plus={false}
            />
            <InformativeCard
              num={0}
              title="Experiencia"
              plus={false}
              icon="experience"
            />
          </section>

          {/* Presentacion (contenido principal) */}
          <section
            className="
              container-styles 
              bg-[var(--container-background)]
              dark:bg-[var(--container-background-dark)] 
              grid 
              items-center
              "
          >
            <div
              className="
              grid 
              gap-[.4rem] 
              items-center 
              py-5 
              px-3 
              xl:gap-1
              xl:py-0 
              xl:max-h-[25rem] 
              presentation-xmd
              2xl:py-3 
              2xl:px-3 
              2xl:pb-6 
              2xl:gap-2
              "
            >
              <Presentation />
              <Skills />
              <SendMe />
            </div>
          </section>

          {/* Stack Tecnologico */}
          <section
            className="
              container-styles 
              bg-[var(--container-background)]
              dark:bg-[var(--container-background-dark)]  
              grid 
              items-center
              "
            id="stack"
          >
            <Stacks />
          </section>
        </div>

        {/* Right */}
        <div className="grid gap-[.4rem] xl:gap-2 xl:grid-rows-[1fr_1fr]">
          <div className="grid grid-rows-[28rem_26rem] gap-[.4rem] xl:grid-rows-1 xl:grid-cols-[57%_41.9%] xl:gap-2">
            {/* Testimonios (Mensajes) */}
            <section
              className="
                container-styles 
                bg-[var(--container-background)]
                dark:bg-[var(--container-background-dark)]   
                grid
              "
              id="testimonials"
            >
              <Testimonials session={session} />
            </section>

            {/* Mis proyectos */}
            <section
              className="
                container-styles 
                bg-[var(--container-background)]
                dark:bg-[var(--container-background-dark)]  
              "
              id="projects"
            >
              <Projects />
            </section>
          </div>

          <div
            className="
              grid 
              grid-rows-[24rem_31rem] 
              gap-[.4rem] 
              xl:grid-rows-1 
              xl:grid-cols-[45%_53.9%] 
              2xl:gap-2
              "
          >
            <section
              className="
                container-styles 
                bg-[var(--container-background)]
                dark:bg-[var(--container-background-dark)] 
              "
            >
              <Networks />
            </section>

            <section
              className="
                container-styles 
                bg-[var(--container-background)]
                dark:bg-[var(--container-background-dark)]   
                flex 
                justify-center 
                mb-[5.3rem] 
                sm:mb-[4.9rem] 
                xl:mb-0
              "
            >
              <Footer session={session} />
            </section>
          </div>
        </div>
      </div>

      <nav
        className="
          h-20 
          col-span-full 
          fixed 
          left-0 
          bottom-0 
          z-50 
          w-full 
          xl:hidden
          "
      >
        <Header session={session} />
      </nav>
    </main>
  );
}
