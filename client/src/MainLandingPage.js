import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import livraisonIconImageSrc from "images/livraison.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Des repas délicieux<HighlightedText>près de chez vous.</HighlightedText></>}
        description="Notre restaurant propose une cuisine inventive et savoureuse, préparée avec des ingrédients frais et de qualité supérieure. Nous offrons une variété de plats abordables pour satisfaire tous les goûts, du déjeuner au dîner. Venez découvrir pourquoi nous sommes la destination de choix pour les amateurs de bonne nourriture dans votre région."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="A propos de nous"
      />
      <MainFeature
        subheading={<Subheading>Avec vous depuis 2014</Subheading>}
        heading={
          <>
            Nous servons depuis
            <wbr /> <HighlightedText>plus de 5ans.</HighlightedText>
          </>
        }
        description={
          <Description>
            Avec plus de 5 années d'expérience dans le secteur de la restauration, nous sommes fiers de fournir des plats de qualité supérieure et un service exceptionnel à chaque client.
            <br />
            <br />
             Nous avons construit une solide réputation en offrant une cuisine inventive, des boissons délicieuses et une expérience culinaire mémorable. 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Nos offres"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <div id="notre-menus">
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Consulter <HighlightedText> notre menu.</HighlightedText>
          </>
        }
        />
      </div>

      <Features
        heading={
          <div id="servicess">
            Nos <HighlightedText>Services.</HighlightedText>
          </div>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "+5 Locations",
            description: "Nous sommes fiers d'offrir nos délicieux plats dans plus de 5 emplacements à travers la région",
          },
          {
            imageSrc: livraisonIconImageSrc,
            title: "Livraison à domicile",
            description: "Nous offrons la livraison rapide et fiable de nos plats délicieux directement à votre porte.",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Réceptions et événements",
            description: "Nous sommes spécialisés dans l'organisation de réceptions et d'événements.",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
        />

      <div id="qui-sommes-nous">
      <MainFeature2
        subheading={<Subheading>Une marque réputée</Subheading>}
        heading={<>Pourquoi <HighlightedText>nous choisir ?</HighlightedText></>}
        statistics={[
          {
            key: "Commandes",
            value: "+1000",
          },
          {
            key: "Clients",
            value: "+800"
          },
          {
            key: "Chefs",
            value: "+10"
          }
        ]}
        primaryButtonText="S'inscrire maintenant"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
        />
        </div>
      <Testimonial
        subheading=""
        heading={<>Avis <HighlightedText>de nos clients.</HighlightedText></>}
      />
      <DownloadApp
        text={<>Les gens autour de vous commandent de délicieux repas en utilisant <HighlightedTextInverse>MyResto App.</HighlightedTextInverse></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
