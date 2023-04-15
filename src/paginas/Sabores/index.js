import Rodape from "../../componentes/Rodape/";
import Topo from "../../componentes/Topo/";
import "./style.css";

export default function Sabores() {
  return (
    <div>
      <Topo />
      <main>
        <section className="secao-banner-sabores">
          <div>
            <h1>Nossos Sabores</h1>
          </div>
        </section>

        <section className="secao-sabores-sorvete limitar-secao">
          <h2>Sabores de sorvete</h2>

          <div className="container-sorvetes">
            <div className="box-sorvete">
              <img src="./assets/sabor-oreo.png" alt="Sorvete de Oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>

            <div className="box-sorvete">
              <img
                src="./assets/sabor-pistache.png"
                alt="Sorvete de Pistache"
              />
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>

            <div className="box-sorvete">
              <img
                src="./assets/sabor-cookies-avela.png"
                alt="Sorvete de Cookies com Avelã"
              />
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>

            <div className="box-sorvete">
              <img src="./assets/sorbet-kiwi.png" alt="Sorvete de Kiwi" />
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>

            <div className="box-sorvete">
              <img src="./assets/sorbet-morango.png" alt="Sorvete de Morango" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>

            <div className="box-sorvete">
              <img
                src="./assets/sorbet-limao.png"
                alt="Sorvete de Limão Siciliano"
              />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>
                O incrível sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}
