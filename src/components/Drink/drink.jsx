import "./drink.css"
import { Layer } from "../Layer/layer"

export const Drink = ( { id, name, image, ordered, layers }) => {

  const orderBtnText = ordered ? 'Zrušit' : 'Objednat';
  const btnOrdered = ordered ? 'order-btn order-btn--ordered' : 'order-btn';
  
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
            <div className="drink-layers">
            {layers.map((layer, index) => (
              <Layer key={index} layers={layer} />
            ))}
          </div>
        </div>
      </div>
      <form className="drink__controls" data-id={id}>
        <input type="hidden" className="order-id" value={id} />
        <button className={btnOrdered}>
          {orderBtnText}
        </button>
      </form>
    </div>
  )
} 