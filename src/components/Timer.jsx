import Countdown from 'react-countdown';

export const Timer = () => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span> Expired </span>;
        } else {
            return (
            <>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    {days} D : {hours} H: {minutes} M: {seconds} s
                </div>
            </div>
            </>);
        }
    };

    return (
        <>
            <Countdown date={'2024/09/14'} renderer={ renderer }>
            </Countdown>
        </>
    )
}
