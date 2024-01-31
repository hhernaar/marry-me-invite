//import { useParams } from "react-router-dom";
import { Agenda, Attendance, Location, SaveTheDate, Tickets, Welcome } from "../components"
import { guest_not_found, guests } from "../util/guests";

export const LandingPage = () => {

  /*const { uuid } = useParams();
  const guest = guests.filter(g => g.id == uuid);*/

  return (
    <>
      < Welcome />
      < SaveTheDate />
      < Location />
      < Tickets />
      < Agenda />
      {/*< Attendance guest={ guest.length > 0 ? guest[0] : guest_not_found } />*/}
    </>
  )
}
