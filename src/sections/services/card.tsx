interface CardProps {
    title: string;
    imgSrc: string;
    theme: 'gray' | 'main' | 'dark'
}

export function Card ({ title, imgSrc, theme }: CardProps) {
    return (
        <div className={`bg-`}>
            <div>
                <span>{title}</span>
                <button>Learn more</button>
            </div>
            <img src={imgSrc} alt="card image" />
        </div>
    )
}