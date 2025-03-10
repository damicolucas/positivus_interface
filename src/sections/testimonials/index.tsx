'use client'
import { SectionTitle } from "@/components/section_title";
import { Testimonial } from "./Testimonial";
import { Carousel } from "./Carousel";

export function Testimonials() {
    return (
        <section className="flex flex-col pb-[70px] pt-[100px]">
            <SectionTitle title="Testimonials" descrition="Hear from Our Satisfied Clients: Read Our Testimonials<br/>to Learn More about Our Digital Marketing Services" />
            <div className="rounded-[45px] bg-dark pt-[84px] pb-[64px] flex content-center justify-center overflow-hidden">
                <Carousel />
            </div>
        </section>
    )
}