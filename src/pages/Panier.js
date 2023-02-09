import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/header-login.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "styles/gerant.css"
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
        <div >
            <h1 className="titre-gerant"> Panier </h1>    
        </div>
        <div className = "monPanier">
         <div class="basket">
 
      <div class="basket-labels">
        <ul>
          <li class="item item-heading">Produits</li>
          <li class="price">Prix</li>
          <li class="subtotal">Total</li>
        </ul>
      </div>
      <div class="basket-product">
        <div class="item">
          <div class="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
          </div>
          <div class="product-details">
            <h1><strong><span class="item-quantity"></span> Eliza J</strong> Lace Sleeve Cuff Dress</h1>
            <p><strong>Navy, Size 18</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div class="price">26.00</div>
        <div class="subtotal">104.00</div>
        <div class="remove">
          <button>Remove</button>
        </div>
      </div>
      <div class="basket-product">
        <div class="item">
          <div class="product-image">
            <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame"/>
          </div>
          <div class="product-details">
            <h1><strong><span class="item-quantity"></span> Whistles</strong> Amella Lace Midi Dress</h1>
            <p><strong>Navy, Size 10</strong></p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div class="price">26.00</div>
        <div class="subtotal">26.00</div>
        <div class="remove">
          <button>Remove</button>
        </div>
      </div>
    </div>
    <aside>
      <div class="summary">
        <div class="summary-total-items"><span class="total-items"></span> Total de votre commande </div>
        <div class="summary-subtotal">
 
        </div>
        <div class="summary-delivery">       
            <p> Paiement à la livraison</p>
        </div>
        <div class="summary-total">
          <div class="total-title">Total</div>
          <div class="total-value final-value" id="basket-total">130.00</div>
        </div>
        <div class="summary-checkout">
          <button class="button button3">Passer la commande</button>
        </div>
      </div>
    </aside>
</div>
      
    </AnimationRevealPage>
  );
};
