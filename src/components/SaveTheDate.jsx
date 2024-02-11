import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return (
            <>
                0D : 0H : 0M : 0s
            </>);
    } else {
        return (
            <div className='save-the-date-countdown'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="countdown-circle">
                            {days}
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="countdown-circle">
                            {hours}
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="countdown-circle">
                            {minutes}
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="countdown-circle">
                            {seconds}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className="cutdown-text">
                            DÍAS
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="cutdown-text">
                            HORAS
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="cutdown-text">
                            MINUTOS
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="cutdown-text">
                            SEGUNDOS
                        </div>
                    </div>
                </div>
            </div>);
    }
};

export const SaveTheDate = () => {
    return (
        <section id='save-the-date-section' className='pt-0 pb-3'>
            <div className="row text-center mb-0">
                <h1 className='font-italic mb-0'>Save the Date</h1>
            </div>
            <div className="row text-center">
                <span id='save-the-date-names'>ADRIANA&nbsp;&nbsp;&&nbsp;&nbsp;AARON</span>
            </div>
            <div className="row text-center">
                <span className='date-time'>14.09.24</span>
            </div>
            <div className="mt-2 d-flex justify-content-center">
                <Countdown date={'2024/09/14'} renderer={renderer} />
            </div>
        </section>
    )
}
