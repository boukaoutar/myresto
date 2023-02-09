import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/header-gerant.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "styles/gerant.css"

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
        <div>
              <h1 className="titre-gerant"> Espace Gérant </h1>  
              <p className="description"> Gérer vos commandes </p>    
        </div>
        <table id="table-commande" class="center">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Montant</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">5</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">6</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">7</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">8</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                </tr>
            </tbody>
        </table>
      <Footer />
    </AnimationRevealPage>
  );
};
