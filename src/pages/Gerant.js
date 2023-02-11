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
                <td>10/11/2022</td>
                <td>100</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>05/01/2022</td>
                <td>200</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>07/08/2022</td>
                <td>100</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">4</th>
                <td>07/08/2022</td>
                <td>150</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">5</th>
                <td>01/02/2023</td>
                <td>10</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">6</th>
                <td>01/02/2023</td>
                <td>20</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">7</th>
                <td>10/02/2023</td>
                <td>30</td>
                <td>
                    <button type="button" class="button button1">Accepter</button> &nbsp;
                    <button type="button" class="button button2">Refuser</button>
                </td>
                  </tr>
                  <tr>
                <th scope="row">8</th>
                <td>12/12/2022</td>
                <td>50</td>
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
