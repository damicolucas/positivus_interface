import { SectionTitle } from "@/components/section_title";
import { TeamCard } from "./TeamCard";

export function Team() {
    return (
        <section className="flex flex-col pb-[70px] pt-[100px] gap-[30px]">
            <SectionTitle title="Team" descrition="Meet the skilled and experienced team behind our<br/>successful digital marketing strategies" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <TeamCard name='John Smith' position='CEO and Founder' description='10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' photo='./team/John_Smith.png' />
                <TeamCard name='Jane Doe' position='Director of Operations' description='7+ years of experience in project management and team leadership. Strong organizational and communication skills' photo='./team/Jane_Doe.png' />
                <TeamCard name='Michael Brown' position='Senior SEO Specialist' description='5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' photo='./team/Michael_Brown.png' />
                <TeamCard name='Emily Johnson' position='PPC Manager' description='3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' photo='./team/Emily_Johnson.png' />
                <TeamCard name='Brian Williams' position='Social Media Specialist' description='4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' photo='./team/Brian_Williams.png' />
                <TeamCard name='Sarah Kim' position='Content Creator' description='2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries' photo='./team/Sarah_Kim.png' />
            </div>
            <button className="bg-dark px-[76px] py-[20px] self-stretch md:self-end text-white rounded-[14px] mt-2.5">
                <span>See all team</span>
            </button>
        </section>
    )
}