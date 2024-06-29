import "./menu.css"
import { Drink } from "../Drink/drink"

export const Menu = ( { drinks }) => {
  return (
    <section className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.data.map((drink) => (
            <Drink
              key={drink.id}
              id={drink.id}
              name={drink.name}
              image={`http://localhost:4000${drink.image}`}
              ordered={drink.ordered}
              layers={drink.layers}
            />
          ))}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  )
}