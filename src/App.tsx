import { useState } from "react";
import "./App.css";
import { BienvenueAventurier } from "./components/exercice1/BienvenueAventurier";
import { Inventoria } from "./components/exercice2/Inventoria";
import { ButtonInventoria } from "./components/exercice2/Button";
import { Section } from "./components/Section";
import potionsList from "./data/potion";
function App() {

  const [isInventoryActive, setInventoryActive] = useState(true);
  console.log(isInventoryActive);


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
        <h2>Inventoria</h2>
        <ButtonInventoria onShow={() => { setInventoryActive(!isInventoryActive) }} textBtn={isInventoryActive ? "Fermer Inventoria" : "Ouvrir Inventoria"} />
        {isInventoryActive ? <Inventoria /> : ""}
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
