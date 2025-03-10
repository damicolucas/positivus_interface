import { CaseStudies } from "@/sections/case_studies";
import { Hero } from "@/sections/hero";
import { MakeHappen } from "@/sections/make_happen";
import { Services } from "@/sections/services";
import { WorkingProcess } from "@/sections/working_process";

export default function Home() {
  return (
    <main >
        <Hero />
        <Services />
        <MakeHappen />
        <CaseStudies />
        <WorkingProcess />
    </main>
  );
}
