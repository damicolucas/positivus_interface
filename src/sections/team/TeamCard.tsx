interface TeamCardProps {
    name:string; position:string; description:string; photo: string
}

export function TeamCard ({ name, position, description, photo } : TeamCardProps) {
    return (
        <div className="rounded-[45px] border-1 border-b-7 border-dark px-[35px] py-[40px] space-y-7 relative">
            <img src="./team/social.png" alt="social media" className="absolute right-9 top-10" />
            <header className="flex gap-5">
                <img src={photo} alt={`${name} - ${position}`} className="max-w-[103px]"/>
                <div className="flex flex-col justify-end items-start">
                    <h4 className="font-medium text-xl">{name}</h4>
                    <p className="text-lg">{position}</p>
                </div>
            </header>
            <hr />
            <p className="text-black text-lg">
                {description}
            </p>
            
        </div>  
    )
}