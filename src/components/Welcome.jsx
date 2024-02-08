import mainSm from '../assets/imgs/main2.jpeg'

const mianImageStyle = {
    backgroundImage: 'url(' + mainSm + ')',// no-repeat center center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',

};

export const Welcome = () => {
    return (
        <section id='welcome-section'>
            <div className='welcome-img-container'>
                {/*<img src={mainSm} />*/}
                <svg style={mianImageStyle} viewBox="0 0 100 75.5" width="100%" height="100%">
                    <path fill="#ffeedb" d="M0 90 V 70 C 0 70, 10 60, 50 70 S 80 60 100 60 V 90 Z" />
                </svg>
            </div>
            {/*<section className="wave-separator">
                <svg viewBox="0 -10 100 100">
                    <path fill="#ffeedb" d="M0 100 V 85 C 0 85, 10 75, 50 85 S 80 75 100 70 V 100 Z" />
                </svg>
            </section>*/}
        </section>
    )
}