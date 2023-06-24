import { Carousel } from "./Carousel"
import { galery } from '../util/galery'
import engaged from '../assets/imgs/engaged.jpg';
import firstTravel from '../assets/imgs/firstTravel.jpg';
import theQuestion from '../assets/imgs/theQuestion.jpg';

export const Galery = () => {
    return (
        <section className="background-pink pacifico-regular">
            <div id='carousel-galery' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carousel-galery' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                    <button type='button' data-bs-target='#carousel-galery' data-bs-slide-to='1' aria-label='Slide 2'></button>
                    <button type='button' data-bs-target='#carousel-galery' data-bs-slide-to='2' aria-label='Slide 3'></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item polaroid active'>
                        <a href='#' title='Engaged'>
                            <img height='250' src={engaged} alt='Engaged' title='Engaged' />
                        </a>
                    </div>
                    <div className='carousel-item polaroid'>
                        <a href='#' title='First travel'>
                            <img height='250' src={firstTravel} alt='First travel' title='First travel' />
                        </a>
                    </div>
                    <div className='carousel-item polaroid'>
                        <a href='#' title='The question'>
                            <img height='250' src={theQuestion} alt='The question' title='The question' />
                        </a>
                    </div>
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
            
            {/*<Carousel id='galery-carousel' items={galery} />*/}
        </section>
    )
}
