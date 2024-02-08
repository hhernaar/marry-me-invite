//import { useParams } from "react-router-dom";
import { Agenda, Location, SaveTheDate, TicketsForm, Welcome } from "../components"
import { guest_not_found, guests } from "../util/guests";

export const LandingPage = () => {

  /*const { uuid } = useParams();
  const guest = guests.filter(g => g.id == uuid);*/

  return (
    <>
      < Welcome />
      < SaveTheDate />
      < Location />
      < TicketsForm />
      < Agenda />
      {/*< Attendance guest={ guest.length > 0 ? guest[0] : guest_not_found } />*/}
    </>
  )
}
