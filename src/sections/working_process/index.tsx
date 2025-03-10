'use client'
import { SectionTitle } from "@/components/section_title";
import { CollapsableCard } from "./CollapsableCard";
import { useState } from "react";

export function WorkingProcess () {
    const [activeCard, setActiveCard] = useState(0);
    const defineActiveCard = (number: number) => setActiveCard(number)
    return (
        <section className="flex flex-col pb-[70px] pt-[100px] gap-[30px]">
            <SectionTitle title="Our Working Process" descrition="Step-by-Step Guide to Achieving<br/>Your Business Goals"/>
            <CollapsableCard title={'Consultation'} number={1} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />

            <CollapsableCard title={'Research and Strategy Development'} number={2} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />

            <CollapsableCard title={'Implementation'} number={3} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />

            <CollapsableCard title={'Monitoring and Optimization'} number={4} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />

            <CollapsableCard title={'Reporting and Communication'} number={5} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />

            <CollapsableCard title={'Continual Improvement'} number={6} currentActive={activeCard} defineActiveCard={defineActiveCard} description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />
        </section>
    )
}