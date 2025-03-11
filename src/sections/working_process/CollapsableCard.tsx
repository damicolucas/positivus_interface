interface CollapsableCardProps {
    title: string;
    description: string;
    number: number;
    currentActive: number;
    defineActiveCard: (number: number) => void;
}

export function CollapsableCard({ title, description, number, currentActive, defineActiveCard }: CollapsableCardProps) {
    const isThisCardCurrentActive = currentActive === number
    return (
        <div className={`${isThisCardCurrentActive ? 'bg-main' : 'bg-gray'} relative px-[60px] py-[40px] border-1 border-b-7 border-dark rounded-[45px]  duration-300 ease-in-out`}>
            <header className="flex justify-between items-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-[25px]">
                    <span className="text-6xl font-medium">0{number}</span>
                    <h4 className="text-3xl font-medium">{title}</h4>
                </div>
                {isThisCardCurrentActive ?
                    <button className='absolute -top-5 -right-5 md:relative md:top-auto md:right-auto rounded-full cursor-pointer border-1 p-4 bg-gray hover:bg-main duration-300 ease-in-out' onClick={() => defineActiveCard(0)}><img draggable="false" src='./-.png' className="h-[24px] w-[24px] object-contain" /></button> :
                    <button className='absolute -top-5 -right-5 md:relative md:top-auto md:right-auto rounded-full cursor-pointer border-1 p-4 bg-gray hover:bg-main duration-300 ease-in-out' onClick={() => defineActiveCard(number)}><img draggable="false" src='./+.png' className="h-[24px] w-[24px] object-contain" /></button>
                }
            </header>
            {isThisCardCurrentActive ? (
                <div>
                    <hr className="my-[30px]"/>
                    <div>{description}</div>
                </div>
            ) : null}
        </div>
    )
}