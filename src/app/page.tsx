import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Hero />
        <Services />
    </main>
  );
}
