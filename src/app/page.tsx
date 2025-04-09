import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import SendMe from "@/components/SendMe";
import Skills from "@/components/Skills";
import Stacks from "@/components/Stacks";
import Testimonials from "@/components/Testimonials";
import InformativeCard from "@/components/ui/InformativeCard";

export default function Home() {
  return (
    <main className="w-[98%] mx-auto max-w-[33rem]">
      <section className="h-16 col-span-full ">
        <Header />
      </section>

      <div className="grid gap-2">
        {/* Left */}
        <div className="grid grid-rows-[8.2rem_25rem_17rem] gap-2">
          {/* 3 cartitas informativas */}
          <section className="grid grid-cols-3 gap-2 ">
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
          <section className="container grid grid-rows-[7rem_.6fr_1.1fr] gap-3 py-10 px-3">
            <Presentation />
            <Skills />
            <SendMe />
          </section>

          {/* Stack Tecnologico */}
          <section className="container">
            <Stacks />
          </section>
        </div>

        {/* Right */}
        <div className="grid gap-2 grid-rows-[26rem_15rem_15rem_15rem]">
          <section className="container grid py-3">
            <Testimonials />
          </section>

          <section className="container"></section>
          <section className="container"></section>
          <section className="container"></section>
        </div>
      </div>
    </main>
  );
}
