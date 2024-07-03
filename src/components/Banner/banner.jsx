import "./banner.css"
import beansImage from '../../pages/img/beans.jpg'; 

export const Banner = () => {
  return (
    <section id="home" className="banner" style={{ backgroundImage: `url(${beansImage})` }}>
      <div className="container">
        <div className="banner__content">
          <h1>Přijď to ochutnat!</h1>
          <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
        </div>
      </div>
    </section>
  )
}