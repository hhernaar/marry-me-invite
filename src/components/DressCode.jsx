import dresscodeBackground from '../assets/imgs/dresscode-1.jpg';
import suit from '../assets/icons/dress-code/suit.png';
import dress from '../assets/icons/dress-code/dress.png';

const backgroundStyle = {
    backgroundImage: 'url(' + dresscodeBackground + ')',
}

export const DressCode = () => {
    return (
        <section id='dresscode-section' style={backgroundStyle} className='pt-3 pb-3'>
            <div id='dresscode-info' className='me-3 mb-1'>

                <div className='dresscode-header pt-1 pb-1'>
                    <h3 className='font-el-messiri mb-0'>Vestimenta</h3>
                </div>

                <div className='dresscode-body'>

                    <div className='dresscode-body-icons pt-3'>
                        <span className='icon-sm'>
                            <img src={suit} />
                        </span>
                        <span className='icon-sm'>
                            <img src={dress} />
                        </span>
                    </div>

                    <p className='mt-1'>F&nbsp;O&nbsp;R&nbsp;M&nbsp;A&nbsp;L</p>

                </div>

            </div>
        </section>
    )
}
