import { Img, TextCenter } from "../components"

export const GuestPage = () => {

  const classes = 'h5 fw-bold';
  const imgSrc = '../src/assets/imgs/frame.jpg'

  return (
    <section className='container blur-border-box'
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover'
      }}
    >
      <div className='position-relative d-flex justify-content-center'>

        <Img imgSrc={imgSrc} />

        <div className='row img-center-text position-absolute top-50 start-50 translate-middle parisienne-regular'>
          <TextCenter classes={classes}>
            Ricardo H. & Katy E.
          </TextCenter>          
          <TextCenter classes={classes}>
            2 Boletos
          </TextCenter>
          <TextCenter classes={classes}>
            Los esperamos!
          </TextCenter>
        </div>

      </div>
    </section>
  )
}
