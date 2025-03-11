type Theme = 'gray' | 'main' | 'dark'
interface CardProps {
    title: string;
    imgSrc: string;
    theme: Theme
}


export function Card({ title, imgSrc, theme }: CardProps) {
    const [first_part, second_part] = title.split('|')
    const iconSrc = theme === 'dark' ? './light_icon.png' : './dark_icon.png'

    return (
        <div className={`flex items-start justify-between ${theme === 'main' ? 'bg-main' : (theme === 'dark' ? 'bg-dark' : 'bg-gray')} p-[50px] rounded-[45px] border-1 border-b-7 border-dark `}>
            <div className="flex flex-col items-start justify-between h-full gap-23">
                <div className="flex flex-col items-start justify-center">
                    <span className={`text-dark ${theme === 'main' || theme === 'dark' ? 'bg-gray' : 'bg-main'} text-3xl leading-none font-medium rounded-[7px] p-[7px]`}>{first_part}</span>
                    <span className={`text-dark ${theme === 'main' || theme === 'dark' ? 'bg-gray' : 'bg-main'} text-3xl leading-none font-medium rounded-[7px] p-[7px]`}>{second_part}</span>
                </div>
                <img draggable="false" src={imgSrc} alt="card image" className="md:hidden object-contain" />

                <button className="text-[20px] leading-7 flex items-center justify-start gap-[15px]">
                    <img draggable="false" src={iconSrc} alt="" />
                    <span className={`${theme === 'dark' ? 'text-gray' : 'text-dark'}`}>
                        Learn more
                    </span>
                </button>
            </div>
            <img draggable="false" src={imgSrc} alt="card image" className="hidden md:flex object-contain" />
        </div>
    )
}
