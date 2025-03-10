import { Team } from "@/sections/team";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import { MakeHappen } from "@/sections/make_happen";
import { CaseStudies } from "@/sections/case_studies";
import { Testimonials } from "@/sections/testimonials";
import { WorkingProcess } from "@/sections/working_process";

export default function Home() {
  return (
    <main >
        <Hero />
        <Services />
        <MakeHappen />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
    </main>
  );
}
