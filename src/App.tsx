import "./App.css";
import { BienvenueAventurier } from "./components/exercice1/BienvenueAventurier";
import { Inventoria } from "./components/exercice2/Inventoria";
import { Section } from "./components/Section";
function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Section id="exercice1" className="my-5">
        <BienvenueAventurier title="Boutique d'Archibald le Sorcier 🧙‍♂️">
          <p>
            Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses
            <u>potions magiques</u> pour vos aventures !
          </p>
        </BienvenueAventurier>
      </Section>

      <Section id="exercice2" className="my-5">
        <Inventoria />

        <div className="row mt-5">
          <ul className="list-group list-group-horizontal flex-wrap">
            <li className="list-group-item list-group-item-info">
              Inventoria est pour le moment vide ⛺
            </li>
          </ul>
        </div>

      </Section>

      <section id="exercice3" className="my-5">
        <h2 className="mb-5">Boutique de potion</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card col border text-bg-dark bg-dark">
            <div className="card-body">Blabla</div>
            <div className="card-actions">
              <button>Ajouter à Inventoria</button>
            </div>
          </div>
        </div>
      </section>

      <section id="exercice4" className="my-5">
        <h2 className="mb-5">Ajout de potions</h2>

        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nom de la potion</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit">
                Ajouter à la boutique
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
