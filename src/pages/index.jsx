import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';


const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={data}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


function handleNavigation() {
  let rolloutNav = document.querySelector('.rollout-nav');
  rolloutNav.classList.toggle('nav-closed');
}

document.querySelector('.nav-btn').addEventListener("click", handleNavigation);
document.querySelector('.rollout-nav').addEventListener("click", handleNavigation);

document.querySelectorAll('.drink__controls').forEach(form => {
  form.querySelector('button').addEventListener('click', async (event) => {
    event.preventDefault();
    const drinkId = form.dataset.id;

    const isOrdered = form.querySelector('button').classList.contains('order-btn--ordered');

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: !isOrdered }]),
    });

    location.reload();
  });
});