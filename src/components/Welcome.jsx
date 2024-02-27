import welcome from '../assets/imgs/welcome-5.jpg';

const mianImageStyle = {
    backgroundImage: 'url(' + welcome + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',

};

export const Welcome = () => {
    return (
        <section id='welcome-section'>
            <div className='welcome-img-container'>
                <svg style={mianImageStyle} viewBox="0 0 100 75.5" width="100%" height="100%">
                    <path fill="#ffeedb" d="M0 90 V 70 C 0 70, 10 60, 50 70 S 80 60 100 60 V 90 Z" />
                </svg>
            </div>
        </section>
    )
}