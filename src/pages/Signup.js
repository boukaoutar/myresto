import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/6418FC.svg";
import axios from 'axios';
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const handleSubmit = e => {
  e.preventDefault()
  axios
    .post("localhos:8080/api/clients/createAccount", { email, password })
    .then(response => {
      console.log(response)
    })
}
const [firstname, setFirstName] = useState()
const[lastname, setLastName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Rejoindre My Resto",
  submitButtonText = "S'inscrire",
  SubmitButtonIcon = SignUpIcon,
  signInUrl = "/components/innerPages/LoginPage"
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <a href="/">
              revenir 
          </a>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>

              <Form>
                <Input type="text" placeholder="Prénom" value={firstname}
                  onChange={e => setFirstName(e.target.value)} />
                <Input type="text" placeholder="Nom" value={lastname}
                  onChange={e => setLastName(e.target.value)}/>
                <Input type="email" placeholder="Email" value={email}
                  onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Mot de passe" value={password}
                  onChange={e => setPassword(e.target.value)} />
                <Input type="password" placeholder="Confirmer votre mot de passe" />
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text" onClick={handleSubmit}>{submitButtonText}</span>
                </SubmitButton>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Vous avez déjà un compte ?{" "}
                  <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                    Se connecter
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
