import { AgendaItem } from './AgendaItem';
import { agenda } from '../helpers/getAgenda';

export const Agenda = () => {
    return (
        <section id='agenda-section' className='pt-3 pb-3'>
            <div className='row text-center mb-3'>
                <h3 className='font-el-messiri mb-0'>Itinerario.</h3>
            </div>

            <div className='d-flex flex-wrap justify-content-center ms-1'>
                {
                    agenda.map( (item) => (
                        <AgendaItem key={ item.id } { ...item } />
                    ))
                }
            </div>
        </section>
    )
}
