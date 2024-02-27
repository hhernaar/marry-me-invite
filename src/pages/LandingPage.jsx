import { Agenda, DressCode, Hotels, Location, PhotoDump, SaveTheDate, TicketsForm, Welcome, WishList } from "../components"

export const LandingPage = () => {

  return (
    <>
      < Welcome />
      < SaveTheDate />
      < Location />
      < TicketsForm />
      < Agenda />
      < DressCode />
      < WishList />
      < Hotels />
      < PhotoDump />
    </>
  )
}
