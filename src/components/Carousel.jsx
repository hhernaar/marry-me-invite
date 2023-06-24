import { CarouselItem } from "./CarouselItem"

export const Carousel = ({ id, items }) => {
    console.log(items)
    return (
        <div id={id} className='carousel slide' data-bs-ride='carousel'>
            {/*<div className='carousel-indicators'>
                {
                    items.map((item) => (
                        <button key={item.idx}
                            type='button'
                            data-bs-target={'#' + id}
                            data-bs-slide-to={item.idx}
                            aria-label={'Slide ' + (item.idx + 1)}
                            className={  'active'}
                            aria-current='true'
                        />
                    ))
                }
            </div>*/}
            <div className='carousel-inner'>
                {
                    items.map((item) => (
                        <CarouselItem
                            key={item.idx}
                            active={item.idx == 0 ? 'active' : ''}
                            title={item.title}
                            imgSrc={item.img}
                        />
                    ))
                }
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carousel-galery' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carousel-galery' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
}
