import { Hero } from "@/sections/hero";
import { MakeHappen } from "@/sections/make_happen";
import { Services } from "@/sections/services";
import Image from "next/image";

export default function Home() {
  return (
    <main >
        <Hero />
        <Services />
        <MakeHappen />
    </main>
  );
}
