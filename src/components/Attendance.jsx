import { useState } from 'react';

export const Attendance = ({ guest }) => {

  const yesResponse = ()=> {
    const message = `*${guest.name}*
    Confirmamos asistencia para ${guest.tickets.length} boletos:

    ${ guest.tickets.map( ticket => ticket.id + ".- " + ticket.name ).join("\n") }
    `;

    const response = {
      id: 'yes',
      message: encodeURIComponent(message)
    }
    return response;
  };

  const noResponse = {
    id: 'no',
    message: 'Lo lamento, no puedo asistir.'
  };

  const [response, setResponse] = useState(yesResponse);

  console.log(guest)

  return (
    <section id='attendance-section'>
      <div className='text-center pt-2'>
        <h4>Confirma tu asistencia</h4>
      </div>

      <form>
        
        <div className='row d-flex justify-content-center'>
          <div className='col-6 form-check'>
            <input className='form-check-input' type='radio' name='inputAsistance' id='yes' onChange={e => { setResponse(yesResponse()) }}
              checked={response.id == 'yes'} />
            <label className='form-check-label' htmlFor='yes'>
              Si, ahí estare
            </label>
          </div>
        </div>

        <div className='row d-flex justify-content-center'>
          <div className='col-6 form-check'>
            <input className='form-check-input' type='radio' name='inputAsistance' id='no' onChange={e => { setResponse(noResponse) }}
              checked={response.id == 'no'} />
            <label className='form-check-label' htmlFor='no'>
              No, no podré asistir
            </label>
          </div>
        </div>

        <div className='row d-flex justify-content-center'>
          <div className='col-6 col-12 d-flex justify-content-center'>
            <a className='btn btn-outline-primary' href={'https://wa.me/525525253792?text=' + response.message} target='__blanl' role='button'>Enviar</a>
          </div>
        </div>

      </form>
    </section>
  )
}
