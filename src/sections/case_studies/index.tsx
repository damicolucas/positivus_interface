import { SectionTitle } from "@/components/section_title";

export function CaseStudies() {
    return (
        <section className="flex flex-col pb-[70px] pt-[100px]">
            <SectionTitle
                title="Case Studies"
                descrition="Explore Real-Life Examples of Our Proven Digital Marketing<br/>Success through Our Case Studies"
            />
            <div className="bg-dark text-white flex items-center justify-between py-[70px] px-[60px] rounded-[45px] gap-[65px]">
                <TextSection text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
                <div className="inline-block h-[185px] min-h-[1em] w-1 self-stretch bg-gray"></div>
                <TextSection text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
                <div className="inline-block h-[185px] min-h-[1em] w-1 self-stretch bg-gray"></div>
                <TextSection text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
            </div>
        </section>
    )
}

const TextSection = ({ text }: { text: string }) => {
    return (
        <div className="flex flex-col space-y-5">
            <p className="text-[18px]">{text}</p>
            <button className="text-main flex items-center justify-start gap-4 text-[20px]">
                <span>
                    Learn more
                </span>
                <img src="./green_arrow.png" alt="" />
            </button>
        </div>
    )
}