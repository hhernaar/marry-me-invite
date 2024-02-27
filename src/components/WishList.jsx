import giftBoxIcon from '../assets/icons/wish-list/giftbox.png';
import envelopIcon from '../assets/icons/wish-list/envelop-icon.png';
import { getWishList } from '../helpers/getWishList';

export const WishList = () => {
  const getIcon = (iconName) => {
    return new URL(`../assets/icons/wish-list/${iconName}.png`, import.meta.url).href;
  }

  const handleClick = (myLink) => () => {
    window.location.href = myLink;
  }

  return (
    <section id='wish-list-section' className='pt-3 pb-3'>

      <div className='row text-center mb-3'>
        <h3 className='font-el-messiri'>Mesa de regalos</h3>
        <span className='icon-sm'>
          <img src={giftBoxIcon} />
        </span>
      </div>

      <div className='text-justify'>
        <p >Lo más importante para nosotros es tu presencia, pero si deseas darnos un obsequio aquí están nuestras opciones:</p>
      </div>

      <div className="d-flex justify-content-evenly flex-wrap">

        {
          getWishList.map((item) => (
            <div key={item.id} className="wish-list-item" onClick={handleClick(item.link)}>
              <div className="wish-list-item-header pb-3">
                <span className={item.iconClass}>
                  <img src={getIcon(item.icon)} />
                </span>
              </div>
            </div>
          ))
        }

      </div>

      <div className='row text-center mb-3'>
        <span className='icon-md'>
          <img src={envelopIcon} />
        </span>
      </div>

      <div className='text-justify'>
        <p className=''>O si lo prefieres, durante la fiesta habrá una caja donde se podrán depositar sobrecitos con efectivo.</p>
      </div>
    </section>
  )
}
