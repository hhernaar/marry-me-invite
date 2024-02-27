import hotelIcon from '../assets/icons/hotel/hotel-icon.png';
import { getHotelsList } from '../helpers/getHotels';



export const Hotels = () => {

  const getIcon = (iconName) => {
    return new URL(`../assets/icons/hotel/${iconName}.png`, import.meta.url).href;
  }

  return (
    <section id='location-section' className='pt-3 pb-3'>
      <div className="row text-center mb-0">
        <h1 className='font-el-messiri mb-0'>Hospedaje</h1>
        <span className='icon-sm'>
          <img src={hotelIcon} />
        </span>
      </div>

      <div className="d-flex justify-content-evenly flex-wrap">

        {
          getHotelsList.map((item) => (
            <div key={item.id} className="hotel-list-item">
              <div className="hotel-list-item-header pb-3">
                <span className={item.iconClass}>
                  <img src={getIcon(item.icon)} />
                </span>
              </div>
            </div>
          ))
        }

      </div>


    </section>
  )
}
