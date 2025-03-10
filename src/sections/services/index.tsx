import { SectionTitle } from "@/components/section_title";
import { Card } from "./card";

export function Services () {
    return (
        <section className="py-[70px]">
            <SectionTitle title="Services" descrition="At our digital marketing agency, we offer a range of services to<br/>help businesses grow and succeed online. These services include:"/>
            <div className="grid grid-cols-2 gap-[40px] rounded-[45px]">
                <Card imgSrc="./cards/seo.png" theme="gray" title="Search engine | optimization"/>
                <Card imgSrc="./cards/click.png" theme="main" title="Pay-per-click | advertising"/>
                <Card imgSrc="./cards/social.png" theme="dark" title="Social Media | Marketing"/>
                <Card imgSrc="./cards/send.png" theme="gray" title="Email | Marketing"/>
                <Card imgSrc="./cards/tabs.png" theme="main" title="Content | Creation"/>
                <Card imgSrc="./cards/charts.png" theme="dark" title="Analytics and | Tracking"/>
            </div>
        </section>
    )
}
