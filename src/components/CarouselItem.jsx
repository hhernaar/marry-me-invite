export const CarouselItem = ({ active, title, imgSrc }) => {
    return (
        <div className={'carousel-item polaroid ' + active}>
            <a href='#' title={ title }>
                <img height='250' alt={ title } title={ title } src={imgSrc}/>
            </a>
        </div>
    )
}
