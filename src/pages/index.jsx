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
const zkurvena = await response.json();

console.log(zkurvena);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={zkurvena}/>
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
