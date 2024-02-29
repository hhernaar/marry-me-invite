import dresscodeBackground from '../assets/imgs/welcome-4.jpg';
import whatsAppIcon from '../assets/icons/whatsapp-icon.png';

const backgroundStyle = {
  backgroundImage: 'url(' + dresscodeBackground + ')',
}

export const PhotoDump = () => {
  return (
    <section id='photo-dump-section' style={backgroundStyle} className='pt-3 pb-3'>
      <div id='photo-dump-info' className='me-3 mb-1'>

        <div className='photo-dump-header pt-1 pb-1'>
          <h3 className='font-el-messiri mb-0'>¡Envíanos tus fotos!</h3>
        </div>

        <div className='photo-dump-body'>

          <span className='mb-1'>DA CLICK AQUI</span>
          <div className='dresscode-body-icons pulseBtn'>


            <a className='' href='https://wa.me/525530229210?text=¡Hola! Aquí están mis fotos:'>
              <span className='icon-sm'>
                <img src={whatsAppIcon} />
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
