import { Timer } from "./Timer"

export const SaveTheDate = () => {
  return (
    <section className='background-cream merriweather-regular'>
        <div className='d-flex justify-content-center'>
            <div className='container-circle mt-3 background-img' 
              style={{ backgroundImage: 'var(--galery-image-save-the-date-1-url)' }}>
            </div>
        </div>
        <div className="d-flex justify-content-center">
          <Timer />
        </div>
        <div className='d-flex justify-content-center parisienne-regular mt-2'>
          <h2>Save the Date!</h2>
        </div>
        <div className='d-flex justify-content-center text-center'>
          <span>
            Despues de 6 años de noviazgo, hemos decidido unirnos en matrimonio
            y queremos que sean parte de este momento.
          </span>
        </div>
    </section>
  )
}
