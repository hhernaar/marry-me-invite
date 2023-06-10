import { Img, TextCenter } from '../components';

export const CountdownPage = () => {

  const classes = 'radial-text-blue h1 fw-bold ';
  const imgSrc = '../src/assets/imgs/main.jpeg';

  return (
    <>
      <section id='countdown'
        className='container d-flex justify-content-center container blur-border-box'
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover'
        }}
      >
        <div className='position-relative d-flex justify-content-center'>

          <Img imgSrc={imgSrc} />
          <div className='row img-center-text position-absolute top-50 start-50 translate-middle parisienne-regular'>            
          <TextCenter classes={classes}>
            Adriana & Aaron
          </TextCenter>
          <TextCenter classes={classes}>
            Sept 15, 2024
          </TextCenter>
          </div>

        </div>
      </section>
    </>
  )
}
