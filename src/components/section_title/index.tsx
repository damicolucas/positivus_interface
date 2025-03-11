interface SectionTitleProps {
    title: string;
    descrition: string
}

export function SectionTitle({ title, descrition }: SectionTitleProps) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mb-[80px] text-center md:text-left">
            <div className="bg-main rounded-[7px] self-center md:self-start p-[7px]">
                <h2 className="text-[40px] font-medium leading-none">{title}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: descrition }} className="text-[18px] " />
        </div>
    )
}