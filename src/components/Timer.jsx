import Countdown from 'react-countdown';

export const Timer = () => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span> Expired </span>;
        } else {
            return (
            <>
                {days}D : {hours}H : {minutes}M : {seconds}s
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
