import hotelIcon from '../assets/icons/hotel/hotel-icon.png';
import airbnbIcon from '../assets/icons/hotel/airbnb-icon.png';
import { getHotelsList } from '../helpers/getHotels';



export const Hotels = () => {

  const getIcon = (iconName) => {
    return new URL(`../assets/icons/hotel/${iconName}.png`, import.meta.url).href;
  }

  const handleClick = (myLink) => () => {
    window.location.href = myLink;
  }

  //const airbnbLink = 'https://www.airbnb.mx/';

  return (
    <section id='hotels-section' className='pt-3 pb-3'>
      <div className="row text-center mb-0">
        <h1 className='font-el-messiri mb-0'>Hospedaje</h1>
        <span className='icon-sm'>
          <img src={hotelIcon} />
        </span>
      </div>

      <div className='text-justify'>
        <p className=''>Estas son nuestras recomendaciones para tu alojamiento.</p>
      </div>

      <div className="d-flex justify-content-evenly flex-wrap">

        {
          getHotelsList.map((item) => (
            <div key={item.id} className="card-list-item" onClick={handleClick(item.link)}>
              <div className="card-list-item-header pb-1">
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
