interface SectionTitleProps {
    title: string;
    descrition: string
}

export function SectionTitle({ title, descrition }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-10 mb-[80px]">
            <div className="bg-main rounded-[7px] self-start p-[7px]">
                <h2 className="text-[40px] font-medium leading-none">{title}</h2>
            </div>
            <p dangerouslySetInnerHTML={{ __html: descrition }} className="text-[18px] " />
        </div>
    )
}