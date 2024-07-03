import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Order } from '../components/Order/order';

(async () => {
  const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
  const data = await response.json();
  console.log(data);

  const root = document.querySelector('#root');
    root.innerHTML = render(
      <div className="page">
        <Header showMenu={true} />
        <Order items={data} /> 
        <Footer />
      </div>
    );
})();
